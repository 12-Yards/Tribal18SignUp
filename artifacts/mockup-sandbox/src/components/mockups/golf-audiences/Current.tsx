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

export function Current() {
  const audienceGroups = [
    {
      number: "01",
      label: "People & places",
      items: [
        { icon: Building2, title: "Golf clubs & societies", description: "Bring members together for club updates, events and competitions." },
        { icon: Users, title: "Golfers & fan communities", description: "Build stronger connections around clubs, players and the game." },
      ],
    },
    {
      number: "02",
      label: "Events & causes",
      items: [
        { icon: CalendarDays, title: "Golf events & competitions", description: "Create shared experiences that keep players involved." },
        { icon: Heart, title: "Charity golf & causes", description: "Bring golf communities together to support charitable causes." },
      ],
    },
    {
      number: "03",
      label: "Businesses & organisations",
      items: [
        { icon: Briefcase, title: "Golf brands & partners", description: "Connect golf communities with relevant partners and opportunities." },
        { icon: Trophy, title: "Golf associations", description: "Keep members and groups connected across the golf community." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative isolate overflow-hidden border-y border-border/50 bg-muted/15 py-20 lg:py-28"
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
                For any business or community connected to golf, Tribal18 brings people together in
                one branded home.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                From clubs and societies to event organisers, golf brands, associations, golfers and
                charitable causes within the game.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-4 lg:mt-14 lg:grid-cols-3">
            {audienceGroups.map((group) => (
              <Card
                key={group.number}
                className="h-full rounded-2xl border-border/70 bg-card/70 shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-1"
                data-testid={`card-audience-group-${group.number}`}
              >
                <CardContent className="flex h-full flex-col p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">
                      {group.label}
                    </p>
                    <span className="font-mono text-xs tracking-[0.14em] text-muted-foreground/60">
                      {group.number}
                    </span>
                  </div>
                  <div className="mt-4 divide-y divide-border/80">
                    {group.items.map((audience) => (
                      <div key={audience.title} className="flex gap-3.5 py-4 first:pt-0 last:pb-0">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
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
    </div>
  );
}