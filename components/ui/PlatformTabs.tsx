"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

type Platform = "mac" | "windows";

export default function PlatformTabs({ mac, windows }: { mac: React.ReactNode; windows: React.ReactNode }) {
  const [platform, setPlatform] = useState<Platform>("mac");

  useEffect(() => {
    const stored = localStorage.getItem("operator-platform") as Platform | null;
    if (stored === "mac" || stored === "windows") setPlatform(stored);
  }, []);

  const select = (p: Platform) => {
    setPlatform(p);
    localStorage.setItem("operator-platform", p);
  };

  return (
    <div className="my-4">
      <div className="flex border-b border-[var(--border)]">
        {(["mac", "windows"] as Platform[]).map((p) => (
          <button
            key={p}
            onClick={() => select(p)}
            className={clsx(
              "px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px cursor-pointer",
              platform === p
                ? "border-[#7c3aed] text-[var(--text)]"
                : "border-transparent text-[var(--muted)] hover:text-[var(--text)]"
            )}
          >
            {p === "mac" ? "macOS / Linux" : "Windows"}
          </button>
        ))}
      </div>
      <div className="pt-1">{platform === "mac" ? mac : windows}</div>
    </div>
  );
}
