type Channel = {
  name: string;
  color: string;
  requirement: string;
};

const channels: Channel[] = [
  { name: "Telegram", color: "#2AABEE", requirement: "Bot token from @BotFather" },
  { name: "Discord", color: "#5865F2", requirement: "Bot token + Message Content intent" },
  { name: "Slack", color: "#4A154B", requirement: "Bot token + App-Level token" },
  { name: "Twitch", color: "#9146FF", requirement: "OAuth token + channel name" },
  { name: "MQTT", color: "#FF6B35", requirement: "Broker host + topic" },
];

export default function Channels() {
  return (
    <section id="channels" className="mb-12 scroll-mt-6">
      <h2 className="text-xl font-semibold text-[var(--text)] mb-1">Channels</h2>
      <p className="text-[var(--muted)] text-sm mb-6">
        Connect Operator to the platform you already use. Run{" "}
        <code className="text-[#6d28d9] dark:text-[#c4b5fd] text-xs bg-black/5 dark:bg-white/6 px-1.5 py-0.5 rounded">
          operator onboard
        </code>{" "}
        to configure interactively.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {channels.map((ch) => (
          <div
            key={ch.name}
            className="rounded-lg border border-[var(--border)] overflow-hidden flex"
          >
            <div
              className="w-1.5 shrink-0"
              style={{ backgroundColor: ch.color }}
            />
            <div className="p-4 flex flex-col gap-2">
              <p
                className="text-sm font-bold"
                style={{ color: ch.color }}
              >
                {ch.name}
              </p>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-0.5">
                  What you need
                </p>
                <p className="text-xs text-[var(--text)]">{ch.requirement}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
