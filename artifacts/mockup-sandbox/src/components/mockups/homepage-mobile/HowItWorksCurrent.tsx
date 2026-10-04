import "./_group.css";
import { ArrowDown, ArrowRight, Layers, Rocket, Settings, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { icon: Layers, number: "01", title: "Create", description: "Pick a plan and name your community. You'll have full admin access in minutes." },
  { icon: Settings, number: "02", title: "Configure", description: "Customise, add your content, and switch on the features you need, be fully live in a few hours." },
  { icon: Rocket, number: "03", title: "Launch", description: "Invite your members and go live whenever you're ready." },
  { icon: TrendingUp, number: "04", title: "Grow", description: "Run events and competitions, share news, and connect with other clubs for reciprocal play." },
];

export function HowItWorksCurrent() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section
        className="relative isolate overflow-hidden border-y border-border/50 bg-[radial-gradient(ellipse_at_50%_0%,rgba(43,89,63,0.22),transparent_62%)] py-16"
        data-testid="section-how-it-works"
        aria-labelledby="heading-how-it-works"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.13]">
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full border border-emerald-100/30" />
          <div className="absolute -left-20 top-32 h-48 w-48 rounded-full border border-emerald-100/25" />
          <div className="absolute -right-40 bottom-[-12rem] h-[28rem] w-[28rem] rounded-full border border-emerald-100/30" />
        </div>

        <div className="container mx-auto px-5">
          <header className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
              <span className="h-px w-7 bg-emerald-300/50" aria-hidden="true" />
              A clear path from idea to launch
              <span className="h-px w-7 bg-emerald-300/50" aria-hidden="true" />
            </p>
            <h2
              id="heading-how-it-works"
              className="mt-4 text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.045em]"
              data-testid="heading-how-it-works"
            >
              How it works.
            </h2>
            <p className="mx-auto mt-5 max-w-[38rem] text-base leading-7 text-muted-foreground">
              Get full admin access in minutes and be ready to launch in a few hours. You&apos;re in
              control of everything, with live chat and email support whenever you need it.
            </p>
          </header>

          <div className="mx-auto mt-11 grid max-w-6xl gap-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative" data-testid={`step-how-it-works-${index}`}>
                <Card className="group relative h-full overflow-hidden rounded-[1.15rem] border border-emerald-100/[0.11] bg-gradient-to-br from-card via-card to-emerald-950/30 text-foreground shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/55 to-transparent"
                  />
                  <CardContent className="flex min-h-[176px] flex-col p-5">
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
                  <ArrowDown
                    className="absolute -bottom-[0.68rem] left-1/2 z-10 h-5 w-5 -translate-x-1/2 text-emerald-300"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-9 flex justify-center">
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