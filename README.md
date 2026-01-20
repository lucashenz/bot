✅ Checklist Completo - Bot Hyperliquid
📦 Passo 1: Estrutura de Arquivos
Crie esta estrutura no seu projeto:

botHPL/
├── src/
│   ├── bot.ts                    ← Arquivo principal
│   ├── hyperliquidClient.ts      ← Cliente da API
│   ├── indicators.ts             ← Estratégia RSI+EMA200+BB
│   ├── config.ts                 ← Configurações
│   └── types.ts                  ← Tipos TypeScript
├── .env                          ← Variáveis de ambiente (SEU ARQUIVO)
├── .gitignore                    ← Ignorar arquivos sensíveis
├── package.json                  ← Dependências
├── tsconfig.json                 ← Config TypeScript
└── README.md                     ← Documentação (opcional)
🔧 Passo 2: Configurar package.json
Copie o conteúdo do artifact package.json para o seu arquivo.

🔧 Passo 3: Configurar tsconfig.json
Copie o conteúdo do artifact tsconfig.json para o seu arquivo.

🔐 Passo 4: Criar .env
IMPORTANTE: Copie o template do .env e preencha com SEUS dados:

bash
# Cole este conteúdo no seu arquivo .env
PRIVATE_KEY=0xSUACHAVEPRIVADAAQUI
IS_TESTNET=true                    # ⚠️ Comece com TRUE!
SYMBOL=BTC-USDC
LEVERAGE=10
POSITION_SIZE=5
STOP_LOSS_PCT=1
TAKE_PROFIT_PCT=10
TIMEFRAME=4h
Como obter sua Private Key:
Abra MetaMask
Clique nos 3 pontinhos
"Detalhes da conta"
"Exportar chave privada"
Digite sua senha
COPIE (começa com 0x...)
⚠️ NUNCA compartilhe esta chave!

📝 Passo 5: Criar .gitignore
Crie um arquivo .gitignore na raiz do projeto:

node_modules/
dist/
.env
.DS_Store
*.log
.vscode/
💻 Passo 6: Copiar os Códigos
Copie os arquivos na ordem:

types.ts - Mais simples, sem dependências
config.ts - Usa apenas dotenv
hyperliquidClient.ts - Funções da API
indicators.ts - Estratégia completa
bot.ts - Loop principal
📦 Passo 7: Instalar Dependências
bash
npm install
Isso instalará:

@nktkas/hyperliquid - SDK da Hyperliquid
viem - Para trabalhar com wallets
dotenv - Para variáveis de ambiente
typescript - Compilador
tsx - Executar TypeScript direto
🔨 Passo 8: Compilar
bash
npm run build
Se houver erros:

bash
npx tsc --noEmit  # Verifica erros sem compilar
🧪 Passo 9: Testar na TESTNET
ANTES DE TUDO:

Certifique-se que .env tem IS_TESTNET=true
Adicione fundos na testnet:
Vá em https://app.hyperliquid-testnet.xyz
Conecte sua wallet
Solicite fundos de teste (faucet)
Execute o bot:
bash
npm start
ou em modo dev (hot reload):

bash
npm run dev
👀 Passo 10: Monitorar
O bot mostrará:

╔════════════════════════════════════════════════════════════╗
║          🤖 BOT HYPERLIQUID - RSI + EMA200 + BB %b        ║
╚════════════════════════════════════════════════════════════╝

⚙️  CONFIGURAÇÕES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 Network:          TESTNET ⚠️
📊 Par:              BTC-USDC
💰 Tamanho posição:  5 BTC
📈 Alavancagem:      10x
🎯 Take Profit:      10%
🛡️  Stop Loss:        1%
⏰ Timeframe:        4h
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔌 Conectando ao WebSocket...
✅ WebSocket conectado para BTC
✅ WebSocket conectado! Preço atual: $98542.50

🚀 Bot iniciado - Verificando sinais a cada 1 minuto
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⏰ 20/01/2026 15:30:00 - Verificando condições...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 INDICADORES TÉCNICOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 Preço Atual: $98542.50

📈 EMAs:
   EMA10:  $98500.12
   EMA20:  $98450.00
   EMA50:  $99000.00
   EMA100: $100500.00
   EMA200: $102000.00 🔴 Abaixo

📊 SMAs:
   SMA50:  $99100.00
   SMA175: $101000.00
   SMA200: $102500.00

🎯 RSI (14):      28.45
📉 BB %b:         -0.12
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟢 ═══════════════════════════════════════
   SINAL DE COMPRA (LONG) DETECTADO!
═══════════════════════════════════════
✅ Preço abaixo da EMA200
✅ RSI < 30 (oversold)
✅ Bollinger %b < 0 (abaixo da banda inferior)
═══════════════════════════════════════
🎯 Passo 11: Entender os Sinais
LONG (Compra):
Preço < EMA200 ✓
RSI < 30 ✓
BB %b < 0 ✓
SHORT (Venda):
RSI > 70 ✓
BB %b > 1 ✓
Preço > EMA200 ✓
🚀 Passo 12: Migrar para MAINNET (Quando estiver confiante)
Pare o bot (Ctrl+C)
Edite .env:
bash
   IS_TESTNET=false  # ⚠️ CUIDADO!
Reduza a posição inicial:
bash
   POSITION_SIZE=0.001  # Comece pequeno!
   LEVERAGE=2           # Alavancagem baixa!
Execute novamente:
bash
   npm start
⚠️ AVISOS IMPORTANTES
Antes de ir para MAINNET:
 Testei pelo menos 1 semana na testnet
 Entendo como a estratégia funciona
 Sei como fechar posições manualmente
 Tenho fundos que posso perder
 Configurei posição pequena (0.001 BTC)
 Alavancagem baixa (2x-5x)
 Vou monitorar constantemente
Riscos:
❌ Você pode perder TODO seu capital
❌ Alavancagem amplifica ganhos E perdas
❌ Mercado pode ir contra você
❌ Bugs podem acontecer
❌ Liquidação pode ocorrer
Responsabilidades:
✅ Este bot é educacional
✅ Você é 100% responsável
✅ Não há garantias de lucro
✅ Opere por sua conta e risco

🐛 Troubleshooting
Erro: "Asset not found"
bash
# Verifique o símbolo no .env
SYMBOL=BTC-USDC  # Deve ser exato
Erro: "Insufficient balance"
Adicione fundos na testnet/mainnet
Reduza POSITION_SIZE
Erro de compilação
bash
rm -rf node_modules package-lock.json dist
npm install
npm run build
WebSocket não conecta
Verifique internet
Confirme IS_TESTNET correto
Bot não executa trades
Verifique se os sinais estão sendo detectados
Confirme que não há posição aberta
Veja se o preço é válido (> 0)
📚 Recursos Adicionais
Documentação Hyperliquid: https://hyperliquid.gitbook.io
Documentação da Lib: https://github.com/nktkas/hyperliquid
TradingView (Pine Script): Teste visualmente a estratégia
🎓 Próximos Passos
✅ Instalar e testar na testnet
✅ Observar sinais por 1-2 semanas
✅ Entender RSI, EMA e Bollinger Bands
✅ Ajustar parâmetros (TP, SL, alavancagem)
✅ Backtest manual (planilha)
✅ Mainnet com valores mínimos
✅ Escalar gradualmente
Bons trades e sempre opere com responsabilidade! 🚀

