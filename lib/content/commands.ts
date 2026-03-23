export type CommandRow = {
  command: string;
  description: string;
  flags?: string;
};

export type CommandCategory = {
  id: string;
  title: string;
  rows: CommandRow[];
};

export const commandCategories: CommandCategory[] = [
  {
    id: "start",
    title: "Start",
    rows: [
      { command: "operator", description: "Start the agent" },
      { command: "operator run", description: "Start the agent" },
      {
        command: "operator agent",
        description: "Chat in the terminal — no messaging channel needed",
      },
    ],
  },
  {
    id: "setup",
    title: "Setup",
    rows: [
      { command: "operator onboard", description: "Run the setup wizard" },
      {
        command: "operator channel add",
        description: "Add a messaging channel interactively",
      },
    ],
  },
  {
    id: "status",
    title: "Status & Logs",
    rows: [
      {
        command: "operator status",
        description: "Show config, channels, sessions, and cron count",
      },
      { command: "operator logs", description: "Show agent logs" },
      { command: "operator logs -f", description: "Tail logs live" },
      {
        command: "operator sessions",
        description: "List past conversation sessions",
      },
    ],
  },
  {
    id: "config",
    title: "Config",
    rows: [
      {
        command: "operator config list",
        description: "Show all config values",
      },
      {
        command: "operator config get <key>",
        description: "Get a specific value",
        flags: "e.g. agent.llm.model",
      },
      {
        command: "operator config set <key> <value>",
        description: "Set a config value",
      },
      {
        command: "operator config unset <key>",
        description: "Remove a config key",
      },
    ],
  },
  {
    id: "channels",
    title: "Channels & Models",
    rows: [
      {
        command: "operator channels",
        description: "List all configured channels",
      },
      {
        command: "operator channel add",
        description: "Add a new channel interactively",
      },
      {
        command: "operator gateway",
        description: "Manage channels",
      },
      {
        command: "operator models",
        description: "Show available models and the active LLM",
      },
    ],
  },
  {
    id: "agents",
    title: "Agents",
    rows: [
      {
        command: "operator agents list",
        description: "List all configured agents",
      },
      {
        command: "operator agents add <id>",
        description: "Add a new agent",
        flags: "--provider / --model / --workspace",
      },
      {
        command: "operator agents remove <id>",
        description: "Remove an agent",
        flags: "--delete-workspace also wipes files",
      },
    ],
  },
  {
    id: "cron",
    title: "Scheduled Tasks",
    rows: [
      { command: "operator cron list", description: "List scheduled jobs" },
      { command: "operator cron add", description: "Add a new scheduled job" },
      {
        command: "operator cron remove <id>",
        description: "Remove a scheduled job",
      },
      {
        command: "operator cron enable <id>",
        description: "Enable a scheduled job",
      },
      {
        command: "operator cron disable <id>",
        description: "Disable a scheduled job",
      },
    ],
  },
  {
    id: "auth",
    title: "Auth",
    rows: [
      {
        command: "operator auth claude-code",
        description: "Login with Claude Code OAuth",
      },
      {
        command: "operator auth antigravity",
        description: "Login with Google Cloud Code Assist OAuth",
      },
      {
        command: "operator auth codex",
        description: "Login with OpenAI Codex OAuth",
      },
      {
        command: "operator auth github-copilot",
        description: "Login with GitHub Copilot OAuth",
      },
    ],
  },
  {
    id: "acp",
    title: "ACP (Agent Communication Protocol)",
    rows: [
      {
        command: "operator acp sessions",
        description: "List local ACP sessions",
      },
      {
        command: "operator acp discover",
        description: "Scan network for other Operator instances",
      },
      {
        command: "operator acp list <url>",
        description: "List agents on a remote ACP server",
      },
      {
        command: "operator acp run <url> <msg>",
        description: "Send a message to a remote agent",
      },
      {
        command: "operator acp stdio",
        description: "Start stdio bridge for IDE integration",
      },
    ],
  },
];
