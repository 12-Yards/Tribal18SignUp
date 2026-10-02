import "./_group.css";
import { CheckCircle } from "lucide-react";

const comparisonRows = [
  {
    social: "A profile and feed inside someone else’s platform",
    tribal: "A branded space designed around your community",
  },
  {
    social: "Your community is tied to a platform profile",
    tribal: "A custom URL is included with every plan",
  },
  {
    social: "Community activity spread across separate channels",
    tribal: "Manage members, content, events and memberships from one admin dashboard",
  },
];

export function Current() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section
        className="relative overflow-hidden border-y border-border/50 bg-gradient-to-br from-emerald-500/5 via-background to-background py-20 lg:py-28"
        data-testid="section-ownership"
        aria-labelledby="heading-ownership"
      >
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <h2
                id="heading-ownership"
                className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                data-testid="heading-ownership"
              >
                A home for your golf community.
                <span className="mt-1 block text-emerald-400">Built around your brand.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Social profiles and feeds can help people discover you, but they are not a dedicated
                space for your members. Tribal18 gives your golf community a branded home, with an
                admin dashboard for your team.
              </p>
            </div>

            <div
              className="overflow-hidden rounded-2xl border border-border/60 bg-card/70 shadow-xl shadow-black/5"
              data-testid="list-ownership-benefits"
            >
              <div className="grid grid-cols-[1fr_1fr]">
                <div className="border-b border-border/60 bg-muted/50 p-4 sm:p-5">
                  <span className="text-xs font-bold uppercase tracking-[0.13em] text-muted-foreground">
                    Traditional social platforms
                  </span>
                </div>
                <div className="border-b border-l border-border/60 bg-emerald-500/10 p-4 sm:p-5">
                  <span className="text-xs font-bold uppercase tracking-[0.13em] text-emerald-500">
                    Your Tribal18 community
                  </span>
                </div>
                {comparisonRows.map((row, index) => (
                  <div
                    key={row.social}
                    className="contents"
                    data-testid={`row-ownership-comparison-${index}`}
                  >
                    <div className="flex items-start gap-3 border-b border-border/50 p-4 text-sm leading-relaxed text-muted-foreground sm:p-5">
                      <span className="mt-0.5 text-muted-foreground/70" aria-hidden="true">
                        —
                      </span>
                      <span>{row.social}</span>
                    </div>
                    <div className="flex items-start gap-3 border-b border-l border-border/50 bg-emerald-500/[0.03] p-4 text-sm font-medium leading-relaxed sm:p-5">
                      <CheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                        aria-hidden="true"
                      />
                      <span>{row.tribal}</span>
                    </div>
                  </div>
                ))}
                <div className="col-span-2 bg-emerald-500/[0.06] px-4 py-3 text-center text-sm font-medium text-emerald-500 sm:px-5">
                  A dedicated home for members. Admin tools for your team.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}