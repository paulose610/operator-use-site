import { commandCategories } from "@/lib/content/commands";
import CommandTable from "@/components/ui/CommandTable";

export default function CommandReference() {
  return (
    <section id="commands" className="mb-12 scroll-mt-6">
      <h2 className="text-xl font-semibold text-[var(--text)] mb-1">Command Reference</h2>
      <p className="text-[var(--muted)] text-sm mb-6">
        All available commands. Run{" "}
        <code className="text-[#6d28d9] dark:text-[#c4b5fd] text-xs bg-black/5 dark:bg-white/6 px-1.5 py-0.5 rounded">
          operator &lt;command&gt; --help
        </code>{" "}
        for details on any command.
      </p>
      {commandCategories.map((category) => (
        <CommandTable key={category.id} category={category} />
      ))}
    </section>
  );
}
