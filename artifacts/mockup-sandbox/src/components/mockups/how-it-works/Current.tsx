import "./_group.css";
import { ArrowRight, Layers, Rocket, Settings, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { icon: Layers, number: "01", title: "Create", description: "Set up the foundations of your community." },
  { icon: Settings, number: "02", title: "Configure", description: "Shape the experience around your brand and needs." },
  { icon: Rocket, number: "03", title: "Launch", description: "Open your community and welcome your members." },
  { icon: TrendingUp, number: "04", title: "Grow", description: "Keep people involved with content, events and more." },
];

export function Current() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section
        className="border-y border-border/50 bg-muted/20 py-20 lg:py-28"
        data-testid="section-how-it-works"
        aria-labelledby="heading-how-it-works"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">
              A clear path from idea to launch
            </p>
            <h2
              id="heading-how-it-works"
              className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
              data-testid="heading-how-it-works"
            >
              How it works.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Create, configure, launch and grow your community—with no technical team required.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative" data-testid={`step-how-it-works-${index}`}>
                <Card className="h-full border-border/60 bg-background/80">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                        <step.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-bold tracking-widest text-muted-foreground/60">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-emerald-500 lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}