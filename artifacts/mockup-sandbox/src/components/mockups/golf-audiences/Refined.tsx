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

const audiences = [
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
];

const audienceGroups = [
  {
    number: "01",
    label: "People & places",
    items: audiences.slice(0, 2),
    className: "lg:col-span-5",
  },
  {
    number: "02",
    label: "Gather & give",
    items: audiences.slice(2, 4),
    className: "lg:col-span-4",
  },
  {
    number: "03",
    label: "Business of golf",
    items: audiences.slice(4, 6),
    className: "lg:col-span-3",
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
      className="relative isolate min-h-[100dvh] overflow-hidden bg-background py-16 text-foreground sm:py-20 lg:py-[5.5rem]"
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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div className="max-w-3xl">
            <Eyebrow>Built around the golf community</Eyebrow>
            <h2
              id="heading-audiences"
              className="mt-5 max-w-[13ch] font-['Montserrat'] text-[2.7rem] font-semibold leading-[1.03] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-[4.5rem]"
              data-testid="heading-audiences"
            >
              One platform.
              <br />
              <span className="text-emerald-300">Every part of golf.</span>
            </h2>
          </div>

          <div className="relative max-w-xl border-l border-border pb-1 pl-6 sm:pl-8 lg:mb-2">
            <Eyebrow>For golf clubs, societies and events</Eyebrow>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              A home for the people, organisations and businesses connected to
              the game — from the first tee to the final handshake.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-y border-border py-4 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:py-5">
          <Eyebrow>The Tribal18 platform</Eyebrow>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-right sm:text-[15px]">
            One connected space for golfers, organisers, causes, partners and
            the organisations that help golf thrive.
          </p>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-12 lg:gap-4">
          {audienceGroups.map((group) => (
            <Card
              key={group.number}
              className={`group h-full rounded-[1.35rem] border border-border/70 bg-card/70 shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-1 ${group.className}`}
            >
              <CardContent className="flex h-full flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-emerald-300/90">
                    {group.label}
                  </p>
                  <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground/60">
                    {group.number}
                  </span>
                </div>

                <div className="mt-4 divide-y divide-border/80">
                  {group.items.map((audience) => (
                    <div
                      key={audience.title}
                      className="flex gap-3.5 py-4 first:pt-0 last:pb-0"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                        <audience.icon className="h-[17px] w-[17px]" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-[14px] font-semibold leading-5 tracking-[-0.02em] text-foreground sm:text-[15px]">
                          {audience.title}
                        </h3>
                        <p className="mt-1.5 text-[12px] leading-[1.65] text-muted-foreground sm:text-[13px]">
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

        <div className="mt-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
          <span>Built for golf. Open to everyone who moves it forward.</span>
        </div>
      </div>
    </section>
  );
}