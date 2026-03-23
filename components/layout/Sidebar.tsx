"use client";

import { useActiveSection } from "@/lib/hooks/useActiveSection";
import type { NavSection } from "@/lib/content/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import clsx from "clsx";

type Props = {
  navSections: NavSection[];
  allNavIds: string[];
};

export default function Sidebar({ navSections, allNavIds }: Props) {
  const activeId = useActiveSection(allNavIds);

  return (
    <nav className="sticky top-0 h-screen overflow-y-auto py-8 pr-6 hidden md:block">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-sm font-semibold text-[var(--text)]">Operator</span>
          <span className="ml-2 text-xs text-[var(--muted)]">docs</span>
        </div>
        <ThemeToggle />
      </div>
      <div className="space-y-6">
        {navSections.map((section) => (
          <div key={section.title}>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2 px-2">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={clsx(
                      "block rounded-md px-2 py-1.5 text-sm transition-colors",
                      activeId === item.id
                        ? "text-[var(--text)] bg-black/6 dark:bg-white/6 font-medium"
                        : "text-[var(--muted)] hover:text-[var(--text)] hover:bg-black/4 dark:hover:bg-white/4"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
