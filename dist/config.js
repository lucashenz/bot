"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    privateKey: process.env.PRIVATE_KEY || '',
    isTestnet: process.env.IS_TESTNET === 'true',
    symbol: process.env.SYMBOL || 'BTC',
    positionSize: parseFloat(process.env.POSITION_SIZE || '0,000056'),
    leverage: parseInt(process.env.LEVERAGE || '10'),
    stopLossPct: parseFloat(process.env.STOP_LOSS_PCT || '1'),
    takeProfitPct: parseFloat(process.env.TAKE_PROFIT_PCT || '10'),
    timeframe: (process.env.TIMEFRAME || '4h'),
};
