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
      <div className="mb-10 pb-8 border-b border-[var(--border)] flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#7c3aed] mb-2">
            Getting Started
          </p>
          <h1 className="text-3xl font-bold text-[var(--text)] mb-3">Setup Guide</h1>
          <p className="text-[var(--muted)] text-base leading-relaxed max-w-xl">
            Install and configure Operator — the personal AI agent that works on your computer.
            Connects to Telegram, Discord, Slack, and more.
          </p>
        </div>
        <a
          href="/docs/setup/print"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PDF
        </a>
      </div>

      <PlatformSupport />
      <InstallGuide />
      <CommandReference />
      <DockerSetup />
      <ConfigLocation />
    </DocsLayout>
  );
}
