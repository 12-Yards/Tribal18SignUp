import "./_group.css";
import { useState } from "react";
import {
  Activity,
  Award,
  CalendarDays,
  Gift,
  Heart,
  Map,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type PlatformView = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const platformViews: PlatformView[] = [
  { id: "golf", label: "Golf", title: "Help golfers find their next game.", description: "Bring tee-time discovery and golf opportunities into the same community experience.", icon: Map },
  { id: "community", label: "Community", title: "Keep the conversation together.", description: "Give members one place for community updates, stories and conversations around the game.", icon: MessageCircle },
  { id: "events", label: "Events", title: "Make every event easier to join.", description: "Share competition details and event updates where members already connect.", icon: CalendarDays },
  { id: "engagement", label: "Engagement", title: "Give members more ways to take part.", description: "Use polls, quizzes and other interactive features to invite member input.", icon: Activity },
  { id: "earn", label: "Earn", title: "Recognise members who get involved.", description: "Give members ways to earn points and rewards as they take part in their community.", icon: Award },
  { id: "redeem", label: "Redeem", title: "Turn points into rewards.", description: "Make it easy for members to redeem points for rewards and community experiences.", icon: Gift },
  { id: "charity", label: "Charity", title: "Support causes through golf.", description: "Help golf communities raise funds and support charitable causes together.", icon: Heart },
];

export function PlatformShowcaseRefined() {
  const [activeViewId, setActiveViewId] = useState(platformViews[0].id);
  const activeView = platformViews.find((view) => view.id === activeViewId);

  if (!activeView) {
    throw new Error(`Unknown platform showcase view: ${activeViewId}`);
  }

  const ActiveIcon = activeView.icon;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section
        id="platform-preview"
        className="relative overflow-hidden border-y border-border/50 bg-muted/15 py-12 sm:py-20"
        data-testid="section-platform-showcase"
        aria-labelledby="heading-platform-showcase"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
              A closer look at Tribal18
            </p>
            <h2 id="heading-platform-showcase" className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              See your community in action.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore the real Tribal18 mobile app, organised around the features members use.
            </p>
          </header>

          <div className="mx-auto mt-8 max-w-6xl rounded-[1.5rem] border border-emerald-100/[0.1] bg-gradient-to-br from-card via-card to-emerald-950/25 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:mt-10 sm:p-6 lg:mt-12 lg:p-8">
            <div className="lg:hidden">
              <Select value={activeViewId} onValueChange={setActiveViewId}>
                <SelectTrigger
                  aria-label="Choose a feature to preview"
                  className="h-12 rounded-xl border-emerald-100/15 bg-background/60 text-foreground"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-emerald-100/15 bg-[#0b1712] text-foreground">
                  {platformViews.map((view) => (
                    <SelectItem key={view.id} value={view.id}>
                      {view.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="hidden gap-2 overflow-x-auto pb-2 lg:flex" role="group" aria-label="Explore mobile app features">
              {platformViews.map((view, index) => {
                const Icon = view.icon;
                const isActive = activeView.id === view.id;

                return (
                  <button
                    key={view.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveViewId(view.id)}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      isActive
                        ? "border-border/70 bg-emerald-300/15 text-emerald-100"
                        : "border-border/70 bg-background/30 text-muted-foreground hover:border-border hover:text-foreground"
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

            <div className="mt-5 grid gap-6 lg:mt-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-10">
              <div className="px-1 py-1 sm:px-3 sm:py-2 lg:py-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200/15 bg-emerald-300/10 text-emerald-200">
                    <ActiveIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                    {activeView.label}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:mt-5 sm:text-3xl" aria-live="polite">
                  {activeView.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                  {activeView.description}
                </p>
                <p className="mt-5 border-t border-border/70 pt-4 text-xs font-medium text-muted-foreground sm:mt-6">
                  Web, Android and iPhone
                </p>
              </div>

              <div
                className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border/70 bg-[#08130e]"
                data-testid={`panel-platform-view-${activeView.id}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/tribal18-app-screens.png`}
                  alt="Four real Tribal18 mobile app screens: home feed, event details, golf play and communities."
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}