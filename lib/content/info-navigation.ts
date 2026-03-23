import type { NavSection } from "./navigation";

export const infoNavSections: NavSection[] = [
  {
    title: "Overview",
    items: [{ id: "intro", label: "Overview" }],
  },
  {
    title: "Features",
    items: [{ id: "features", label: "Key Features" }],
  },
  {
    title: "Integrations",
    items: [
      { id: "channels", label: "Channels" },
      { id: "llms", label: "LLM Providers" },
      { id: "voice", label: "Voice Providers" },
    ],
  },
];

export const allInfoNavIds = infoNavSections.flatMap((s) =>
  s.items.map((i) => i.id)
);
