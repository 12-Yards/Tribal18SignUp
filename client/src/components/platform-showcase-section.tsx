import { useState } from "react";
import {
  CalendarDays,
  Globe,
  Map,
  MessageCircle,
  Users,
  type LucideIcon,
} from "lucide-react";
import appScreensPath from "@assets/image_1784735462257.png";
import webPollsPath from "@assets/0_s1_1791044137064.png";

type PlatformView = {
  id: string;
  label: string;
  title: string;
  description: string;
  platform: "mobile" | "web";
  icon: LucideIcon;
  screenLeft?: string;
};

const platformViews: PlatformView[] = [
  {
    id: "community",
    label: "Community",
    title: "Keep the conversation together.",
    description:
      "Give members one place for community updates, stories and the conversations around the game.",
    platform: "mobile",
    icon: MessageCircle,
    screenLeft: "1.2%",
  },
  {
    id: "events",
    label: "Events",
    title: "Make every event easier to join.",
    description:
      "Share competition details and event updates where members already connect.",
    platform: "mobile",
    icon: CalendarDays,
    screenLeft: "25.5%",
  },
  {
    id: "golf-play",
    label: "Golf play",
    title: "Help golfers find their next game.",
    description:
      "Bring tee-time discovery and golf opportunities into the same community experience.",
    platform: "mobile",
    icon: Map,
    screenLeft: "50.1%",
  },
  {
    id: "communities",
    label: "Communities",
    title: "Connect people across groups.",
    description:
      "Help members discover clubs, societies and communities connected to the game.",
    platform: "mobile",
    icon: Users,
    screenLeft: "74.8%",
  },
  {
    id: "web-polls",
    label: "Web polls",
    title: "Give members a voice on the web.",
    description:
      "Run polls through a branded community website. This real York Vibe screen shows members voting online.",
    platform: "web",
    icon: Globe,
  },
];

export function PlatformShowcaseSection() {
  const [activeView, setActiveView] = useState(platformViews[0]);
  const ActiveIcon = activeView.icon;

  return (
    <section
      id="platform-preview"
      className="relative overflow-hidden border-y border-border/50 bg-muted/15 py-20 lg:py-28"
      data-testid="section-platform-showcase"
      aria-labelledby="heading-platform-showcase"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <header className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">A closer look at Tribal18</p>
          <h2
            id="heading-platform-showcase"
            className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            See your community in action.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore real screens from the mobile app and a branded community website.
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-6xl rounded-[1.5rem] border border-emerald-100/[0.1] bg-gradient-to-br from-card via-card to-emerald-950/25 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-6 lg:mt-12 lg:p-8">
          <div
            className="flex gap-2 overflow-x-auto pb-2"
            role="group"
            aria-label="Explore platform features"
          >
            {platformViews.map((view, index) => {
              const Icon = view.icon;
              const isActive = activeView.id === view.id;

              return (
                <button
                  key={view.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveView(view)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive
                      ? "border-emerald-300/40 bg-emerald-300/15 text-emerald-100"
                      : "border-border/70 bg-background/30 text-muted-foreground hover:border-emerald-300/25 hover:text-foreground"
                  }`}
                  data-testid={`button-platform-view-${view.id}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{view.label}</span>
                  <span className="sr-only">, view {index + 1} of {platformViews.length}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-10">
            <div className="px-1 py-2 sm:px-3 lg:py-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200/15 bg-emerald-300/10 text-emerald-200">
                  <ActiveIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                  {activeView.platform === "mobile" ? "Mobile app" : "Web platform"}
                </span>
              </div>
              <h3
                className="mt-5 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl"
                aria-live="polite"
              >
                {activeView.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                {activeView.description}
              </p>
              <p className="mt-6 border-t border-border/70 pt-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {activeView.platform === "mobile"
                  ? "Android and iOS"
                  : "A branded community website"}
              </p>
            </div>

            <div
              className={`relative overflow-hidden rounded-2xl border border-border/70 ${
                activeView.platform === "mobile"
                  ? "aspect-[3/2] bg-[#08130e]"
                  : "aspect-[1.13/1] bg-[#f7f7fb]"
              }`}
              data-testid={`panel-platform-view-${activeView.id}`}
            >
              {activeView.platform === "mobile" ? (
                <>
                  <img
                    src={appScreensPath}
                    alt={`Real Tribal18 mobile app screens for community, events, golf play and groups; ${activeView.label} is highlighted.`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-[12%] top-[5%] w-[23.2%] rounded-[2rem] border-2 border-emerald-300/90 shadow-[0_0_0_2px_rgba(7,19,15,0.8),0_0_22px_rgba(110,231,183,0.32)] transition-all duration-300"
                    style={{ left: activeView.screenLeft }}
                  />
                </>
              ) : (
                <img
                  src={webPollsPath}
                  alt="Actual York Vibe community website showing its polls page and member voting options."
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              )}
              <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur">
                {activeView.platform === "mobile" ? "App screen" : "Website screen"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}