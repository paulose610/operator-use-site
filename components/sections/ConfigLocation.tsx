export default function ConfigLocation() {
  return (
    <section id="config-location" className="mb-12 scroll-mt-6">
      <h2 className="text-xl font-semibold text-[var(--text)] mb-1">Config Location</h2>
      <p className="text-[var(--muted)] text-sm mb-4">
        All config, sessions, and logs are stored at{" "}
        <code className="text-[#6d28d9] dark:text-[#c4b5fd] text-xs bg-black/5 dark:bg-white/6 px-1.5 py-0.5 rounded">
          ~/.operator-use/
        </code>{" "}
        on all platforms.
      </p>
      <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-black/2 dark:bg-white/2">
              <th className="text-left px-4 py-2.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wide">Platform</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wide">Path</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--border)]">
              <td className="px-4 py-3 text-[var(--text)]">macOS / Linux</td>
              <td className="px-4 py-3 font-mono text-xs text-[#6d28d9] dark:text-[#c4b5fd]">~/.operator-use/</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-[var(--text)]">Windows</td>
              <td className="px-4 py-3 font-mono text-xs text-[#6d28d9] dark:text-[#c4b5fd]">{"C:\\Users\\<you>\\.operator-use\\"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
