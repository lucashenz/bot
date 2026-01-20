import { HttpTransport, InfoClient, ExchangeClient } from '@nktkas/hyperliquid';
import { privateKeyToAccount } from 'viem/accounts';
import WebSocket from 'ws';
import { config } from './config';
import { Candle } from './types';

// =======================
// HTTP / TRADING CLIENTS
// =======================

const httpTransport = new HttpTransport({
  isTestnet: config.isTestnet,
});

const info = new InfoClient({
  transport: httpTransport,
});

const wallet = privateKeyToAccount(config.privateKey as `0x${string}`);

const exchange = new ExchangeClient({
  transport: httpTransport,
  wallet,
});

const coin = config.symbol.replace('-USDC', '');

// =======================
// AUX
// =======================

async function getAssetId(): Promise<number> {
  const meta = await info.meta();
  const asset = meta.universe.find((a: any) => a.name === coin);
  if (!asset) throw new Error(`Asset ${coin} not found`);
  return meta.universe.indexOf(asset);
}

// =======================
// CANDLES
// =======================

export async function getCandles(
  interval:
    | '1m' | '3m' | '5m' | '15m' | '30m'
    | '1h' | '2h' | '4h' | '8h' | '12h'
    | '1d' | '3d' | '1w' | '1M',
  limit = 300
): Promise<Candle[]> {
  try {
    const intervalMs: Record<string, number> = {
      '1m': 60_000,
      '3m': 180_000,
      '5m': 300_000,
      '15m': 900_000,
      '30m': 1_800_000,
      '1h': 3_600_000,
      '2h': 7_200_000,
      '4h': 14_400_000,
      '8h': 28_800_000,
      '12h': 43_200_000,
      '1d': 86_400_000,
      '3d': 259_200_000,
      '1w': 604_800_000,
      '1M': 2_592_000_000,
    };

    const startTime =
      Date.now() - limit * (intervalMs[interval] ?? 14_400_000);

    const klines = await info.candleSnapshot({
      coin,
      interval,
      startTime,
      endTime: Date.now(),
    });

    return klines.map((c: any) => ({
      time: c.t,
      open: Number(c.o),
      high: Number(c.h),
      low: Number(c.l),
      close: Number(c.c),
      volume: Number(c.v),
    }));
  } catch (e) {
    console.error('❌ Erro ao buscar candles:', e);
    return [];
  }
}

// =======================
// WEBSOCKET (OFICIAL)
// =======================

export function subscribeWebSocket(
  callback: (price: number) => void
) {
  const ws = new WebSocket('wss://api.hyperliquid.xyz/ws');

  ws.on('open', () => {
    ws.send(
      JSON.stringify({
        method: 'subscribe',
        subscription: {
          type: 'trades',
          coin,
        },
      })
    );

    console.log(`✅ WebSocket conectado (trades) para ${coin}`);
  });

  ws.on('message', (raw) => {
    const msg = JSON.parse(raw.toString());

    if (msg?.channel === 'trades' && msg?.data?.length) {
      const last = msg.data[msg.data.length - 1];
      if (last?.px) {
        callback(Number(last.px));
      }
    }
  });

  ws.on('error', (err) => {
    console.error('❌ WebSocket erro:', err);
  });

  ws.on('close', () => {
    console.warn('⚠️ WebSocket fechado. Reconectando em 3s...');
    setTimeout(() => subscribeWebSocket(callback), 3000);
  });

  return ws;
}

// =======================
// POSIÇÃO
// =======================

export async function getOpenPosition(): Promise<{
  hasPosition: boolean;
  isLong: boolean;
  entryPrice: number;
  size: number;
}> {
  try {
    const state = await info.clearinghouseState({
      user: wallet.address,
    });

    const pos = state.assetPositions.find(
      (p: any) => p.position.coin === coin
    );

    if (!pos || Number(pos.position.szi) === 0) {
      return { hasPosition: false, isLong: false, entryPrice: 0, size: 0 };
    }

    return {
      hasPosition: true,
      isLong: Number(pos.position.szi) > 0,
      entryPrice: Number(pos.position.entryPx),
      size: Math.abs(Number(pos.position.szi)),
    };
  } catch (e) {
    console.error('❌ Erro ao buscar posição:', e);
    return { hasPosition: false, isLong: false, entryPrice: 0, size: 0 };
  }
}

// =======================
// FECHAR POSIÇÃO
// =======================

export async function closePosition() {
  const pos = await getOpenPosition();
  if (!pos.hasPosition) return;

  try {
    const asset = await getAssetId();

    await exchange.order({
      orders: [{
        a: asset,
        b: !pos.isLong,
        p: '0',
        s: pos.size.toString(),
        r: true,
        t: { limit: { tif: 'Ioc' } },
      }],
      grouping: 'na',
    });

    console.log('✅ Posição fechada com sucesso!');
  } catch (e) {
    console.error('❌ Erro ao fechar posição:', e);
  }
}

// =======================
// ABRIR ORDEM
// =======================

export async function placeOrder(
  isBuy: boolean,
  size: number,
  leverage: number,
  price: number
) {
  try {
    const asset = await getAssetId();

    await exchange.updateLeverage({
      asset,
      isCross: true,
      leverage,
    });

    await exchange.order({
      orders: [{
        a: asset,
        b: isBuy,
        p: '0',
        s: size.toString(),
        r: false,
        t: { limit: { tif: 'Ioc' } },
      }],
      grouping: 'na',
    });

    const tpPx = (
      isBuy
        ? price * (1 + config.takeProfitPct / 100)
        : price * (1 - config.takeProfitPct / 100)
    ).toFixed(0);

    const slPx = (
      isBuy
        ? price * (1 - config.stopLossPct / 100)
        : price * (1 + config.stopLossPct / 100)
    ).toFixed(0);

    await exchange.order({
      orders: [{
        a: asset,
        b: !isBuy,
        p: tpPx,
        s: size.toString(),
        r: true,
        t: {
          trigger: {
            triggerPx: tpPx,
            isMarket: true,
            tpsl: 'tp',
          },
        },
      }],
      grouping: 'na',
    });

    await exchange.order({
      orders: [{
        a: asset,
        b: !isBuy,
        p: slPx,
        s: size.toString(),
        r: true,
        t: {
          trigger: {
            triggerPx: slPx,
            isMarket: true,
            tpsl: 'sl',
          },
        },
      }],
      grouping: 'na',
    });

    console.log('✅ Ordem + TP/SL configurados');
  } catch (e) {
    console.error('❌ Erro ao executar ordem:', e);
  }
}
