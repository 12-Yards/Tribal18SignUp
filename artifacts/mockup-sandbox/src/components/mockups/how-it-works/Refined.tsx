import "./_group.css";
import { ArrowDown, ArrowRight, Layers, Rocket, Settings, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { icon: Layers, number: "01", title: "Create", description: "Set up the foundations of your community." },
  { icon: Settings, number: "02", title: "Configure", description: "Shape the experience around your brand and needs." },
  { icon: Rocket, number: "03", title: "Launch", description: "Open your community and welcome your members." },
  { icon: TrendingUp, number: "04", title: "Grow", description: "Keep people involved with content, events and more." },
];

export function Refined() {
  return (
    <main className="min-h-screen bg-[#0b1712] text-[#f1f4ee]">
      <section
        className="relative isolate overflow-hidden border-y border-[#d6e5d7]/10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(43,89,63,0.22),transparent_62%)] py-16 sm:py-20 lg:py-28"
        data-testid="section-how-it-works"
        aria-labelledby="heading-how-it-works"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.13]">
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full border border-[#91b79b]/30" />
          <div className="absolute -left-20 top-32 h-48 w-48 rounded-full border border-[#91b79b]/25" />
          <div className="absolute -right-40 bottom-[-12rem] h-[28rem] w-[28rem] rounded-full border border-[#91b79b]/30" />
        </div>

        <div className="container mx-auto px-5 sm:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#a8ceb0] sm:text-xs">
              <span className="h-px w-7 bg-[#789c80]" aria-hidden="true" />
              A clear path from idea to launch
              <span className="h-px w-7 bg-[#789c80]" aria-hidden="true" />
            </p>
            <h2
              id="heading-how-it-works"
              className="mt-4 text-[2.35rem] font-bold leading-[1.04] tracking-[-0.045em] text-[#f4f5ef] sm:text-5xl lg:text-[3.45rem]"
              data-testid="heading-how-it-works"
            >
              How it works.
            </h2>
            <p className="mx-auto mt-5 max-w-[38rem] text-base leading-7 text-[#aab8ae] sm:text-lg sm:leading-8">
              Create, configure, launch and grow your community—with no technical team required.
            </p>
          </header>

          <div className="mx-auto mt-11 grid max-w-6xl gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative" data-testid={`step-how-it-works-${index}`}>
                <Card className="group relative h-full overflow-hidden rounded-[1.15rem] border border-[#d6e5d7]/[0.11] bg-[#102019]/90 text-[#f1f4ee] shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#83ae8e]/55 to-transparent"
                  />
                  <CardContent className="flex min-h-[176px] flex-col p-5 sm:min-h-[190px] sm:p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[0.85rem] border border-[#a7cdb0]/15 bg-[#739d7d]/[0.12] text-[#a9cfb1] transition-colors duration-300 group-hover:bg-[#739d7d]/20">
                        <step.icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-[0.7rem] font-semibold tracking-[0.16em] text-[#81988a]">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-5 text-[1.08rem] font-semibold tracking-[-0.02em] text-[#f1f4ee]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.84rem] leading-[1.65] text-[#a5b3a9]">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <>
                    <ArrowRight
                      className="absolute -right-[0.7rem] top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-[#8fb99a] lg:block"
                      aria-hidden="true"
                    />
                    <ArrowDown
                      className="absolute -bottom-[0.68rem] left-1/2 z-10 h-5 w-5 -translate-x-1/2 text-[#8fb99a] sm:hidden"
                      aria-hidden="true"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}