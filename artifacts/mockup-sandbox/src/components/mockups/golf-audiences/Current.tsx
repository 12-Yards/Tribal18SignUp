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
  const audiences = [
    {
      icon: Users,
      title: "Golf clubs & societies",
      description: "Bring members together for club updates, events and competitions.",
    },
    {
      icon: Trophy,
      title: "Golfers & fan communities",
      description: "Build stronger connections around clubs, players and the game.",
    },
    {
      icon: Heart,
      title: "Charity golf & causes",
      description: "Bring golf communities together to support charitable causes.",
    },
    {
      icon: CalendarDays,
      title: "Golf events & competitions",
      description: "Create shared experiences that keep players involved.",
    },
    {
      icon: Briefcase,
      title: "Golf brands & partners",
      description: "Connect golf communities with relevant partners and opportunities.",
    },
    {
      icon: Building2,
      title: "Golf associations",
      description: "Keep members and groups connected across the golf community.",
    },
  ];

  return (
    <section
      className="py-20 lg:py-28"
      data-testid="section-audiences"
      aria-labelledby="heading-audiences"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-500">
            Built around the golf community
          </p>
          <h2
            id="heading-audiences"
            className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
            data-testid="heading-audiences"
          >
            One platform. Every part of golf.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From clubs and societies to charitable causes and golf events, give
            members a place to connect and get involved.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <Card
              key={audience.title}
              className="h-full border-border/60 bg-card/60"
              data-testid={`card-audience-${index}`}
            >
              <CardContent className="flex h-full items-start gap-4 p-5 sm:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <audience.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold">{audience.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {audience.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}