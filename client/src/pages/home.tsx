import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ComingSoonDialog } from "@/components/coming-soon-dialog";
import heroBackgroundPath from "@assets/image_1784735263353.png";
import { Link } from "wouter";
import { useSEO } from "@/lib/seo";
import { 
  Apple,
  Check,
  Users,
  Calendar, 
  FileText, 
  Award,
  CreditCard,
  Smartphone,
  Play,
  CheckCircle,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Trophy,
  Settings,
  Rocket,
  Layers,
  TrendingUp,
  Heart,
  Minus,
  Building2,
  Briefcase
} from "lucide-react";
import { HomeProofSection } from "@/components/home-proof-section";
import { PlatformShowcaseSection } from "@/components/platform-showcase-section";
import { PlatformNamesText } from "@/components/platform-names-text";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

function HeroSection() {
  return (
    <section
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-slate-950 pt-24 pb-16"
      data-testid="section-hero"
      aria-labelledby="heading-hero"
    >
      <img
        src={heroBackgroundPath}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        data-testid="img-hero-background"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,10,7,0.94)_0%,rgba(3,10,7,0.78)_42%,rgba(3,10,7,0.24)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/15" />
      <div className="container mx-auto flex w-full items-center px-6">
        <div className="max-w-3xl space-y-5 sm:space-y-7 md:space-y-9">
          <div className="space-y-5 sm:space-y-7 md:space-y-9">
            <p className="section-eyebrow" data-testid="text-hero-eyebrow">
              For golf clubs, societies and events
            </p>
            <h1 id="heading-hero" className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl" data-testid="heading-hero">
              Bring your <span className="text-emerald-300">golf community</span> together.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              <PlatformNamesText text="Golf club and society management software for members, content and events, with your own brand, custom URL, and access on Web, Android and iPhone." />
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <ComingSoonDialog>
                <Button size="lg" className="gap-2 bg-white text-slate-950 hover:bg-white/90" data-testid="button-go-live-hero">
                  Go Live Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </ComingSoonDialog>
              <ComingSoonDialog>
                <Button size="lg" variant="outline" className="gap-2 border-white/70 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20" data-testid="button-request-demo">
                  View Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </ComingSoonDialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Community",
      description: "Private groups · Discussions · Chat · Social",
      colorClass: "bg-emerald-500/10 text-emerald-400",
    },
    {
      icon: FileText,
      title: "Content",
      description: "News · Articles · Video · Podcasts · Events · Competitions",
      colorClass: "bg-sky-500/10 text-sky-400",
    },
    {
      icon: Calendar,
      title: "Engagement",
      description: "Polls · Quizzes · Leaderboards · Petitions · Surveys · Auctions",
      colorClass: "bg-violet-500/10 text-violet-400",
    },
    {
      icon: Award,
      title: "Rewards",
      description: "Earn · Redeem · Marketplace · Donate",
      colorClass: "bg-amber-500/10 text-amber-400",
    },
    {
      icon: CreditCard,
      title: "Membership",
      description: "Subscriptions · Payments · Memberships · Integrations",
      colorClass: "bg-orange-500/10 text-orange-400",
    },
    {
      icon: Smartphone,
      title: "Your Platform",
      description: "Android · iPhone · Web · Custom URL · Your Branding",
      colorClass: "bg-cyan-500/10 text-cyan-400",
    },
  ];

  const communityFeature = features[0];
  const supportingFeatures = features.slice(1, 5);
  const platformFeature = features[5];

  return (
    <section id="features" className="relative overflow-hidden bg-muted/20 py-20 lg:py-28" data-testid="section-features">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-6 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="section-eyebrow mb-4">
              The Tribal18 platform
            </p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl" data-testid="heading-features">
              Everything your community needs.
              <span className="mt-1 block text-emerald-400">In one place.</span>
            </h2>
          </div>
          <div className="max-w-xl lg:justify-self-end lg:pb-1">
            <p className="text-lg font-semibold leading-relaxed md:text-xl" data-testid="text-features-lead">
              Your community shouldn&apos;t be spread across five different platforms.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg" data-testid="text-features-description">
              Tribal18 brings your community, content, events, engagement, rewards and membership into one branded platform—giving your members one place to connect and giving you one place to manage it.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-x-8 gap-y-8 md:mt-16 lg:grid-cols-12 lg:items-stretch">
          <article
            className="relative isolate flex min-h-[19rem] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-emerald-900/20 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 p-7 text-white shadow-xl shadow-emerald-950/10 sm:p-9 lg:col-span-5"
            data-testid="card-feature-0"
          >
            <div className="pointer-events-none absolute -bottom-28 -right-16 -z-10 h-80 w-80 rounded-full border border-white/10" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-16 -right-4 -z-10 h-56 w-56 rounded-full border border-white/10" aria-hidden="true" />
            <div className="flex items-center justify-between gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${communityFeature.colorClass}`}>
                <communityFeature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200/80">
                01 / At the heart of it
              </span>
            </div>
            <div className="relative mt-12 max-w-sm">
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="heading-feature-0">
                {communityFeature.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/75" data-testid="text-feature-0">
                {communityFeature.description}
              </p>
            </div>
          </article>

          <div className="grid gap-x-7 sm:grid-cols-2 lg:col-span-7 lg:gap-x-8">
            {supportingFeatures.map((feature, index) => {
              const featureIndex = index + 1;
              return (
                <article
                  key={feature.title}
                  className={`border-t border-border/70 py-5 sm:py-6 ${index % 2 === 0 ? "sm:pr-3 lg:pr-5" : "sm:pl-3 lg:pl-5"}`}
                  data-testid={`card-feature-${featureIndex}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 w-6 shrink-0 text-xs font-bold tabular-nums text-emerald-500/80">
                      0{featureIndex + 1}
                    </span>
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${feature.colorClass}`}>
                      <feature.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold tracking-tight sm:text-lg" data-testid={`heading-feature-${featureIndex}`}>
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground" data-testid={`text-feature-${featureIndex}`}>
                        <PlatformNamesText text={feature.description} />
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div
            className="flex flex-col gap-5 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.06] px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-7 lg:col-span-12"
            data-testid="card-feature-5"
          >
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${platformFeature.colorClass}`}>
              <platformFeature.icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0 sm:flex-1">
              <h3 className="text-base font-semibold tracking-tight sm:text-lg" data-testid="heading-feature-5">
                {platformFeature.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground" data-testid="text-feature-5">
                <PlatformNamesText text={platformFeature.description} />
              </p>
            </div>
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
              One branded platform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function OwnershipSection() {
  const comparisonRows = [
    {
      social: "A profile and feed inside someone else’s platform",
      tribal: "A branded space designed around your community",
    },
    {
      social: "Your community is tied to a platform profile",
      tribal: "A custom URL is included with every plan",
    },
    {
      social: "Community activity spread across separate channels",
      tribal: "Manage members, content, events and memberships from one admin dashboard",
    },
    {
      social: "Members return to public feeds to find community updates",
      tribal: "Connect on Web, Android and iPhone in one branded golf community",
    },
  ];

  return (
    <section
      className="relative isolate overflow-hidden border-y border-border/50 bg-gradient-to-br from-emerald-500/5 via-background to-background py-16 sm:py-20 lg:py-24"
      data-testid="section-ownership"
      aria-labelledby="heading-ownership"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(181,220,196,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(181,220,196,.09) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(90deg, black, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-48 h-[34rem] w-[34rem] rounded-full border border-emerald-100/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-36 h-[26rem] w-[26rem] rounded-full border border-emerald-100/[0.06]"
      />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-11 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="section-eyebrow mb-6">A better home for your community</p>
            <h2
              id="heading-ownership"
              className="text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[3.45rem]"
              data-testid="heading-ownership"
            >
              A home for your golf community.
              <span className="mt-2 block text-emerald-300">Built around your brand.</span>
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
              Social profiles and feeds can help people discover you, but they are not a dedicated space for your members. Tribal18 gives your golf community a branded home, with an admin dashboard for your team.
            </p>
            <div className="mt-9 flex items-center gap-3 border-t border-emerald-100/[0.12] pt-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-200/20 bg-emerald-300/[0.08]">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
              </span>
              <span className="text-xs font-medium tracking-wide text-foreground/85">
                Your people. Your place. Your game.
              </span>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4" data-testid="list-ownership-benefits">
            <div className="hidden grid-cols-2 gap-3 px-1 text-[11px] font-bold uppercase tracking-[0.16em] sm:grid">
              <span className="text-[#a9d9bb]">Your Tribal18 community</span>
              <span className="text-[#b2c0b7]">Traditional social platforms</span>
            </div>
            {comparisonRows.map((row, index) => (
              <div
                key={row.social}
                className="grid overflow-hidden rounded-[1.15rem] border border-emerald-100/[0.1] bg-[#112017] shadow-[0_12px_34px_rgba(0,0,0,0.16)] sm:grid-cols-2"
                data-testid={`row-ownership-comparison-${index}`}
              >
                <div className="flex items-start gap-3.5 border-b border-emerald-100/[0.08] bg-[#193a2a] px-4 py-4 sm:min-h-[110px] sm:border-b-0 sm:px-5 sm:py-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8ed2a7] text-[#12301f]">
                    <Check className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.13em] text-[#b7e3c4] sm:hidden">
                      Your Tribal18 community
                    </span>
                    <span className="block text-[15px] font-semibold leading-[1.5] text-[#f0f6f1]">
                      <PlatformNamesText text={row.tribal} />
                    </span>
                  </span>
                </div>
                <div className={`flex items-start gap-3.5 px-4 py-4 sm:min-h-[110px] sm:border-l sm:border-emerald-200/15 sm:px-5 sm:py-5 ${index % 2 === 0 ? "bg-[#14221a]" : "bg-[#17271f]"}`}>
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-100/[0.2] bg-emerald-300/[0.06] text-[#a8beb0]">
                    <Minus className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.13em] text-[#b2c0b7] sm:hidden">
                      Traditional social platforms
                    </span>
                    <span className="block text-[15px] leading-[1.55] text-[#d1dad3]">
                      {row.social}
                    </span>
                  </span>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between gap-4 rounded-xl border border-emerald-100/[0.1] bg-emerald-950/25 px-4 py-4 sm:px-5">
              <span className="text-[11px] font-medium leading-relaxed text-foreground/80 sm:text-xs">
                One branded home for members, events and content.
              </span>
              <span className="hidden shrink-0 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-300 sm:block">
                Made for golf
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudiencesSection() {
  const audienceGroups = [
    {
      number: "01",
      label: "People & places",
      icon: Building2,
      items: [
        { icon: Building2, title: "Golf clubs & societies", description: "Bring members together for club updates, events and competitions." },
        { icon: Users, title: "Golfers & fan communities", description: "Build stronger connections around clubs, players and the game." },
      ],
    },
    {
      number: "02",
      label: "Events & causes",
      icon: CalendarDays,
      items: [
        { icon: CalendarDays, title: "Golf events & competitions", description: "Create shared experiences that keep players involved." },
        { icon: Heart, title: "Charity golf & causes", description: "Bring golf communities together to support charitable causes." },
      ],
    },
    {
      number: "03",
      label: "Businesses & organisations",
      icon: Briefcase,
      items: [
        { icon: Briefcase, title: "Golf brands & partners", description: "Connect golf communities with relevant partners and opportunities." },
        { icon: Trophy, title: "Golf associations", description: "Keep members and groups connected across the golf community." },
      ],
    },
  ];

  return (
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
            <p className="section-eyebrow">Built around the golf community</p>
            <h2
              id="heading-audiences"
              className="mt-5 max-w-[13ch] text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
              data-testid="heading-audiences"
            >
              A golf society platform.
              <span className="mt-1 block text-emerald-300">For every part of the game.</span>
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

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {audienceGroups.map((group) => (
            <Card
              key={group.number}
              className="group relative isolate overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-card via-card to-emerald-950/25 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:shadow-xl hover:shadow-emerald-950/40"
              data-testid={`card-audience-group-${group.number}`}
            >
              <CardContent className="relative flex flex-col overflow-hidden p-5 sm:p-6">
                <div
                  className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-emerald-300/[0.06] blur-3xl transition-colors duration-500 group-hover:bg-emerald-300/[0.12]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300/20 to-emerald-950/60 text-emerald-200 shadow-lg shadow-emerald-950/30 ring-1 ring-emerald-200/20">
                    <group.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-border/70 bg-background/40 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-muted-foreground/70">
                    {group.number}
                  </span>
                </div>
                <p className="section-eyebrow relative mt-5">
                  {group.label}
                </p>
                <div className="relative mt-5 divide-y divide-border/80">
                  {group.items.map((audience) => (
                    <div key={audience.title} className="flex gap-3.5 border-t border-border/80 pt-4 first:border-t-0 first:pt-0">
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
function HowItWorksSection() {
  const steps = [
    { icon: Layers, number: "01", title: "Create", description: "Pick a plan and name your community. You'll have full admin access in minutes." },
    { icon: Settings, number: "02", title: "Configure", description: "Customise, add your content, and switch on the features you need, be fully live in a few hours." },
    { icon: Rocket, number: "03", title: "Launch", description: "Invite your members and go live whenever you're ready." },
    { icon: TrendingUp, number: "04", title: "Grow", description: "Run events and competitions, share news, and connect with other clubs for reciprocal play." },
  ];

  return (
    <section
      className="relative isolate overflow-hidden border-y border-border/50 bg-[radial-gradient(ellipse_at_50%_0%,rgba(43,89,63,0.22),transparent_62%)] py-12 sm:py-20 lg:py-28"
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
          <p className="section-eyebrow inline-flex items-center gap-3">
            <span className="h-px w-7 bg-emerald-300/50" aria-hidden="true" />
            A clear path from idea to launch
            <span className="h-px w-7 bg-emerald-300/50" aria-hidden="true" />
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

        <div className="mx-auto mt-11 hidden max-w-6xl gap-3 sm:grid sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative" data-testid={`step-how-it-works-${index}`}>
              <Card className="group relative h-full overflow-hidden rounded-[1.15rem] border border-emerald-100/[0.11] bg-gradient-to-br from-card via-card to-emerald-950/30 text-foreground shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/55 to-transparent"
                />
                <CardContent className="flex min-h-[176px] flex-col p-5 sm:min-h-[190px] sm:p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[0.85rem] border border-emerald-200/15 bg-emerald-300/[0.12] text-emerald-200 transition-colors duration-300 group-hover:bg-emerald-300/20">
                      <step.icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[0.7rem] font-semibold tracking-[0.16em] text-muted-foreground/80">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[1.08rem] font-semibold tracking-[-0.02em] text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.84rem] leading-[1.65] text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <>
                  <ArrowRight
                    className="absolute -right-[0.7rem] top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-emerald-300 lg:block"
                    aria-hidden="true"
                  />
                  <ArrowDown
                    className="absolute -bottom-[0.68rem] left-1/2 z-10 h-5 w-5 -translate-x-1/2 text-emerald-300 sm:hidden"
                    aria-hidden="true"
                  />
                </>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center sm:mt-11">
          <ComingSoonDialog>
            <Button
              size="lg"
              className="gap-2 bg-white text-emerald-700 hover:bg-white/90"
              data-testid="button-start-community-how-it-works"
            >
              Start your community
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </ComingSoonDialog>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-sky-600 py-16 lg:py-24" data-testid="section-cta">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" data-testid="heading-cta">
            Give your golf community a place to come together.
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Bring members together around content, events and activities in one branded place.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ComingSoonDialog>
              <Button size="lg" className="gap-2 bg-white text-emerald-700 hover:bg-white/90" data-testid="button-view-platform-home">
                Go Live Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </ComingSoonDialog>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" data-testid="button-contact-us-home">
                Talk to our team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="pt-5 lg:pt-7 pb-20 lg:pb-28" data-testid="section-pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-pricing">
            Choose your plan
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-pricing-description">
            Choose the plan that fits your golf community.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="hover-elevate h-full" data-testid="card-pricing-starter">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-lg mb-2" data-testid="heading-plan-starter">Starter</h3>
                <div className="text-4xl font-bold mb-1" data-testid="text-price-starter">Free</div>
              </div>
              <div className="space-y-3 mb-6 flex-1">
                {["Up to 50 members", "Custom URL", "Basic event management", "Community feed", "Content publishing", "Reviews", "Podcasts", "Email support"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" data-testid={`text-starter-feature-${i}`}>
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <ComingSoonDialog>
                <Button
                  size="lg"
                  className="mt-auto h-auto min-h-14 w-full whitespace-normal px-3 py-2.5 leading-tight"
                  data-testid="button-pricing-go-live-starter"
                  aria-label="Go Live Now. Free."
                >
                  <span className="flex flex-col items-center gap-1 text-center">
                    <span className="text-sm font-semibold">Go Live Now</span>
                    <span className="inline-flex items-baseline gap-1.5 text-sm leading-tight">
                      <span className="font-extrabold text-emerald-700">Free</span>
                    </span>
                  </span>
                </Button>
              </ComingSoonDialog>
            </CardContent>
          </Card>
          <Card className="hover-elevate h-full border-emerald-300 dark:border-emerald-700 relative" data-testid="card-pricing-professional">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-emerald-600 dark:bg-emerald-500" data-testid="badge-popular">Most Popular</Badge>
            </div>
            <CardContent className="p-6 h-full flex flex-col">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-lg mb-2" data-testid="heading-plan-professional">Professional</h3>
                <div className="text-4xl font-bold mb-1" data-testid="text-price-professional">£49<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                <div className="text-sm text-muted-foreground">Billed monthly</div>
              </div>
              <div className="space-y-3 mb-6 flex-1">
                {["Up to 500 members", "Custom URL", "Advanced competitions", "Reciprocal play", "Search and connect with other golfers", "Priority support"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" data-testid={`text-pro-feature-${i}`}>
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <ComingSoonDialog>
                <Button
                  size="lg"
                  className="mt-auto h-auto min-h-14 w-full whitespace-normal px-3 py-2.5 leading-tight"
                  data-testid="button-pricing-go-live-professional"
                  aria-label="Go Live Now. Free for 30 days."
                >
                  <span className="flex flex-col items-center gap-1 text-center">
                    <span className="text-sm font-semibold">Go Live Now</span>
                    <span className="inline-flex items-baseline gap-1.5 text-sm leading-tight">
                      <span className="font-extrabold text-emerald-700">Free</span>
                      <span className="font-medium text-primary-foreground/75">for 30 days</span>
                    </span>
                  </span>
                </Button>
              </ComingSoonDialog>
            </CardContent>
          </Card>
          <Card className="hover-elevate h-full" data-testid="card-pricing-enterprise">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-lg mb-2" data-testid="heading-plan-enterprise">Enterprise</h3>
                <div className="text-4xl font-bold mb-1" data-testid="text-price-enterprise">£150<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                <div className="text-sm text-muted-foreground">£1,800 per year, billed annually</div>
              </div>
              <div className="space-y-3 mb-6 flex-1">
                {["Unlimited members", "Custom URL", "White-label branding", "API access", "Dedicated support", "Custom integrations"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" data-testid={`text-enterprise-feature-${i}`}>
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <ComingSoonDialog>
                <Button
                  size="lg"
                  className="mt-auto h-auto min-h-14 w-full whitespace-normal px-3 py-2.5 leading-tight"
                  data-testid="button-pricing-go-live-enterprise"
                  aria-label="Go Live Now. Free for 30 days."
                >
                  <span className="flex flex-col items-center gap-1 text-center">
                    <span className="text-sm font-semibold">Go Live Now</span>
                    <span className="inline-flex items-baseline gap-1.5 text-sm leading-tight">
                      <span className="font-extrabold text-emerald-700">Free</span>
                      <span className="font-medium text-primary-foreground/75">for 30 days</span>
                    </span>
                  </span>
                </Button>
              </ComingSoonDialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function AppDownloadSection() {
  const stores = [
    { name: "App Store", icon: Apple, testId: "badge-app-store" },
    { name: "Google Play", icon: Play, testId: "badge-google-play" },
  ];

  return (
    <section
      id="app-download"
      className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-600 to-sky-600 py-16 sm:py-20"
      data-testid="section-app-download"
      aria-labelledby="heading-app-download"
    >
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2rem] border border-white/20 bg-emerald-950/20 p-6 shadow-2xl shadow-emerald-950/25 backdrop-blur-sm sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:p-12">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-emerald-50">
              <Smartphone className="h-4 w-4" aria-hidden="true" />
              Tribal18 mobile
            </p>
            <h2
              id="heading-app-download"
              className="mt-5 text-4xl font-bold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Your golf community,
              <span className="mt-2 block text-emerald-100">in your pocket.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg lg:mx-0">
              Keep club updates, events and member conversations close on your{" "}
              <strong className="text-white">iPhone</strong> or{" "}
              <strong className="text-white">Android</strong> device.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <ComingSoonDialog>
                <Button
                  size="lg"
                  className="gap-2 bg-white font-semibold text-emerald-950 hover:bg-emerald-50"
                  data-testid="button-start-community-app-cta"
                >
                  Start your community
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </ComingSoonDialog>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-cyan-300/15 blur-3xl"
            />
            <div className="relative rounded-[1.75rem] border border-white/20 bg-emerald-950/65 p-5 shadow-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-300/15 text-emerald-100">
                  <Smartphone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Get the Tribal18 app</p>
                  <p className="mt-0.5 text-xs text-white/60">
                    Coming soon on both stores
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {stores.map(({ name, icon: StoreIcon, testId }) => (
                  <div
                    key={name}
                    className="flex min-h-[4.5rem] items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-left"
                    data-testid={testId}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-slate-950">
                      <StoreIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-100/70">
                        Coming Soon
                      </span>
                      <span className="block text-base font-semibold text-white">
                        {name}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LaunchPartnersSection() {
  return (
    <section
      id="launch-partners"
      className="border-t border-border/50 bg-muted/20 py-10 lg:py-14"
      data-testid="section-launch-partners"
      aria-labelledby="heading-launch-partners"
    >
      <div className="container mx-auto px-4">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="heading-launch-partners"
            className="text-3xl font-bold leading-tight tracking-tight md:text-4xl"
          >
            Launch Partners
          </h2>
        </header>

        <div className="mx-auto mt-6 grid max-w-4xl gap-4 md:grid-cols-2">
          <a
            href="https://www.top100golfcourses.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Top 100 Golf Courses — open website in a new tab"
            className="group flex h-full items-center gap-4 rounded-2xl border border-border/60 bg-gradient-to-br from-card to-emerald-950/25 p-5 text-left shadow-lg transition-colors hover:border-emerald-300/40"
            data-testid="link-launch-partner-top100"
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-inner">
              <img
                src="https://www.top100golfcourses.com/logo.svg"
                alt="Top 100 Golf Courses logo"
                width="26"
                height="44"
                loading="lazy"
                decoding="async"
                className="h-12 w-auto object-contain"
                data-testid="img-launch-partner-top100"
              />
            </span>
            <span className="flex-1">
              <span className="block text-lg font-semibold text-foreground">
                Top 100 Golf Courses
              </span>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm text-emerald-300 group-hover:text-emerald-200">
                top100golfcourses.com
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </span>
          </a>

          <article
            className="flex h-full items-center gap-4 rounded-2xl border border-dashed border-border/70 bg-gradient-to-br from-card/70 to-emerald-950/15 p-5"
            data-testid="card-launch-partner-coming-soon"
            aria-label="Launch partner coming soon"
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-950/30 text-emerald-200">
              <Building2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-semibold text-foreground">Coming Soon</span>
              <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                A new launch partner will be announced here.
              </span>
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useSEO({ path: "/" });
  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (!targetId) return;

    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    });
  }, []);

  return (
    <div id="home-top" className="min-h-screen" data-testid="page-home">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PlatformShowcaseSection />
        <HomeProofSection />
        <AudiencesSection />
        <OwnershipSection />
        <HowItWorksSection />
        <CTASection />
        <PricingSection />
        <LaunchPartnersSection />
        <AppDownloadSection />
      </main>
      <SiteFooter />
    </div>
  );
}
