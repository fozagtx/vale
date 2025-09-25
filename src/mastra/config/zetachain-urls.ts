/**
 * ZetaChain Official Documentation URLs
 * These URLs will be used for targeted searches when users ask specific questions
 */

export const ZETACHAIN_DOCS_URLS = [
  "https://www.zetachain.com/docs/",
  "https://www.zetachain.com/docs/start/zetachain/",
  "https://www.zetachain.com/docs/start/build/",
  "https://www.zetachain.com/docs/start/app/",
  "https://www.zetachain.com/docs/developers/",
  "https://www.zetachain.com/docs/developers/evm/",
  "https://www.zetachain.com/docs/developers/evm/gateway/",
  "https://www.zetachain.com/docs/developers/evm/gas/",
  "https://www.zetachain.com/docs/developers/evm/zeta/",
  "https://www.zetachain.com/docs/developers/evm/zrc20/",
  "https://www.zetachain.com/docs/developers/evm/erc20/",
  "https://www.zetachain.com/docs/developers/evm/addresses/",
  "https://www.zetachain.com/docs/developers/evm/throughput/",
  "https://www.zetachain.com/docs/developers/standards/overview/",
  "https://www.zetachain.com/docs/developers/standards/token/",
  "https://www.zetachain.com/docs/developers/chains/list/",
  "https://www.zetachain.com/docs/developers/chains/functionality/",
  "https://www.zetachain.com/docs/developers/chains/zetachain/",
  "https://www.zetachain.com/docs/developers/chains/evm/",
  "https://www.zetachain.com/docs/developers/chains/solana/",
  "https://www.zetachain.com/docs/developers/chains/ton/",
  "https://www.zetachain.com/docs/developers/chains/sui/",
  "https://www.zetachain.com/docs/developers/chains/bitcoin/",
  "https://www.zetachain.com/docs/developers/standards/nft/",
];

/**
 * Query to URL mapping - helps determine which specific docs to search
 */
export const QUERY_TO_DOCS_MAPPING: Record<string, string[]> = {
  // Getting Started
  "getting started": [
    "https://www.zetachain.com/docs/",
    "https://www.zetachain.com/docs/start/zetachain/",
    "https://www.zetachain.com/docs/start/build/",
  ],
  start: [
    "https://www.zetachain.com/docs/start/zetachain/",
    "https://www.zetachain.com/docs/start/build/",
    "https://www.zetachain.com/docs/start/app/",
  ],
  build: [
    "https://www.zetachain.com/docs/start/build/",
    "https://www.zetachain.com/docs/developers/",
    "https://www.zetachain.com/docs/developers/evm/",
  ],
  app: [
    "https://www.zetachain.com/docs/start/app/",
    "https://www.zetachain.com/docs/start/build/",
  ],

  // EVM Development
  evm: [
    "https://www.zetachain.com/docs/developers/evm/",
    "https://www.zetachain.com/docs/developers/evm/gateway/",
    "https://www.zetachain.com/docs/developers/chains/evm/",
  ],
  ethereum: [
    "https://www.zetachain.com/docs/developers/evm/",
    "https://www.zetachain.com/docs/developers/chains/evm/",
    "https://www.zetachain.com/docs/developers/evm/erc20/",
  ],
  "smart contract": [
    "https://www.zetachain.com/docs/developers/evm/",
    "https://www.zetachain.com/docs/developers/evm/gateway/",
    "https://www.zetachain.com/docs/developers/evm/addresses/",
  ],
  gateway: [
    "https://www.zetachain.com/docs/developers/evm/gateway/",
    "https://www.zetachain.com/docs/developers/evm/",
  ],
  gas: [
    "https://www.zetachain.com/docs/developers/evm/gas/",
    "https://www.zetachain.com/docs/developers/evm/throughput/",
  ],

  // Tokens and Standards
  zrc20: [
    "https://www.zetachain.com/docs/developers/evm/zrc20/",
    "https://www.zetachain.com/docs/developers/standards/token/",
  ],
  erc20: [
    "https://www.zetachain.com/docs/developers/evm/erc20/",
    "https://www.zetachain.com/docs/developers/standards/token/",
  ],
  token: [
    "https://www.zetachain.com/docs/developers/standards/token/",
    "https://www.zetachain.com/docs/developers/evm/zrc20/",
    "https://www.zetachain.com/docs/developers/evm/erc20/",
  ],
  zeta: [
    "https://www.zetachain.com/docs/developers/evm/zeta/",
    "https://www.zetachain.com/docs/developers/standards/token/",
  ],
  nft: [
    "https://www.zetachain.com/docs/developers/standards/nft/",
    "https://www.zetachain.com/docs/developers/standards/overview/",
  ],
  standards: [
    "https://www.zetachain.com/docs/developers/standards/overview/",
    "https://www.zetachain.com/docs/developers/standards/token/",
    "https://www.zetachain.com/docs/developers/standards/nft/",
  ],

  // Specific Chains
  bitcoin: [
    "https://www.zetachain.com/docs/developers/chains/bitcoin/",
    "https://www.zetachain.com/docs/developers/chains/list/",
  ],
  btc: [
    "https://www.zetachain.com/docs/developers/chains/bitcoin/",
    "https://www.zetachain.com/docs/developers/chains/functionality/",
  ],
  solana: [
    "https://www.zetachain.com/docs/developers/chains/solana/",
    "https://www.zetachain.com/docs/developers/chains/list/",
  ],
  ton: [
    "https://www.zetachain.com/docs/developers/chains/ton/",
    "https://www.zetachain.com/docs/developers/chains/functionality/",
  ],
  sui: [
    "https://www.zetachain.com/docs/developers/chains/sui/",
    "https://www.zetachain.com/docs/developers/chains/list/",
  ],

  // General Development
  developer: [
    "https://www.zetachain.com/docs/developers/",
    "https://www.zetachain.com/docs/developers/evm/",
    "https://www.zetachain.com/docs/start/build/",
  ],
  chains: [
    "https://www.zetachain.com/docs/developers/chains/list/",
    "https://www.zetachain.com/docs/developers/chains/functionality/",
    "https://www.zetachain.com/docs/developers/chains/zetachain/",
  ],
  "cross chain": [
    "https://www.zetachain.com/docs/developers/chains/functionality/",
    "https://www.zetachain.com/docs/developers/evm/gateway/",
    "https://www.zetachain.com/docs/developers/chains/list/",
  ],
  addresses: ["https://www.zetachain.com/docs/developers/evm/addresses/"],
  throughput: ["https://www.zetachain.com/docs/developers/evm/throughput/"],
};

/**
 * Get relevant ZetaChain documentation URLs for a query
 */
export function getRelevantZetaChainDocs(query: string): string[] {
  const lowerQuery = query.toLowerCase();
  const relevantUrls: string[] = [];

  // Check for specific query matches
  for (const [keyword, urls] of Object.entries(QUERY_TO_DOCS_MAPPING)) {
    if (lowerQuery.includes(keyword)) {
      relevantUrls.push(...urls);
    }
  }

  // If no specific matches, return general docs
  if (relevantUrls.length === 0) {
    return [
      "https://www.zetachain.com/docs/",
      "https://www.zetachain.com/docs/developers/",
      "https://www.zetachain.com/docs/start/zetachain/",
    ];
  }

  // Remove duplicates and return
  return [...new Set(relevantUrls)];
}

/**
 * Create search query with specific ZetaChain URLs
 */
export function createZetaChainSearchQuery(query: string): string {
  const relevantUrls = getRelevantZetaChainDocs(query);

  // Create site-specific search
  const siteQueries = relevantUrls
    .map((url) => {
      const path = url.replace("https://www.zetachain.com", "");
      return `site:zetachain.com${path}`;
    })
    .join(" OR ");

  return `${query} (${siteQueries})`;
}
