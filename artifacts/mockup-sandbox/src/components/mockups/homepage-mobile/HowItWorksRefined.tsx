import "./_group.css";
import { ArrowRight, Layers, Rocket, Settings, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { icon: Layers, number: "01", title: "Create", description: "Pick a plan and name your community. You'll have full admin access in minutes." },
  { icon: Settings, number: "02", title: "Configure", description: "Customise, add your content, and switch on the features you need, be fully live in a few hours." },
  { icon: Rocket, number: "03", title: "Launch", description: "Invite your members and go live whenever you're ready." },
  { icon: TrendingUp, number: "04", title: "Grow", description: "Run events and competitions, share news, and connect with other clubs for reciprocal play." },
];

export function HowItWorksRefined() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section
        className="relative isolate overflow-hidden border-y border-border/50 bg-[radial-gradient(ellipse_at_50%_0%,rgba(43,89,63,0.22),transparent_62%)] py-12 sm:py-20"
        data-testid="section-how-it-works"
        aria-labelledby="heading-how-it-works"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.13]">
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full border border-emerald-100/30" />
          <div className="absolute -left-20 top-32 h-48 w-48 rounded-full border border-emerald-100/25" />
          <div className="absolute -right-40 bottom-[-12rem] h-[28rem] w-[28rem] rounded-full border border-emerald-100/30" />
        </div>

        <div className="container mx-auto px-5 sm:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-emerald-300 sm:text-xs">
              <span className="h-px w-6 bg-emerald-300/50" aria-hidden="true" />
              A clear path from idea to launch
              <span className="h-px w-6 bg-emerald-300/50" aria-hidden="true" />
            </p>
            <h2
              id="heading-how-it-works"
              className="mt-4 text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[3.45rem]"
              data-testid="heading-how-it-works"
            >
              How it works.
            </h2>
            <p className="mx-auto mt-4 max-w-[38rem] text-[0.94rem] leading-6 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
              Get full admin access in minutes and be ready to launch in a few hours. You&apos;re in
              control of everything, with live chat and email support whenever you need it.
            </p>
          </header>

          <ol className="mx-auto mt-8 max-w-2xl sm:hidden" aria-label="Four steps to launch">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex gap-3.5 pb-5 last:pb-0"
                data-testid={`mobile-step-how-it-works-${index}`}
              >
                <div className="relative flex w-10 shrink-0 justify-center">
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200/15 bg-emerald-300/[0.12] text-emerald-200">
                    <step.icon className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
                  </span>
                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-10 bottom-[-1.25rem] w-px -translate-x-1/2 bg-emerald-200/20"
                    />
                  )}
                </div>
                <div
                  className={`min-w-0 flex-1 ${index < steps.length - 1 ? "border-b border-border/70 pb-5" : "pb-1"}`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-base font-semibold tracking-tight">{step.title}</h3>
                    <span className="shrink-0 font-mono text-[0.65rem] font-semibold tracking-[0.14em] text-emerald-200/70">
                      STEP {step.number}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[0.82rem] leading-[1.55] text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mx-auto mt-11 hidden max-w-6xl gap-4 sm:grid sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative" data-testid={`step-how-it-works-${index}`}>
                <Card className="group relative h-full overflow-hidden rounded-[1.15rem] border border-emerald-100/[0.11] bg-gradient-to-br from-card via-card to-emerald-950/30 text-foreground shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/55 to-transparent"
                  />
                  <CardContent className="flex min-h-[176px] flex-col p-5 sm:min-h-[190px] sm:p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[0.85rem] border border-emerald-200/15 bg-emerald-300/[0.12] text-emerald-200">
                        <step.icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-[0.7rem] font-semibold tracking-[0.16em] text-muted-foreground/80">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-5 text-[1.08rem] font-semibold tracking-[-0.02em]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.84rem] leading-[1.65] text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-[0.7rem] top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-emerald-300 lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:mt-11">
            <Button size="lg" asChild className="gap-2 bg-white text-emerald-700 hover:bg-white/90">
              <a href="#">
                Start your community
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}