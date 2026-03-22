"use client";

import ClientCodeBlock from "@/components/ui/ClientCodeBlock";
import PlatformTabs from "@/components/ui/PlatformTabs";

function StepNumber({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#7c3aed]/15 text-[#7c3aed] text-xs font-bold shrink-0 mr-3">
      {n}
    </span>
  );
}

export default function InstallGuide() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-[var(--text)] mb-6">Installation</h2>

      <div id="install-uv" className="mb-8 scroll-mt-6">
        <div className="flex items-center mb-3">
          <StepNumber n={1} />
          <h3 className="text-base font-semibold text-[var(--text)]">Install uv</h3>
        </div>
        <p className="text-sm text-[var(--muted)] mb-2 ml-9">
          uv is a fast Python package manager used to install Operator.
        </p>
        <div className="ml-9">
          <PlatformTabs
            mac={<ClientCodeBlock code="curl -LsSf https://astral.sh/uv/install.sh | sh" />}
            windows={<ClientCodeBlock code={`powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"`} />}
          />
        </div>
      </div>

      <div id="install-operator" className="mb-8 scroll-mt-6">
        <div className="flex items-center mb-3">
          <StepNumber n={2} />
          <h3 className="text-base font-semibold text-[var(--text)]">Install Operator</h3>
        </div>
        <p className="text-sm text-[var(--muted)] mb-2 ml-9">
          Installs the{" "}
          <code className="text-[#6d28d9] dark:text-[#c4b5fd] text-xs bg-black/5 dark:bg-white/6 px-1.5 py-0.5 rounded">operator</code>{" "}
          command globally — works from anywhere.
        </p>
        <div className="ml-9">
          <ClientCodeBlock code="uv tool install operator-use" />
        </div>
      </div>

      <div id="onboard" className="mb-8 scroll-mt-6">
        <div className="flex items-center mb-3">
          <StepNumber n={3} />
          <h3 className="text-base font-semibold text-[var(--text)]">Onboard</h3>
        </div>
        <p className="text-sm text-[var(--muted)] mb-2 ml-9">
          Interactive wizard — configure your LLM provider and connect a messaging channel (Telegram, Discord, Slack, etc.).
        </p>
        <div className="ml-9">
          <ClientCodeBlock code="operator onboard" />
        </div>
      </div>

      <div id="run" className="mb-8 scroll-mt-6">
        <div className="flex items-center mb-3">
          <StepNumber n={4} />
          <h3 className="text-base font-semibold text-[var(--text)]">Run</h3>
        </div>
        <p className="text-sm text-[var(--muted)] mb-2 ml-9">Start your agent.</p>
        <div className="ml-9">
          <ClientCodeBlock code="operator" />
        </div>
      </div>
    </section>
  );
}
