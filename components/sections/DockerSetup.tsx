"use client";

import ClientCodeBlock from "@/components/ui/ClientCodeBlock";
import PlatformTabs from "@/components/ui/PlatformTabs";

const ports = [
  { port: "8080", use: "Webhooks for Telegram, Discord, Slack" },
  { port: "8765", use: "ACP server (off by default)" },
  { port: "1883", use: "MQTT broker (plain)" },
  { port: "8883", use: "MQTT broker (TLS)" },
  { port: "9222", use: "Chrome DevTools / browser debugging" },
];

export default function DockerSetup() {
  return (
    <section id="docker" className="mb-12 scroll-mt-6">
      <h2 className="text-xl font-semibold text-[var(--text)] mb-1">Docker Setup</h2>
      <p className="text-[var(--muted)] text-sm mb-6">
        Run Operator in a container without installing Python or uv. Requires{" "}
        <a href="https://docs.docker.com/get-docker/" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] hover:underline">
          Docker
        </a>{" "}
        installed and running.
      </p>

      <h3 className="text-base font-semibold text-[var(--text)] mb-3">First-time setup</h3>
      <p className="text-sm text-[var(--muted)] mb-2">
        The volume mount saves your config outside the container so it persists across runs.
      </p>
      <PlatformTabs
        mac={<ClientCodeBlock code={`docker run -it \\\n  -v ~/.operator-use:/root/.operator-use \\\n  operator-use onboard`} />}
        windows={<ClientCodeBlock code={"docker run -it `\n  -v \"$env:USERPROFILE\\.operator-use:/root/.operator-use\" `\n  operator-use onboard"} />}
      />

      <h3 className="text-base font-semibold text-[var(--text)] mt-6 mb-3">Start the agent</h3>
      <PlatformTabs
        mac={<ClientCodeBlock code={`docker run -d \\\n  -v ~/.operator-use:/root/.operator-use \\\n  -p 8080:8080 \\\n  operator-use`} />}
        windows={<ClientCodeBlock code={"docker run -d `\n  -v \"$env:USERPROFILE\\.operator-use:/root/.operator-use\" `\n  -p 8080:8080 `\n  operator-use"} />}
      />

      <h3 className="text-base font-semibold text-[var(--text)] mt-6 mb-3">With an env file</h3>
      <p className="text-sm text-[var(--muted)] mb-2">
        Pass API keys from a{" "}
        <code className="text-[#6d28d9] dark:text-[#c4b5fd] text-xs bg-black/5 dark:bg-white/6 px-1.5 py-0.5 rounded">.env</code> file.
      </p>
      <ClientCodeBlock code={`docker run -d \\\n  -v ~/.operator-use:/root/.operator-use \\\n  --env-file /path/to/.env \\\n  -p 8080:8080 \\\n  operator-use`} />

      <h3 className="text-base font-semibold text-[var(--text)] mt-6 mb-3">Run a specific command</h3>
      <ClientCodeBlock code={`docker run -it -v ~/.operator-use:/root/.operator-use operator-use status\ndocker run -it -v ~/.operator-use:/root/.operator-use operator-use logs`} />

      <h3 className="text-base font-semibold text-[var(--text)] mt-6 mb-3">Port reference</h3>
      <p className="text-sm text-[var(--muted)] mb-3">
        Only expose ports with{" "}
        <code className="text-[#6d28d9] dark:text-[#c4b5fd] text-xs bg-black/5 dark:bg-white/6 px-1.5 py-0.5 rounded">-p</code> for features you are using.
      </p>
      <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-black/2 dark:bg-white/2">
              <th className="text-left px-4 py-2.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wide w-24">Port</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wide">Used for</th>
            </tr>
          </thead>
          <tbody>
            {ports.map((p) => (
              <tr key={p.port} className="border-b border-[var(--border)] last:border-0">
                <td className="px-4 py-3 font-mono text-xs text-[#6d28d9] dark:text-[#c4b5fd]">{p.port}</td>
                <td className="px-4 py-3 text-[var(--text)]">{p.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
