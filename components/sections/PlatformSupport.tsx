import Badge from "@/components/ui/Badge";

const platforms = [
  { name: "Windows", support: "full" as const, note: "Full desktop control" },
  { name: "macOS",   support: "partial" as const, note: "Full desktop control (Beta)" },
  { name: "Linux",   support: "partial" as const, note: "Desktop control in progress" },
];

export default function PlatformSupport() {
  return (
    <section id="platform-support" className="mb-12 scroll-mt-6">
      <h2 className="text-xl font-semibold text-[var(--text)] mb-1">Platform Support</h2>
      <p className="text-[var(--muted)] text-sm mb-4">
        Platform-specific native dependencies are installed automatically — no extra steps needed.
      </p>
      <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-black/2 dark:bg-white/2">
              <th className="text-left px-4 py-2.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wide">Platform</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wide">Support</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wide">Notes</th>
            </tr>
          </thead>
          <tbody>
            {platforms.map((p) => (
              <tr key={p.name} className="border-b border-[var(--border)] last:border-0">
                <td className="px-4 py-3 font-medium text-[var(--text)]">{p.name}</td>
                <td className="px-4 py-3"><Badge variant={p.support} /></td>
                <td className="px-4 py-3 text-[var(--muted)]">{p.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
