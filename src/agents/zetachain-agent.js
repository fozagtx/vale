/**
 * ZetaChain Educational Agent
 * Teaches users about ZetaChain using official documentation
 */

import { getRelevantDocs, getAllDocs, ZETACHAIN_DOCS } from '../config/zetachain-docs.js';
import { BraveSearchConfig } from '../config/brave-search.js';

export class ZetaChainAgent {
  constructor() {
    this.name = 'ZetaChain Educator';
    this.description = 'I help users learn about ZetaChain cross-chain development';
    this.capabilities = [
      'Cross-chain development guidance',
      'EVM compatibility explanations',
      'Multi-chain integration tutorials',
      'ZRC20 and token standards',
      'Gateway and smart contract development',
      'Supported chains documentation'
    ];
  }

  /**
   * Process user query and provide ZetaChain-specific response
   */
  async processQuery(query) {
    console.log(`🔗 ZetaChain Agent processing: "${query}"`);

    try {
      // Get relevant documentation URLs for the query
      const relevantUrls = getRelevantDocs(query);

      const response = {
        query,
        timestamp: new Date().toISOString(),
        agent: this.name,
        sources: relevantUrls,
        answer: await this.generateResponse(query, relevantUrls),
        suggestions: this.getSuggestions(query),
        codeExamples: this.getCodeExamples(query)
      };

      return response;
    } catch (error) {
      console.error('Error processing ZetaChain query:', error);
      return this.getErrorResponse(query, error);
    }
  }

  /**
   * Generate comprehensive response using documentation
   */
  async generateResponse(query, urls) {
    const topics = this.identifyTopics(query);
    let response = `## ZetaChain Information for: "${query}"\n\n`;

    // Add topic-specific information
    for (const topic of topics) {
      response += await this.getTopicInformation(topic, urls);
    }

    // Add relevant documentation links
    response += `\n## 📚 Relevant Documentation\n`;
    urls.forEach((url, index) => {
      response += `${index + 1}. [${this.getUrlTitle(url)}](${url})\n`;
    });

    return response;
  }

  /**
   * Identify topics from user query
   */
  identifyTopics(query) {
    const lowercaseQuery = query.toLowerCase();
    const topics = [];

    const topicKeywords = {
      'getting-started': ['start', 'begin', 'intro', 'getting started'],
      'evm': ['evm', 'ethereum', 'smart contract', 'solidity'],
      'cross-chain': ['cross chain', 'multi chain', 'interop', 'bridge'],
      'gateway': ['gateway', 'contract', 'deploy'],
      'tokens': ['token', 'zrc20', 'erc20', 'fungible'],
      'nft': ['nft', 'non-fungible', '721', '1155'],
      'gas': ['gas', 'fees', 'cost', 'price'],
      'chains': ['bitcoin', 'solana', 'ton', 'sui', 'chain'],
      'development': ['code', 'build', 'develop', 'program']
    };

    for (const [topic, keywords] of Object.entries(topicKeywords)) {
      if (keywords.some(keyword => lowercaseQuery.includes(keyword))) {
        topics.push(topic);
      }
    }

    return topics.length > 0 ? topics : ['getting-started'];
  }

  /**
   * Get detailed information for specific topics
   */
  async getTopicInformation(topic, urls) {
    const topicInfo = {
      'getting-started': `
### 🚀 Getting Started with ZetaChain

ZetaChain is a Layer-1 blockchain that enables cross-chain smart contracts and messaging. Here's what you need to know:

**Key Features:**
- Cross-chain interoperability with Bitcoin, Ethereum, Solana, TON, and more
- EVM-compatible smart contracts
- Native cross-chain messaging
- Unified liquidity across chains

**Quick Start Steps:**
1. Set up your development environment
2. Connect to ZetaChain testnet
3. Deploy your first cross-chain contract
4. Test cross-chain functionality
`,

      'evm': `
### ⚙️ EVM Development on ZetaChain

ZetaChain is fully EVM-compatible, allowing you to:

**Deploy Ethereum Contracts:**
- Use familiar tools like Hardhat, Truffle, Remix
- Deploy with MetaMask or other Web3 wallets
- Access all Ethereum opcodes and features

**Cross-Chain Features:**
- Call contracts on external chains
- Handle cross-chain messages
- Manage multi-chain assets
`,

      'cross-chain': `
### 🌉 Cross-Chain Development

ZetaChain's unique cross-chain capabilities:

**Universal Apps:**
- Single contract managing multiple chains
- Cross-chain state synchronization
- Unified user experience

**Supported Operations:**
- Cross-chain token transfers
- Multi-chain smart contract calls
- Cross-chain governance
`,

      'gateway': `
### 🚪 Gateway Contracts

The Gateway is ZetaChain's cross-chain messaging system:

**Key Components:**
- Gateway contract for outbound calls
- TSS (Threshold Signature Scheme) for security
- Observers for cross-chain validation

**Use Cases:**
- Cross-chain DeFi protocols
- Multi-chain NFT collections
- Universal wallet applications
`,

      'tokens': `
### 🪙 Token Standards (ZRC20)

ZRC20 is ZetaChain's cross-chain token standard:

**Features:**
- Native cross-chain functionality
- Gas payment in multiple tokens
- Unified token interface across chains

**Benefits:**
- Simplified cross-chain transfers
- Reduced complexity for developers
- Better user experience
`,

      'chains': `
### ⛓️ Supported Chains

ZetaChain connects to major blockchains:

**Currently Supported:**
- Bitcoin (BTC)
- Ethereum (ETH)
- Binance Smart Chain (BSC)
- Solana (SOL)
- TON
- Sui

**Coming Soon:**
- Additional EVM chains
- More L1 blockchains
- Layer 2 solutions
`
    };

    return topicInfo[topic] || '';
  }

  /**
   * Get code examples based on query
   */
  getCodeExamples(query) {
    const lowercaseQuery = query.toLowerCase();

    if (lowercaseQuery.includes('contract') || lowercaseQuery.includes('solidity')) {
      return `
\`\`\`solidity
// Basic ZetaChain Cross-Chain Contract
pragma solidity ^0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";

contract CrossChainExample is zContract {
    SystemContract public systemContract;

    constructor(address systemContractAddress) {
        systemContract = SystemContract(systemContractAddress);
    }

    function onCrossChainCall(
        zContext calldata context,
        address zrc20,
        uint256 amount,
        bytes calldata message
    ) external override {
        // Handle cross-chain logic here
    }
}
\`\`\`
`;
    }

    if (lowercaseQuery.includes('deploy') || lowercaseQuery.includes('setup')) {
      return `
\`\`\`javascript
// Deploy to ZetaChain using Hardhat
const { ethers } = require("hardhat");

async function main() {
  const Contract = await ethers.getContractFactory("CrossChainExample");
  const contract = await Contract.deploy(SYSTEM_CONTRACT_ADDRESS);

  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}

main().catch(console.error);
\`\`\`
`;
    }

    return null;
  }

  /**
   * Get suggestions for follow-up queries
   */
  getSuggestions(query) {
    const suggestions = [
      "How do I deploy a cross-chain contract?",
      "What chains does ZetaChain support?",
      "How does ZRC20 work?",
      "Show me Gateway contract examples",
      "How to handle cross-chain gas?",
      "What are universal apps?",
      "How to connect Bitcoin to Ethereum?",
      "ZetaChain development tools"
    ];

    // Filter out the current query
    return suggestions.filter(s =>
      !s.toLowerCase().includes(query.toLowerCase().slice(0, 10))
    ).slice(0, 4);
  }

  /**
   * Get title for documentation URL
   */
  getUrlTitle(url) {
    const titles = {
      [ZETACHAIN_DOCS.main]: 'ZetaChain Documentation',
      [ZETACHAIN_DOCS.start]: 'Getting Started',
      [ZETACHAIN_DOCS.build]: 'Building on ZetaChain',
      [ZETACHAIN_DOCS.app]: 'Creating Apps',
      [ZETACHAIN_DOCS.developers]: 'Developer Resources',
      [ZETACHAIN_DOCS.evm]: 'EVM Development',
      [ZETACHAIN_DOCS.gateway]: 'Gateway Contracts',
      [ZETACHAIN_DOCS.gas]: 'Gas Management',
      [ZETACHAIN_DOCS.zrc20]: 'ZRC20 Token Standard',
      [ZETACHAIN_DOCS.bitcoin]: 'Bitcoin Integration',
      [ZETACHAIN_DOCS.solana]: 'Solana Integration'
    };

    return titles[url] || 'ZetaChain Documentation';
  }

  /**
   * Handle errors gracefully
   */
  getErrorResponse(query, error) {
    return {
      query,
      timestamp: new Date().toISOString(),
      agent: this.name,
      error: true,
      message: "I encountered an issue processing your ZetaChain query. Please try again or ask about specific topics like 'cross-chain development' or 'EVM contracts'.",
      fallbackSources: [ZETACHAIN_DOCS.main, ZETACHAIN_DOCS.developers],
      suggestions: [
        "How does ZetaChain work?",
        "Getting started with cross-chain development",
        "What chains does ZetaChain support?",
        "Show me ZetaChain examples"
      ]
    };
  }

  /**
   * Get agent status and capabilities
   */
  getStatus() {
    return {
      name: this.name,
      status: 'active',
      capabilities: this.capabilities,
      documentationSources: Object.keys(ZETACHAIN_DOCS).length,
      supportedTopics: [
        'Cross-chain development',
        'EVM compatibility',
        'Smart contracts',
        'Token standards',
        'Multi-chain integration',
        'Gateway functionality'
      ]
    };
  }
}

export default ZetaChainAgent;
