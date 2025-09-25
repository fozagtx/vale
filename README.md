# ZetaChain Educational Agent

A Mastra-powered agent that teaches users about ZetaChain cross-chain development, EVM compatibility, and building universal applications.

## Setup

### 1. Environment Variables
```bash
export BRAVE_API_KEY="your_brave_search_api_key"
export GOOGLE_API_KEY="your_google_ai_api_key"
```

### 2. Get API Keys
- **Brave Search API**: Visit https://api.search.brave.com/ to get your free API key
- **Google AI**: Visit https://aistudio.google.com/ for Gemini API access

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Agent
```bash
npm run dev
```

## Features

The agent specializes in ZetaChain education and searches 24 specific official documentation URLs:

### Core Topics
- Cross-chain interoperability
- EVM compatibility and smart contracts
- Universal applications
- ZRC20 token standard
- Gateway contracts
- Multi-chain DeFi development

### Supported Chains
- Bitcoin
- Ethereum  
- Solana
- TON
- Sui
- Other EVM chains

### Intelligent Search
The agent automatically targets relevant ZetaChain documentation based on user queries:
- "How do I build on ZetaChain?" targets build and developer docs
- "What is ZRC20?" targets ZRC20 and token standard docs
- "Bitcoin integration" targets Bitcoin-specific documentation
- "Smart contracts" targets EVM and gateway contract docs

## Usage Examples

```
User: "What is ZetaChain?"
User: "How does cross-chain development work?"
User: "Show me a ZRC20 example"
User: "How to deploy contracts on ZetaChain?"
User: "Bitcoin and Ethereum integration"
```

## Project Structure

```
src/
├── mastra/
│   ├── agents/
│   │   └── Zeta-agent.ts          # Main ZetaChain educational agent
│   ├── tools/
│   │   └── brave-search-tool.ts   # Enhanced search with ZetaChain focus
│   ├── config/
│   │   └── zetachain-urls.ts      # 24 official ZetaChain documentation URLs
│   └── index.ts                   # Mastra configuration
```

## Documentation Sources

The agent searches 24 official ZetaChain documentation URLs covering core docs, EVM development, token standards, and chain integrations.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build the project  
- `npm run start` - Start production server

## Agent Architecture

### Agent Configuration
The ZetaChain agent (`src/mastra/agents/Zeta-agent.ts`) provides:
- Educational guidance on cross-chain development
- Code examples and best practices
- Step-by-step learning paths
- Integration tutorials for multiple blockchains

### Search Intelligence
The Brave Search tool (`src/mastra/tools/brave-search-tool.ts`) features:
- Query analysis and keyword mapping
- Targeted searches of specific ZetaChain documentation
- Enhanced results with relevant doc URLs
- Fallback search for broader queries

### URL Configuration
The documentation mapping (`src/mastra/config/zetachain-urls.ts`) includes:
- Complete list of 24 official ZetaChain documentation URLs
- Smart query-to-URL mapping for targeted searches
- Search query enhancement functions

## Development

To extend functionality:

1. **Add new topics**: Update query mappings in `zetachain-urls.ts`
2. **Enhance agent responses**: Modify instructions in `Zeta-agent.ts`
3. **Improve search**: Update search logic in `brave-search-tool.ts`
4. **Add integrations**: Extend supported chains and features