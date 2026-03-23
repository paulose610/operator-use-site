import DocsLayout from "@/components/layout/DocsLayout";
import PlatformSupport from "@/components/sections/PlatformSupport";
import InstallGuide from "@/components/sections/InstallGuide";
import CommandReference from "@/components/sections/CommandReference";
import DockerSetup from "@/components/sections/DockerSetup";
import ConfigLocation from "@/components/sections/ConfigLocation";
import { navSections, allNavIds } from "@/lib/content/navigation";

export default function SetupPage() {
  return (
    <DocsLayout navSections={navSections} allNavIds={allNavIds}>
      <div className="mb-10 pb-8 border-b border-[var(--border)]">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#7c3aed] mb-2">
          Getting Started
        </p>
        <h1 className="text-3xl font-bold text-[var(--text)] mb-3">Setup Guide</h1>
        <p className="text-[var(--muted)] text-base leading-relaxed max-w-xl">
          Install and configure Operator — the personal AI agent that works on your computer.
          Connects to Telegram, Discord, Slack, and more.
        </p>
      </div>

      <PlatformSupport />
      <InstallGuide />
      <CommandReference />
      <DockerSetup />
      <ConfigLocation />
    </DocsLayout>
  );
}
