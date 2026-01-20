"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSignals = checkSignals;
const hyperliquidClient_1 = require("./hyperliquidClient");
const config_1 = require("./config");
// Calcula SMA (Simple Moving Average)
function calculateSMA(candles, period) {
    if (candles.length < period)
        return candles[candles.length - 1].close;
    const slice = candles.slice(-period);
    const sum = slice.reduce((acc, candle) => acc + candle.close, 0);
    return sum / period;
}
// Calcula EMA (Exponential Moving Average)
function calculateEMA(candles, period) {
    if (candles.length < period)
        return candles[candles.length - 1].close;
    const k = 2 / (period + 1);
    let ema = candles[candles.length - period].close;
    for (let i = candles.length - period + 1; i < candles.length; i++) {
        ema = candles[i].close * k + ema * (1 - k);
    }
    return ema;
}
// Calcula o desvio padrão
function calculateStdDev(candles, period) {
    if (candles.length < period)
        return 0;
    const slice = candles.slice(-period);
    const mean = slice.reduce((acc, c) => acc + c.close, 0) / period;
    const variance = slice.reduce((acc, c) => acc + Math.pow(c.close - mean, 2), 0) / period;
    return Math.sqrt(variance);
}
// Calcula Bollinger Bands
function calculateBollingerBands(candles, period = 20, stdDev = 2) {
    const basis = calculateSMA(candles, period);
    const dev = stdDev * calculateStdDev(candles, period);
    return {
        upper: basis + dev,
        middle: basis,
        lower: basis - dev
    };
}
// Calcula Bollinger Bands %b
function calculateBBPercent(candles, period = 20, stdDev = 2) {
    const currentPrice = candles[candles.length - 1].close;
    const bb = calculateBollingerBands(candles, period, stdDev);
    if (bb.upper === bb.lower)
        return 0.5;
    const bbr = (currentPrice - bb.lower) / (bb.upper - bb.lower);
    return bbr;
}
// Calcula RSI (Relative Strength Index) usando OHLC4
function calculateRSI(candles, period = 14) {
    if (candles.length < period + 1)
        return 50;
    // Usa OHLC4 (média de open, high, low, close)
    const ohlc4Values = candles.map(c => (c.open + c.high + c.low + c.close) / 4);
    let gains = 0;
    let losses = 0;
    for (let i = ohlc4Values.length - period; i < ohlc4Values.length; i++) {
        const change = ohlc4Values[i] - ohlc4Values[i - 1];
        if (change > 0) {
            gains += change;
        }
        else {
            losses += Math.abs(change);
        }
    }
    const avgGain = gains / period;
    const avgLoss = losses / period;
    if (avgLoss === 0)
        return 100;
    const rs = avgGain / avgLoss;
    const rsi = 100 - (100 / (1 + rs));
    return rsi;
}
// Estratégia: RSI + EMA200 + Bollinger Bands %b
// Baseada no Pine Script fornecido
async function checkSignals() {
    try {
        const candles = await (0, hyperliquidClient_1.getCandles)(config_1.config.timeframe, 250);
        if (candles.length < 200) {
            console.log('⚠️ Dados insuficientes para análise (mínimo 200 candles)');
            return null;
        }
        const currentPrice = candles[candles.length - 1].close;
        // Calcula EMAs
        const ema10 = calculateEMA(candles, 10);
        const ema20 = calculateEMA(candles, 20);
        const ema50 = calculateEMA(candles, 50);
        const ema100 = calculateEMA(candles, 100);
        const ema200 = calculateEMA(candles, 200);
        // Calcula SMAs
        const sma50 = calculateSMA(candles, 50);
        const sma175 = calculateSMA(candles, 175);
        const sma200 = calculateSMA(candles, 200);
        // Calcula RSI usando OHLC4
        const rsi = calculateRSI(candles, 14);
        // Calcula Bollinger Bands %b
        const bbr = calculateBBPercent(candles, 20, 2);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📊 INDICADORES TÉCNICOS');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log(`💰 Preço Atual: $${currentPrice.toFixed(2)}`);
        console.log('');
        console.log('📈 EMAs:');
        console.log(`   EMA10:  $${ema10.toFixed(2)}`);
        console.log(`   EMA20:  $${ema20.toFixed(2)}`);
        console.log(`   EMA50:  $${ema50.toFixed(2)}`);
        console.log(`   EMA100: $${ema100.toFixed(2)}`);
        console.log(`   EMA200: $${ema200.toFixed(2)} ${currentPrice < ema200 ? '🔴 Abaixo' : '🟢 Acima'}`);
        console.log('');
        console.log('📊 SMAs:');
        console.log(`   SMA50:  $${sma50.toFixed(2)}`);
        console.log(`   SMA175: $${sma175.toFixed(2)}`);
        console.log(`   SMA200: $${sma200.toFixed(2)}`);
        console.log('');
        console.log(`🎯 RSI (14):      ${rsi.toFixed(2)}`);
        console.log(`📉 BB %b:         ${bbr.toFixed(4)}`);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        // ====== CONDIÇÕES DE COMPRA (LONG) ======
        // Baseado no Pine Script:
        // buyConditionDaily = close < ema200 and rsi < 30 and bbr < 0
        // buyConditionBearMarket = close < ema200 and rsi < 30 and bbr < 0
        const buyCondition = currentPrice < ema200 && rsi < 30 && bbr < 0;
        if (buyCondition) {
            console.log('');
            console.log('🟢 ═══════════════════════════════════════');
            console.log('   SINAL DE COMPRA (LONG) DETECTADO!');
            console.log('═══════════════════════════════════════');
            console.log('✅ Preço abaixo da EMA200');
            console.log('✅ RSI < 30 (oversold)');
            console.log('✅ Bollinger %b < 0 (abaixo da banda inferior)');
            console.log('═══════════════════════════════════════');
            return 'long';
        }
        // ====== CONDIÇÕES DE VENDA (SHORT) ======
        // Baseado no Pine Script:
        // sellConditionDaily = rsi > 70 and bbr > 1 and close > ema200
        const sellCondition = rsi > 70 && bbr > 1 && currentPrice > ema200;
        if (sellCondition) {
            console.log('');
            console.log('🔴 ═══════════════════════════════════════');
            console.log('   SINAL DE VENDA (SHORT) DETECTADO!');
            console.log('═══════════════════════════════════════');
            console.log('✅ RSI > 70 (overbought)');
            console.log('✅ Bollinger %b > 1 (acima da banda superior)');
            console.log('✅ Preço acima da EMA200');
            console.log('═══════════════════════════════════════');
            return 'short';
        }
        console.log('');
        console.log('⚪ Nenhum sinal detectado - aguardando condições');
        console.log('');
        return null;
    }
    catch (error) {
        console.error('❌ Erro ao calcular sinais:', error);
        return null;
    }
}
