# ZetaChain Agent Setup

## Overview
This Mastra project now includes a ZetaChain educational agent that helps users learn about cross-chain development, EVM compatibility, and building universal applications.

## Agent Capabilities
- **Cross-Chain Education**: Teaches ZetaChain's interoperability features
- **EVM Development**: Explains EVM compatibility and smart contract development  
- **Universal Apps**: Guides users on building multi-chain applications
- **ZRC20 Tokens**: Covers cross-chain token standards
- **Gateway Contracts**: Explains cross-chain messaging and calls
- **Multi-Chain Integration**: Bitcoin, Ethereum, Solana, TON, Sui support

## Key Features
- **Smart Search**: Automatically searches ZetaChain documentation using Brave Search API
- **Educational Focus**: Provides step-by-step learning guidance
- **Code Examples**: Includes practical Solidity and JavaScript examples
- **Best Practices**: Teaches ZetaChain development patterns

## Setup Requirements

### 1. Brave Search API Key
Get your API key from https://api.search.brave.com/
```bash
export BRAVE_API_KEY="your_api_key_here"
```

### 2. Environment Variables
Create a `.env` file:
```
BRAVE_API_KEY=your_brave_api_key
GOOGLE_API_KEY=your_google_ai_key  # for Gemini model
```

### 3. Run the Agent
```bash
npm run dev
```

## Usage Examples

### Basic Questions
- "What is ZetaChain?"
- "How does cross-chain development work?"
- "What are universal applications?"

### Technical Questions  
- "How do I deploy a contract on ZetaChain?"
- "What is ZRC20 token standard?"
- "How do Gateway contracts work?"

### Development Help
- "Show me a cross-chain contract example"
- "How to connect Bitcoin and Ethereum?"
- "ZetaChain development setup"

## ZetaChain Documentation Sources
The agent automatically searches these 24 specific official documentation URLs:

### Core Documentation
- https://www.zetachain.com/docs/ (Main documentation)
- https://www.zetachain.com/docs/start/zetachain/ (Getting started)
- https://www.zetachain.com/docs/start/build/ (Building apps)
- https://www.zetachain.com/docs/start/app/ (App development)
- https://www.zetachain.com/docs/developers/ (Developer resources)

### EVM Development
- https://www.zetachain.com/docs/developers/evm/ (EVM compatibility)
- https://www.zetachain.com/docs/developers/evm/gateway/ (Gateway contracts)
- https://www.zetachain.com/docs/developers/evm/gas/ (Gas management)
- https://www.zetachain.com/docs/developers/evm/zeta/ (ZETA token)
- https://www.zetachain.com/docs/developers/evm/zrc20/ (ZRC20 standard)
- https://www.zetachain.com/docs/developers/evm/erc20/ (ERC20 tokens)
- https://www.zetachain.com/docs/developers/evm/addresses/ (Address management)
- https://www.zetachain.com/docs/developers/evm/throughput/ (Performance)

### Standards & Tokens
- https://www.zetachain.com/docs/developers/standards/overview/ (Standards overview)
- https://www.zetachain.com/docs/developers/standards/token/ (Token standards)
- https://www.zetachain.com/docs/developers/standards/nft/ (NFT standards)

### Supported Chains
- https://www.zetachain.com/docs/developers/chains/list/ (Chain list)
- https://www.zetachain.com/docs/developers/chains/functionality/ (Chain functionality)
- https://www.zetachain.com/docs/developers/chains/zetachain/ (ZetaChain itself)
- https://www.zetachain.com/docs/developers/chains/evm/ (EVM chains)
- https://www.zetachain.com/docs/developers/chains/solana/ (Solana integration)
- https://www.zetachain.com/docs/developers/chains/ton/ (TON integration)
- https://www.zetachain.com/docs/developers/chains/sui/ (Sui integration)
- https://www.zetachain.com/docs/developers/chains/bitcoin/ (Bitcoin integration)

### Smart Search Features
- **Query Intelligence**: Automatically detects relevant documentation based on keywords
- **URL Targeting**: Searches specific ZetaChain docs based on query context
- **Fallback Search**: Broader search if specific docs don't match

## Agent Architecture
- **Agent**: `src/mastra/agents/Zeta-agent.ts` - Main ZetaChain educational agent
- **Tools**: `src/mastra/tools/brave-search-tool.ts` - Enhanced search with ZetaChain focus
- **Config**: `src/mastra/index.ts` - Mastra configuration with ZetaChain agent

## Educational Approach
1. **Fundamentals First**: Starts with basic concepts
2. **Practical Examples**: Provides real-world use cases  
3. **Step-by-Step**: Breaks down complex topics
4. **Hands-On**: Encourages experimentation
5. **Documentation Links**: References official sources