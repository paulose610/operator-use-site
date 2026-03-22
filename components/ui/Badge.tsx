import clsx from "clsx";

type Variant = "full" | "partial" | "none";

const styles: Record<Variant, string> = {
  full: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/20",
  partial: "bg-amber-500/15 text-amber-400 ring-amber-500/20",
  none: "bg-zinc-500/15 text-zinc-400 ring-zinc-500/20",
};

const labels: Record<Variant, string> = {
  full: "Full",
  partial: "Partial",
  none: "Not supported",
};

export default function Badge({ variant }: { variant: Variant }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset",
        styles[variant]
      )}
    >
      {labels[variant]}
    </span>
  );
}
