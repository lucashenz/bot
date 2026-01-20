📘 README.md — Bot Hyperliquid (RSI + EMA200 + BB %b)
# 🤖 Bot Hyperliquid — RSI + EMA200 + Bollinger %b

Bot de trading automático para **Hyperliquid**, desenvolvido em **Node.js + TypeScript**, utilizando estratégia baseada em:

- RSI (14)
- EMA 200
- Bollinger Bands (%b)
- Execução automática com TP/SL
- WebSocket oficial da Hyperliquid
- Compatível com **Testnet** e **Mainnet**

> ⚠️ **ATENÇÃO**: Este bot é educacional. Você é totalmente responsável pelo uso em ambiente real.

---

## 📦 Estrutura do Projeto

```text
botHPL/
├── src/
│   ├── bot.ts                    # Arquivo principal
│   ├── hyperliquidClient.ts      # Cliente da API Hyperliquid
│   ├── indicators.ts             # Estratégia RSI + EMA200 + BB %b
│   ├── config.ts                 # Configurações e variáveis de ambiente
│   └── types.ts                  # Tipos TypeScript
├── dist/                         # Código compilado
├── .env                          # Variáveis de ambiente (NÃO versionar)
├── .gitignore                    # Arquivos ignorados pelo Git
├── package.json                  # Dependências e scripts
├── tsconfig.json                 # Configuração TypeScript
└── README.md                     # Documentação

🔧 Instalação
1️⃣ Clonar o repositório
git clone https://github.com/seu-usuario/botHPL.git
cd botHPL

2️⃣ Instalar dependências
npm install

🔐 Configuração (.env)

Crie um arquivo .env na raiz do projeto:

PRIVATE_KEY=0xSUA_CHAVE_PRIVADA
IS_TESTNET=true           # ⚠️ Comece SEMPRE com true
SYMBOL=BTC-USDC
LEVERAGE=10
POSITION_SIZE=5
STOP_LOSS_PCT=1
TAKE_PROFIT_PCT=10
TIMEFRAME=4h

🔑 Como obter sua Private Key

Abra a MetaMask

Clique nos três pontinhos da conta

“Detalhes da conta”

“Exportar chave privada”

Copie a chave (começa com 0x...)

⚠️ Nunca compartilhe sua chave privada.

🔨 Compilação
npm run build


Para verificar erros sem gerar arquivos:

npx tsc --noEmit

🧪 Testar na Testnet (OBRIGATÓRIO)

Antes de usar dinheiro real:

Confirme no .env:

IS_TESTNET=true


Acesse a Testnet:

https://app.hyperliquid-testnet.xyz

Conecte sua wallet

Solicite fundos no faucet

Execute o bot:

npm start

📈 Saída Esperada no Terminal
╔════════════════════════════════════════════════════════════╗
║          🤖 BOT HYPERLIQUID - RSI + EMA200 + BB %b        ║
╚════════════════════════════════════════════════════════════╝

⚙️  CONFIGURAÇÕES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 Network:          TESTNET
📊 Par:              BTC-USDC
💰 Tamanho posição:  5 BTC
📈 Alavancagem:      10x
🎯 Take Profit:      10%
🛡️  Stop Loss:        1%
⏰ Timeframe:        4h
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔌 Conectando ao WebSocket...
✅ WebSocket conectado!
🚀 Bot iniciado - Verificando sinais a cada 1 minuto

📊 Estratégia de Trading
🟢 SINAL DE COMPRA (LONG)

Preço abaixo da EMA 200

RSI < 30 (oversold)

Bollinger %b < 0

🔴 SINAL DE VENDA (SHORT)

Preço acima da EMA 200

RSI > 70 (overbought)

Bollinger %b > 1

🚀 Migrar para Mainnet (COM CUIDADO)

Pare o bot

Ajuste o .env:

IS_TESTNET=false
POSITION_SIZE=0.001
LEVERAGE=2


Execute novamente:

npm start


⚠️ Recomendações

Teste pelo menos 1 semana na Testnet

Comece com posição mínima

Use alavancagem baixa (2x–5x)

Monitore o bot regularmente

🐛 Troubleshooting
Erro: Asset not found
SYMBOL=BTC-USDC

Erro: Insufficient balance

Adicione fundos

Reduza POSITION_SIZE

Erro de build
rm -rf node_modules package-lock.json dist
npm install
npm run build

WebSocket não conecta

Verifique internet

Confirme IS_TESTNET

Aguarde reconexão automática

📚 Recursos

Hyperliquid Docs: https://hyperliquid.gitbook.io

SDK: https://github.com/nktkas/hyperliquid

TradingView (backtest visual)

⚠️ Aviso Legal

Este bot é apenas educacional

Não há garantia de lucro

Você pode perder todo o capital

Use por sua conta e risco