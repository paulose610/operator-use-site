import { codeToHtml } from "shiki";
import CopyButton from "./CopyButton";

type Props = {
  code: string;
  language?: string;
  filename?: string;
};

export default async function CodeBlock({
  code,
  language = "bash",
  filename,
}: Props) {
  const html = await codeToHtml(code.trim(), {
    lang: language,
    theme: "github-dark-dimmed",
  });

  return (
    <div className="relative rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--code-bg)] my-4">
      {filename && (
        <div className="flex items-center px-4 py-2 border-b border-[var(--border)] bg-black/3 dark:bg-white/4">
          <span className="text-xs text-[var(--muted)] font-mono">{filename}</span>
        </div>
      )}
      <div className="overflow-x-auto" dangerouslySetInnerHTML={{ __html: html }} />
      <CopyButton code={code.trim()} />
    </div>
  );
}
