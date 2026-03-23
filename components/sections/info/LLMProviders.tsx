type Provider = {
  name: string;
  models: string;
};

const providers: Provider[] = [
  { name: "OpenAI", models: "GPT-4o, o3, etc." },
  { name: "Anthropic", models: "Claude 3.5/4 series" },
  { name: "Google", models: "Gemini 2.0/2.5 series" },
  { name: "Mistral", models: "All Mistral models" },
  { name: "Groq", models: "Ultra-fast inference" },
  { name: "Ollama", models: "Local models" },
  { name: "Azure OpenAI", models: "Enterprise Azure deployments" },
  { name: "Cerebras", models: "Fast inference" },
  { name: "DeepSeek", models: "DeepSeek-V3, R1" },
  { name: "NVIDIA", models: "NVIDIA NIM" },
  { name: "OpenRouter", models: "200+ models via one API" },
  { name: "vLLM", models: "Self-hosted inference" },
  { name: "LiteLLM", models: "Unified proxy" },
  { name: "GitHub Copilot", models: "Via Copilot API" },
];

export default function LLMProviders() {
  return (
    <section id="llms" className="mb-12 scroll-mt-6">
      <h2 className="text-xl font-semibold text-[var(--text)] mb-1">LLM Providers</h2>
      <p className="text-[var(--muted)] text-sm mb-6">
        Configure your provider during{" "}
        <code className="text-[#6d28d9] dark:text-[#c4b5fd] text-xs bg-black/5 dark:bg-white/6 px-1.5 py-0.5 rounded">
          operator onboard
        </code>{" "}
        or directly in your config file.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {providers.map((p) => (
          <div
            key={p.name}
            className="rounded-lg border border-[var(--border)] px-4 py-3 flex flex-col gap-1"
          >
            <p className="text-sm font-semibold text-[var(--text)]">{p.name}</p>
            <p className="text-xs text-[var(--muted)]">{p.models}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
