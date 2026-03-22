"use client";

import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { navSections, allNavIds } from "@/lib/content/navigation";
import clsx from "clsx";

export default function TableOfContents() {
  const activeId = useActiveSection(allNavIds);

  return (
    <div className="sticky top-0 h-screen overflow-y-auto py-8 pl-6 hidden xl:block">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#888] mb-3">
        On this page
      </p>
      <ul className="space-y-0.5">
        {navSections.flatMap((section) =>
          section.items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={clsx(
                  "block text-xs py-1 transition-colors",
                  activeId === item.id
                    ? "text-[#7c3aed] font-medium"
                    : "text-[#666] hover:text-[#aaa]"
                )}
              >
                {item.label}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
