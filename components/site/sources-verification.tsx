import { ExternalLink } from "lucide-react";
import type { PageSource } from "@/config/types";

export function SourcesVerification({ sources }: { sources?: PageSource[] }) {
  if (!sources?.length) return null;

  return (
    <section id="sources-verification" className="scroll-mt-24" aria-labelledby="sources-verification-heading">
      <p className="eyebrow">Trust</p>
      <h2 id="sources-verification-heading">Sources &amp; verification</h2>
      <p className="section-lead">
        Use these links to check the claims on this page. Official Steam pages are primary; player-reported rows are leads to verify in your current build.
      </p>
      <ul className="mt-6 space-y-4">
        {sources.map((source) => (
          <li key={`${source.url}-${source.label}`} className="content-card p-5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
              <span>{source.typeLabel}</span>
              <span aria-hidden>·</span>
              <span>Reviewed {source.reviewed}</span>
              {source.type === "player-reported" ? (
                <>
                  <span aria-hidden>·</span>
                  <span className="text-primary">Player-reported — verify in game</span>
                </>
              ) : null}
            </div>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-base font-bold text-foreground hover:text-primary"
            >
              {source.label}
              <ExternalLink size={16} aria-hidden />
            </a>
            {source.note ? <p className="mt-2 text-sm leading-6 text-muted-foreground">{source.note}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
