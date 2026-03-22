import { CommandCategory } from "@/lib/content/commands";

export default function CommandTable({ category }: { category: CommandCategory }) {
  return (
    <div className="my-6">
      <h3 id={`cmd-${category.id}`} className="text-base font-semibold text-[var(--text)] mb-3 scroll-mt-6">
        {category.title}
      </h3>
      <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-black/2 dark:bg-white/2">
              <th className="text-left px-4 py-2.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wide w-64">Command</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wide">Description</th>
              {category.rows.some((r) => r.flags) && (
                <th className="text-left px-4 py-2.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wide">Notes</th>
              )}
            </tr>
          </thead>
          <tbody>
            {category.rows.map((row, i) => (
              <tr key={i} className="border-b border-[var(--border)] last:border-0 hover:bg-black/3 dark:hover:bg-white/3 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-[#6d28d9] dark:text-[#c4b5fd] whitespace-nowrap">{row.command}</td>
                <td className="px-4 py-3 text-[var(--text)]">{row.description}</td>
                {category.rows.some((r) => r.flags) && (
                  <td className="px-4 py-3 text-[var(--muted)] text-xs">{row.flags ?? ""}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
