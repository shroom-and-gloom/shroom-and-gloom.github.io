import { ShieldCheck } from "lucide-react";
import type { FactsStatus } from "@/config/types";

export function FactsStatusBanner({
  status,
  label,
}: {
  status?: FactsStatus;
  label?: string;
}) {
  // Only render when an explicit player-facing label is provided.
  const text = label?.trim();
  if (!text || !status || status === "skeleton") return null;

  return (
    <p
      className="mt-4 inline-flex max-w-3xl items-start gap-2 rounded-[calc(var(--radius)*.7)] border border-border bg-secondary/60 px-3 py-2 text-sm leading-6 text-muted-foreground"
      data-facts-status={status}
    >
      <ShieldCheck size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden />
      <span>{text}</span>
    </p>
  );
}
