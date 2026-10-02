import "./_group.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Briefcase,
  CalendarDays,
  Heart,
  Trophy,
  Users,
} from "lucide-react";

const audienceGroups = [
  {
    number: "01",
    label: "People & places",
    icon: Building2,
    items: [
      {
        icon: Building2,
        title: "Golf clubs & societies",
        description: "Bring members together for club updates, events and competitions.",
      },
      {
        icon: Users,
        title: "Golfers & fan communities",
        description: "Build stronger connections around clubs, players and the game.",
      },
    ],
  },
  {
    number: "02",
    label: "Events & causes",
    icon: CalendarDays,
    items: [
      {
        icon: CalendarDays,
        title: "Golf events & competitions",
        description: "Create shared experiences that keep players involved.",
      },
      {
        icon: Heart,
        title: "Charity golf & causes",
        description: "Bring golf communities together to support charitable causes.",
      },
    ],
  },
  {
    number: "03",
    label: "Businesses & organisations",
    icon: Briefcase,
    items: [
      {
        icon: Briefcase,
        title: "Golf brands & partners",
        description: "Connect golf communities with relevant partners and opportunities.",
      },
      {
        icon: Trophy,
        title: "Golf associations",
        description: "Keep members and groups connected across the golf community.",
      },
    ],
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">
      <span className="h-px w-5 bg-emerald-300/70" aria-hidden="true" />
      {children}
    </p>
  );
}

export function Refined() {
  return (
    <section
      className="relative isolate min-h-[100dvh] overflow-hidden border-y border-border/50 bg-muted/15 py-20 text-foreground lg:py-28"
      data-testid="section-audiences"
      aria-labelledby="heading-audiences"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-36 h-[28rem] w-[28rem] rounded-full border border-emerald-500/10 sm:-right-16"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-8 -top-20 h-[21rem] w-[21rem] rounded-full border border-emerald-500/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 top-[-1.5rem] h-2 w-2 rounded-full bg-emerald-300"
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">
              Built around the golf community
            </p>
            <h2
              id="heading-audiences"
              className="mt-5 max-w-[13ch] text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
              data-testid="heading-audiences"
            >
              One platform.
              <span className="mt-1 block text-emerald-300">Every part of golf.</span>
            </h2>
          </div>

          <div className="max-w-xl border-l border-border/80 pb-1 pl-6 sm:pl-8 lg:mb-2">
            <p className="text-lg font-semibold leading-relaxed md:text-xl">
              For any business or community connected to golf, Tribal18 brings
              people together in one branded home.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
              From clubs and societies to event organisers, golf brands,
              associations, golfers and charitable causes within the game.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {audienceGroups.map((group) => (
            <Card
              key={group.number}
              className="group relative isolate overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-card via-card to-emerald-950/30 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/35 hover:shadow-emerald-950/40"
              data-testid={`card-audience-group-${group.number}`}
            >
              <CardContent className="relative flex flex-col overflow-hidden p-5 sm:p-6">
                <div
                  className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-emerald-300/[0.07] blur-3xl transition-colors duration-500 group-hover:bg-emerald-300/[0.14]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300/25 to-emerald-950/60 text-emerald-200 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-200/25">
                    <group.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-border/70 bg-background/40 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-muted-foreground/70">
                    {group.number}
                  </span>
                </div>

                <p className="relative mt-5 text-[11px] font-bold uppercase tracking-[0.17em] text-emerald-300">
                  {group.label}
                </p>

                <div className="relative mt-5 divide-y divide-border/80">
                  {group.items.map((audience) => (
                    <div
                      key={audience.title}
                      className="flex gap-3.5 border-t border-border/80 pt-4 first:border-t-0 first:pt-0"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-300/10">
                        <audience.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold leading-5 tracking-tight sm:text-base">
                          {audience.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {audience.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-6 flex max-w-6xl items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
          Built for golf. Open to everyone who moves the game forward.
        </p>
      </div>
    </section>
  );
}