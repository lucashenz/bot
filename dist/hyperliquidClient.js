"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCandles = getCandles;
exports.subscribeWebSocket = subscribeWebSocket;
exports.getOpenPosition = getOpenPosition;
exports.closePosition = closePosition;
exports.placeOrder = placeOrder;
const hyperliquid_1 = require("@nktkas/hyperliquid");
const accounts_1 = require("viem/accounts");
const ws_1 = __importDefault(require("ws"));
const config_1 = require("./config");
// =======================
// HTTP / TRADING CLIENTS
// =======================
const httpTransport = new hyperliquid_1.HttpTransport({
    isTestnet: config_1.config.isTestnet,
});
const info = new hyperliquid_1.InfoClient({
    transport: httpTransport,
});
const wallet = (0, accounts_1.privateKeyToAccount)(config_1.config.privateKey);
const exchange = new hyperliquid_1.ExchangeClient({
    transport: httpTransport,
    wallet,
});
const coin = config_1.config.symbol.replace('-USDC', '');
// =======================
// AUX
// =======================
async function getAssetId() {
    const meta = await info.meta();
    const asset = meta.universe.find((a) => a.name === coin);
    if (!asset)
        throw new Error(`Asset ${coin} not found`);
    return meta.universe.indexOf(asset);
}
// =======================
// CANDLES
// =======================
async function getCandles(interval, limit = 300) {
    try {
        const intervalMs = {
            '1m': 60000,
            '3m': 180000,
            '5m': 300000,
            '15m': 900000,
            '30m': 1800000,
            '1h': 3600000,
            '2h': 7200000,
            '4h': 14400000,
            '8h': 28800000,
            '12h': 43200000,
            '1d': 86400000,
            '3d': 259200000,
            '1w': 604800000,
            '1M': 2592000000,
        };
        const startTime = Date.now() - limit * (intervalMs[interval] ?? 14400000);
        const klines = await info.candleSnapshot({
            coin,
            interval,
            startTime,
            endTime: Date.now(),
        });
        return klines.map((c) => ({
            time: c.t,
            open: Number(c.o),
            high: Number(c.h),
            low: Number(c.l),
            close: Number(c.c),
            volume: Number(c.v),
        }));
    }
    catch (e) {
        console.error('❌ Erro ao buscar candles:', e);
        return [];
    }
}
// =======================
// WEBSOCKET (OFICIAL)
// =======================
function subscribeWebSocket(callback) {
    const ws = new ws_1.default('wss://api.hyperliquid.xyz/ws');
    ws.on('open', () => {
        ws.send(JSON.stringify({
            method: 'subscribe',
            subscription: {
                type: 'trades',
                coin,
            },
        }));
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
async function getOpenPosition() {
    try {
        const state = await info.clearinghouseState({
            user: wallet.address,
        });
        const pos = state.assetPositions.find((p) => p.position.coin === coin);
        if (!pos || Number(pos.position.szi) === 0) {
            return { hasPosition: false, isLong: false, entryPrice: 0, size: 0 };
        }
        return {
            hasPosition: true,
            isLong: Number(pos.position.szi) > 0,
            entryPrice: Number(pos.position.entryPx),
            size: Math.abs(Number(pos.position.szi)),
        };
    }
    catch (e) {
        console.error('❌ Erro ao buscar posição:', e);
        return { hasPosition: false, isLong: false, entryPrice: 0, size: 0 };
    }
}
// =======================
// FECHAR POSIÇÃO
// =======================
async function closePosition() {
    const pos = await getOpenPosition();
    if (!pos.hasPosition)
        return;
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
    }
    catch (e) {
        console.error('❌ Erro ao fechar posição:', e);
    }
}
// =======================
// ABRIR ORDEM
// =======================
async function placeOrder(isBuy, size, leverage, price) {
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
        const tpPx = (isBuy
            ? price * (1 + config_1.config.takeProfitPct / 100)
            : price * (1 - config_1.config.takeProfitPct / 100)).toFixed(0);
        const slPx = (isBuy
            ? price * (1 - config_1.config.stopLossPct / 100)
            : price * (1 + config_1.config.stopLossPct / 100)).toFixed(0);
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
    }
    catch (e) {
        console.error('❌ Erro ao executar ordem:', e);
    }
}
