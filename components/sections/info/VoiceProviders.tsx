import { Check } from "lucide-react";

const providers = ["OpenAI", "Google", "Groq", "ElevenLabs", "Deepgram", "Sarvam"];

function CheckCell() {
  return (
    <div className="flex items-center justify-center">
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10">
        <Check size={13} className="text-emerald-500" strokeWidth={2.5} />
      </span>
    </div>
  );
}

export default function VoiceProviders() {
  return (
    <section id="voice" className="mb-12 scroll-mt-6">
      <h2 className="text-xl font-semibold text-[var(--text)] mb-1">Voice Providers</h2>
      <p className="text-[var(--muted)] text-sm mb-6">
        All providers support both speech-to-text (STT) and text-to-speech (TTS).
      </p>
      <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-black/2 dark:bg-white/2">
              <th className="text-left px-4 py-2.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wide">
                Provider
              </th>
              <th className="text-center px-4 py-2.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wide w-24">
                STT
              </th>
              <th className="text-center px-4 py-2.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wide w-24">
                TTS
              </th>
            </tr>
          </thead>
          <tbody>
            {providers.map((name, i) => (
              <tr
                key={name}
                className={i < providers.length - 1 ? "border-b border-[var(--border)]" : ""}
              >
                <td className="px-4 py-3 font-medium text-[var(--text)]">{name}</td>
                <td className="px-4 py-3"><CheckCell /></td>
                <td className="px-4 py-3"><CheckCell /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
