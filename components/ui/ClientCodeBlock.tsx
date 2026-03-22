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

export default function ClientCodeBlock({ code, filename }: { code: string; filename?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--code-bg)] my-4">
      {filename && (
        <div className="flex items-center px-4 py-2 border-b border-[var(--border)] bg-black/3 dark:bg-white/4">
          <span className="text-xs text-[var(--muted)] font-mono">{filename}</span>
        </div>
      )}
      <pre className="overflow-x-auto px-5 py-4 text-[0.8125rem] leading-relaxed font-mono text-[var(--code-text)] pr-12">
        <code>{code.trim()}</code>
      </pre>
      {/* Solid background so button stays visible over long scrolling commands */}
      <button
        onClick={handleCopy}
        title="Copy to clipboard"
        className="absolute top-2 right-2 flex items-center justify-center w-7 h-7 rounded-md bg-[var(--code-bg)] text-[var(--muted)] hover:text-[var(--text)] hover:bg-black/10 dark:hover:bg-white/12 border border-[var(--border)] transition-colors cursor-pointer"
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
      </button>
    </div>
  );
}
