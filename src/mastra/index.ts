import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore } from "@mastra/libsql";

// Import agents
import { zetaChainAgent } from "./agents/Zeta-agent";

export const mastra = new Mastra({
  agents: {
    zetaChainAgent,
  },
  storage: new LibSQLStore({
    url: "file:../mastra.db",
  }),
  logger: new PinoLogger({
    name: "ZetaChain Agent",
    level: "info",
  }),
});
