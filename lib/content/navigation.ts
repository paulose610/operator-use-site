export type NavItem = {
  id: string;
  label: string;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export const navSections: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { id: "platform-support", label: "Platform Support" },
      { id: "install-uv", label: "Step 1 — Install uv" },
      { id: "install-operator", label: "Step 2 — Install Operator" },
      { id: "onboard", label: "Step 3 — Onboard" },
      { id: "run", label: "Step 4 — Run" },
    ],
  },
  {
    title: "Command Reference",
    items: [
      { id: "cmd-start", label: "Start" },
      { id: "cmd-setup", label: "Setup" },
      { id: "cmd-status", label: "Status & Logs" },
      { id: "cmd-config", label: "Config" },
      { id: "cmd-channels", label: "Channels & Models" },
      { id: "cmd-agents", label: "Agents" },
      { id: "cmd-cron", label: "Scheduled Tasks" },
      { id: "cmd-auth", label: "Auth" },
      { id: "cmd-acp", label: "ACP" },
    ],
  },
  {
    title: "Deployment",
    items: [
      { id: "docker", label: "Docker Setup" },
      { id: "config-location", label: "Config Location" },
    ],
  },
];

export const allNavIds = navSections.flatMap((s) => s.items.map((i) => i.id));
