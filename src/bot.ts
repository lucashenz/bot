import { config } from './config';
import { 
  subscribeWebSocket, 
  placeOrder, 
  getOpenPosition, 
  closePosition 
} from './hyperliquidClient';
import { checkSignals } from './indicators';

let currentPrice = 0;
let isProcessing = false;

async function main() {
  console.clear();
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║          🤖 BOT HYPERLIQUID - RSI + EMA200 + BB %b        ║');
  console.log('╚════════════════════════════════════════════════════════════╝');
  console.log('');
  console.log('⚙️  CONFIGURAÇÕES:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`🌐 Network:          ${config.isTestnet ? 'TESTNET ⚠️' : 'MAINNET 🔴'}`);
  console.log(`📊 Par:              ${config.symbol}`);
  console.log(`💰 Tamanho posição:  ${config.positionSize} BTC`);
  console.log(`📈 Alavancagem:      ${config.leverage}x`);
  console.log(`🎯 Take Profit:      ${config.takeProfitPct}%`);
  console.log(`🛡️  Stop Loss:        ${config.stopLossPct}%`);
  console.log(`⏰ Timeframe:        ${config.timeframe}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');

  if (!config.isTestnet) {
    console.log('⚠️  ATENÇÃO: Você está operando na MAINNET!');
    console.log('💸 Dinheiro real será usado nas operações!');
    console.log('🔒 Certifique-se de que suas configurações estão corretas.');
    console.log('');
  }

  console.log('🔌 Conectando ao WebSocket...');
  
  await subscribeWebSocket((price) => {
    currentPrice = price;
  });

  await new Promise(resolve => setTimeout(resolve, 3000));
  
  if (currentPrice === 0) {
    console.error('❌ Falha ao conectar ao WebSocket. Verifique sua conexão.');
    process.exit(1);
  }

  console.log(`✅ WebSocket conectado! Preço atual: $${currentPrice.toFixed(2)}`);
  console.log('');
  console.log('🚀 Bot iniciado - Verificando sinais a cada 1 minuto');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');

  // Primeira verificação imediata
  await executeStrategy();

  // Loop que roda a cada 1 minuto
  setInterval(async () => {
    await executeStrategy();
  }, 60000);
}

async function executeStrategy() {
  if (isProcessing) {
    console.log('⏳ Processamento anterior ainda em execução...\n');
    return;
  }

  try {
    isProcessing = true;
    
    const now = new Date();
    console.log(`\n⏰ ${now.toLocaleString('pt-BR')} - Verificando condições...\n`);
    
    const signal = await checkSignals();
    
    if (!signal) {
      return;
    }

    console.log(`\n💡 Verificando posição atual...`);
    const pos = await getOpenPosition();

    if (pos.hasPosition) {
      console.log(`📍 Posição aberta: ${pos.isLong ? 'LONG 🟢' : 'SHORT 🔴'}`);
      console.log(`   Preço de entrada: $${pos.entryPrice.toFixed(2)}`);
      console.log(`   Tamanho: ${pos.size} BTC`);
      console.log(`   P&L: ${pos.isLong 
        ? ((currentPrice - pos.entryPrice) / pos.entryPrice * 100).toFixed(2)
        : ((pos.entryPrice - currentPrice) / pos.entryPrice * 100).toFixed(2)}%`);
    } else {
      console.log(`📍 Nenhuma posição aberta`);
    }

    if (signal === 'long') {
      if (pos.hasPosition && !pos.isLong) {
        console.log('\n🔄 Fechando posição SHORT para abrir LONG...');
        await closePosition();
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      if (!pos.hasPosition) {
        if (currentPrice > 0) {
          console.log('\n📈 Executando ordem de COMPRA (LONG)...\n');
          await placeOrder(true, config.positionSize, config.leverage, currentPrice);
        } else {
          console.log('❌ Preço inválido, aguardando próxima verificação\n');
        }
      } else if (pos.isLong) {
        console.log('✅ Já estou em LONG - mantendo posição\n');
      }
    } 
    else if (signal === 'short') {
      if (pos.hasPosition && pos.isLong) {
        console.log('\n🔄 Fechando posição LONG para abrir SHORT...');
        await closePosition();
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      if (!pos.hasPosition) {
        if (currentPrice > 0) {
          console.log('\n📉 Executando ordem de VENDA (SHORT)...\n');
          await placeOrder(false, config.positionSize, config.leverage, currentPrice);
        } else {
          console.log('❌ Preço inválido, aguardando próxima verificação\n');
        }
      } else if (!pos.isLong) {
        console.log('✅ Já estou em SHORT - mantendo posição\n');
      }
    }
  } catch (error) {
    console.error('❌ Erro no loop principal:', error);
  } finally {
    isProcessing = false;
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n\n⚠️  Encerrando bot...');
  const pos = await getOpenPosition();
  if (pos.hasPosition) {
    console.log(`⚠️  ATENÇÃO: Você tem uma posição ${pos.isLong ? 'LONG' : 'SHORT'} aberta!`);
    console.log(`   Preço de entrada: $${pos.entryPrice.toFixed(2)}`);
    console.log(`   Tamanho: ${pos.size} BTC`);
    console.log('   A posição NÃO foi fechada automaticamente.');
  }
  console.log('\n👋 Bot encerrado.\n');
  process.exit(0);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
  process.exit(1);
});

main().catch((error) => {
  console.error('❌ Erro fatal ao iniciar o bot:', error);
  process.exit(1);
});