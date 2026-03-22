import PrintButton from "@/components/ui/PrintButton";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: "2rem", pageBreakInside: "avoid" }}>
      <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", borderBottom: "1px solid #e5e7eb", paddingBottom: "0.4rem", marginBottom: "0.75rem" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Sub({ title }: { title: string }) {
  return (
    <h3 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#333", marginTop: "1rem", marginBottom: "0.4rem" }}>
      {title}
    </h3>
  );
}

function Code({ children }: { children: string }) {
  return (
    <pre style={{
      background: "#f8fafc",
      border: "1px solid #e2e8f0",
      borderRadius: "6px",
      padding: "0.75rem 1rem",
      fontSize: "0.78rem",
      fontFamily: "ui-monospace, monospace",
      color: "#1e293b",
      overflowX: "auto",
      marginTop: "0.4rem",
      marginBottom: "0.75rem",
      whiteSpace: "pre-wrap",
      wordBreak: "break-all",
    }}>
      <code>{children.trim()}</code>
    </pre>
  );
}

function Label({ children }: { children: string }) {
  return (
    <p style={{ fontSize: "0.72rem", fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.2rem", marginTop: "0.6rem" }}>
      {children}
    </p>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem", marginBottom: "0.75rem" }}>
      <thead>
        <tr style={{ background: "#f9fafb" }}>
          {headers.map((h) => (
            <th key={h} style={{ textAlign: "left", padding: "0.4rem 0.75rem", borderBottom: "1px solid #e5e7eb", color: "#6b7280", fontWeight: 600, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: "1px solid #f3f4f6" }}>
            {row.map((cell, j) => (
              <td key={j} style={{ padding: "0.4rem 0.75rem", color: j === 0 ? "#6d28d9" : "#374151", fontFamily: j === 0 ? "ui-monospace, monospace" : "inherit", fontSize: j === 0 ? "0.75rem" : "0.8rem", whiteSpace: j === 0 ? "nowrap" : "normal" }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function PrintPage() {
  return (
    <>
      <style>{`
        @media print {
          @page { margin: 1.8cm 2cm; size: A4; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
        * { box-sizing: border-box; }
      `}</style>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "2rem 2rem", fontFamily: "ui-sans-serif, system-ui, Arial, sans-serif", color: "#111", background: "#fff", lineHeight: 1.6 }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem", paddingBottom: "1.25rem", borderBottom: "2px solid #7c3aed" }}>
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>Operator</p>
            <h1 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#111", margin: 0 }}>Setup Guide</h1>
            <p style={{ fontSize: "0.82rem", color: "#6b7280", marginTop: "0.35rem" }}>
              Install and configure Operator — the personal AI agent that works on your computer.
            </p>
          </div>
          <PrintButton />
        </div>

        {/* Platform Support */}
        <Section id="platform-support" title="Platform Support">
          <p style={{ fontSize: "0.82rem", color: "#6b7280", marginBottom: "0.5rem" }}>
            Platform-specific native dependencies are installed automatically.
          </p>
          <Table
            headers={["Platform", "Support", "Notes"]}
            rows={[
              ["Windows", "Full", "Full desktop control"],
              ["macOS", "Full", "Full desktop control"],
              ["Linux", "Partial", "No desktop control"],
            ]}
          />
        </Section>

        {/* Installation */}
        <Section id="installation" title="Installation">
          <Sub title="Step 1 — Install uv" />
          <p style={{ fontSize: "0.82rem", color: "#6b7280", marginBottom: "0.25rem" }}>uv is a fast Python package manager used to install Operator.</p>
          <Label>macOS / Linux</Label>
          <Code>curl -LsSf https://astral.sh/uv/install.sh | sh</Code>
          <Label>Windows (PowerShell)</Label>
          <Code>{`powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"`}</Code>

          <Sub title="Step 2 — Install Operator" />
          <p style={{ fontSize: "0.82rem", color: "#6b7280", marginBottom: "0.25rem" }}>Installs the <code style={{ fontFamily: "ui-monospace, monospace", fontSize: "0.78rem", background: "#f1f5f9", padding: "0.1rem 0.3rem", borderRadius: "3px" }}>operator</code> command globally — works from anywhere.</p>
          <Code>uv tool install operator-use</Code>

          <Sub title="Step 3 — Onboard" />
          <p style={{ fontSize: "0.82rem", color: "#6b7280", marginBottom: "0.25rem" }}>Interactive wizard — configure your LLM provider and connect a messaging channel.</p>
          <Code>operator onboard</Code>

          <Sub title="Step 4 — Run" />
          <Code>operator</Code>
        </Section>

        {/* Command Reference */}
        <Section id="commands" title="Command Reference">
          {[
            {
              title: "Start",
              rows: [
                ["operator", "Start the agent"],
                ["operator agent", "Chat in the terminal — no messaging channel needed"],
              ],
            },
            {
              title: "Setup",
              rows: [
                ["operator onboard", "Run the setup wizard"],
                ["operator channel add", "Add a messaging channel"],
              ],
            },
            {
              title: "Status & Logs",
              rows: [
                ["operator status", "Show config, channels, sessions, and cron count"],
                ["operator logs", "Show agent logs"],
                ["operator logs -f", "Tail logs live"],
                ["operator sessions", "List past conversation sessions"],
              ],
            },
            {
              title: "Config",
              rows: [
                ["operator config list", "Show all config values"],
                ["operator config get <key>", "Get a specific value (e.g. agent.llm.model)"],
                ["operator config set <key> <value>", "Set a config value"],
                ["operator config unset <key>", "Remove a config key"],
              ],
            },
            {
              title: "Channels & Models",
              rows: [
                ["operator channels", "List all configured channels"],
                ["operator channel add", "Add a new channel interactively"],
                ["operator models", "Show available models and the active LLM"],
              ],
            },
            {
              title: "Agents",
              rows: [
                ["operator agents list", "List all configured agents"],
                ["operator agents add <id>", "Add a new agent (--provider / --model / --workspace)"],
                ["operator agents remove <id>", "Remove an agent (--delete-workspace also wipes files)"],
              ],
            },
            {
              title: "Scheduled Tasks",
              rows: [
                ["operator cron list", "List scheduled jobs"],
                ["operator cron add", "Add a new scheduled job"],
                ["operator cron remove <id>", "Remove a scheduled job"],
                ["operator cron enable <id>", "Enable a scheduled job"],
                ["operator cron disable <id>", "Disable a scheduled job"],
              ],
            },
            {
              title: "Auth",
              rows: [
                ["operator auth claude-code", "Login with Claude Code OAuth"],
                ["operator auth antigravity", "Login with Google Cloud Code Assist OAuth"],
                ["operator auth codex", "Login with OpenAI Codex OAuth"],
                ["operator auth github-copilot", "Login with GitHub Copilot OAuth"],
              ],
            },
            {
              title: "ACP (Agent Communication Protocol)",
              rows: [
                ["operator acp sessions", "List local ACP sessions"],
                ["operator acp discover", "Scan network for other Operator instances"],
                ["operator acp list <url>", "List agents on a remote ACP server"],
                ["operator acp run <url> <msg>", "Send a message to a remote agent"],
                ["operator acp stdio", "Start stdio bridge for IDE integration"],
              ],
            },
          ].map((group) => (
            <div key={group.title} style={{ marginBottom: "1rem" }}>
              <Sub title={group.title} />
              <Table headers={["Command", "Description"]} rows={group.rows} />
            </div>
          ))}
        </Section>

        {/* Docker */}
        <Section id="docker" title="Docker Setup">
          <p style={{ fontSize: "0.82rem", color: "#6b7280", marginBottom: "0.75rem" }}>
            Run Operator in a container without installing Python or uv. Requires Docker installed and running.
          </p>

          <Sub title="First-time setup" />
          <Label>macOS / Linux</Label>
          <Code>{`docker run -it \\
  -v ~/.operator-use:/root/.operator-use \\
  operator-use onboard`}</Code>
          <Label>Windows (PowerShell)</Label>
          <Code>{`docker run -it \`
  -v "$env:USERPROFILE\\.operator-use:/root/.operator-use" \`
  operator-use onboard`}</Code>

          <Sub title="Start the agent" />
          <Label>macOS / Linux</Label>
          <Code>{`docker run -d \\
  -v ~/.operator-use:/root/.operator-use \\
  -p 8080:8080 \\
  operator-use`}</Code>
          <Label>Windows (PowerShell)</Label>
          <Code>{`docker run -d \`
  -v "$env:USERPROFILE\\.operator-use:/root/.operator-use" \`
  -p 8080:8080 \`
  operator-use`}</Code>

          <Sub title="With an env file" />
          <Code>{`docker run -d \\
  -v ~/.operator-use:/root/.operator-use \\
  --env-file /path/to/.env \\
  -p 8080:8080 \\
  operator-use`}</Code>

          <Sub title="Run a specific command" />
          <Code>{`docker run -it -v ~/.operator-use:/root/.operator-use operator-use status
docker run -it -v ~/.operator-use:/root/.operator-use operator-use logs`}</Code>

          <Sub title="Port reference" />
          <Table
            headers={["Port", "Used for"]}
            rows={[
              ["8080", "Webhooks for Telegram, Discord, Slack"],
              ["8765", "ACP server (off by default)"],
              ["1883", "MQTT broker (plain)"],
              ["8883", "MQTT broker (TLS)"],
              ["9222", "Chrome DevTools / browser debugging"],
            ]}
          />
        </Section>

        {/* Config Location */}
        <Section id="config" title="Config Location">
          <p style={{ fontSize: "0.82rem", color: "#6b7280", marginBottom: "0.5rem" }}>
            All config, sessions, and logs are stored at <code style={{ fontFamily: "ui-monospace, monospace", fontSize: "0.78rem", background: "#f1f5f9", padding: "0.1rem 0.3rem", borderRadius: "3px" }}>~/.operator-use/</code> on all platforms.
          </p>
          <Table
            headers={["Platform", "Path"]}
            rows={[
              ["macOS / Linux", "~/.operator-use/"],
              ["Windows", "C:\\Users\\<you>\\.operator-use\\"],
            ]}
          />
        </Section>

        {/* Footer */}
        <div style={{ marginTop: "2rem", paddingTop: "1rem", borderTop: "1px solid #e5e7eb", fontSize: "0.72rem", color: "#9ca3af", display: "flex", justifyContent: "space-between" }}>
          <span>Operator — Personal AI Agent</span>
          <span className="print:hidden"><a href="/docs/setup" style={{ color: "#7c3aed" }}>← Back to docs</a></span>
        </div>
      </div>
    </>
  );
}
