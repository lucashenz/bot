import dotenv from 'dotenv';
dotenv.config();

export const config = {
  privateKey: process.env.PRIVATE_KEY || '',
  isTestnet: process.env.IS_TESTNET === 'true',
  symbol: process.env.SYMBOL || 'BTC',
  positionSize: parseFloat(process.env.POSITION_SIZE || '0,000056'),
  leverage: parseInt(process.env.LEVERAGE || '10'),
  stopLossPct: parseFloat(process.env.STOP_LOSS_PCT || '1'),
  takeProfitPct: parseFloat(process.env.TAKE_PROFIT_PCT || '10'),
  timeframe: (process.env.TIMEFRAME || '4h') as '1m' | '3m' | '5m' | '15m' | '30m' | '1h' | '2h' | '4h' | '8h' | '12h' | '1d' | '3d' | '1w' | '1M',
};