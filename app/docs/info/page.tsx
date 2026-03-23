import DocsLayout from "@/components/layout/DocsLayout";
import KeyFeatures from "@/components/sections/info/KeyFeatures";
import Channels from "@/components/sections/info/Channels";
import LLMProviders from "@/components/sections/info/LLMProviders";
import VoiceProviders from "@/components/sections/info/VoiceProviders";
import { infoNavSections, allInfoNavIds } from "@/lib/content/info-navigation";

export default function InfoPage() {
  return (
    <DocsLayout navSections={infoNavSections} allNavIds={allInfoNavIds}>
      <div id="intro" className="mb-10 pb-8 border-b border-[var(--border)] scroll-mt-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#7c3aed] mb-2">
          Overview
        </p>
        <h1 className="text-3xl font-bold text-[var(--text)] mb-3">Operator</h1>
        <p className="text-[var(--muted)] text-base leading-relaxed max-w-xl">
          An AI agent you message from anywhere — Telegram, Discord, Slack, Twitch, or MQTT —
          and it works on your computer. It reads files, browses the web, runs commands,
          clicks through apps, and remembers who you are. Runs locally, connects to any LLM,
          and gets smarter over time.
        </p>
      </div>

      <KeyFeatures />
      <Channels />
      <LLMProviders />
      <VoiceProviders />
    </DocsLayout>
  );
}
