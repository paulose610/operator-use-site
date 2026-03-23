import { Monitor, Globe, Radio, Brain, Clock, Mic, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Monitor,
    title: "Desktop Control",
    description:
      "Click, type, scroll, take screenshots, and open apps via native accessibility APIs (Windows UIA, macOS Accessibility, Linux in progress).",
  },
  {
    icon: Globe,
    title: "Web Browsing",
    description: "Search, navigate, and extract content from the web.",
  },
  {
    icon: Radio,
    title: "Multi-Channel",
    description:
      "Message it through Telegram, Discord, Slack, Twitch, or MQTT — whichever platform you already use.",
  },
  {
    icon: Brain,
    title: "Memory",
    description:
      "Remembers you, your preferences, and past conversations across sessions.",
  },
  {
    icon: Clock,
    title: "Scheduling",
    description:
      "Cron-based recurring tasks and a heartbeat system for proactive, time-based work.",
  },
  {
    icon: Mic,
    title: "Voice I/O",
    description:
      "Full speech-to-text and text-to-speech support across multiple providers.",
  },
  {
    icon: Zap,
    title: "Any LLM",
    description:
      "Works with OpenAI, Anthropic, Google, Mistral, Groq, Ollama, and many more.",
  },
];

export default function KeyFeatures() {
  return (
    <section id="features" className="mb-12 scroll-mt-6">
      <h2 className="text-xl font-semibold text-[var(--text)] mb-1">Key Features</h2>
      <p className="text-[var(--muted)] text-sm mb-6">
        Everything Operator can do out of the box.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="rounded-lg border border-[var(--border)] p-4 flex flex-col gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-[#7c3aed]/10 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-[#7c3aed]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text)] mb-1">{f.title}</p>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{f.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
