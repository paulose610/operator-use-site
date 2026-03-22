"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

function copyToClipboard(text: string) {
  if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  const el = document.createElement("textarea");
  el.value = text;
  el.style.cssText = "position:fixed;top:0;left:0;opacity:0.001;";
  document.body.appendChild(el);
  el.focus();
  el.select();
  el.setSelectionRange(0, text.length);
  try { document.execCommand("copy"); } finally { document.body.removeChild(el); }
  return Promise.resolve();
}

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      title="Copy to clipboard"
      className="absolute top-2 right-2 flex items-center justify-center w-7 h-7 rounded-md bg-[var(--code-bg)] text-[var(--muted)] hover:text-[var(--text)] hover:bg-black/10 dark:hover:bg-white/12 border border-[var(--border)] transition-colors cursor-pointer"
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  );
}
