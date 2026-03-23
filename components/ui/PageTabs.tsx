"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const tabs = [
  { label: "Setup", href: "/docs/setup" },
  { label: "Info", href: "/docs/info" },
];

export default function PageTabs() {
  const pathname = usePathname();

  return (
    <div className="flex gap-1 mb-8 border-b border-[var(--border)]">
      {tabs.map((tab) => {
        const active = pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={clsx(
              "px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px",
              active
                ? "border-[#7c3aed] text-[#7c3aed]"
                : "border-transparent text-[var(--muted)] hover:text-[var(--text)]"
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
