import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoPath from "@assets/tribal8icon_1783436350353.png";
import heroBackgroundPath from "@assets/image_1784735263353.png";
import { Link } from "wouter";
import { useSEO } from "@/lib/seo";
import { 
  Users,
  Calendar, 
  FileText, 
  Award,
  CreditCard,
  Smartphone,
  Globe,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Palette,
  MessageCircle,
  CalendarDays,
  Trophy,
  Store,
  Handshake,
  CircleDollarSign,
  Link2,
  Settings,
  Rocket,
  TrendingUp,
  Layers,
  Heart,
  Building2,
  Briefcase,
  BookOpen
} from "lucide-react";

const heroSlides = [
  {
    label: "OWN",
    titlePrefix: "Your community.",
    titleAccent: "Your platform.",
    titleSuffix: "Your opportunity.",
  },
  {
    label: "CONTROL",
    titlePrefix: "Stop renting your community.",
    titleAccent: "Own it.",
    titleSuffix: "",
  },
  {
    label: "GROW",
    titlePrefix: "Turn your audience into a",
    titleAccent: "thriving community.",
    titleSuffix: "",
  },
];

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full border-b border-white/15 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 gap-4">
        <div className="flex items-center gap-2" data-testid="header-logo">
          <img 
            src={logoPath} 
            alt="Tribal18 Logo" 
            className="h-10 w-10 object-contain"
            data-testid="img-logo"
          />
          <span className="text-xl font-bold text-white" data-testid="text-brand-name">Tribal18</span>
        </div>
        <nav className="hidden md:flex items-center gap-6" data-testid="nav-main">
          <a href="/#features" className="text-sm font-medium text-white/80 hover:text-white px-2 py-1 rounded-md" data-testid="link-features">Features</a>
          <a href="#pricing" className="text-sm font-medium text-white/80 hover:text-white px-2 py-1 rounded-md" data-testid="link-pricing">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button size="sm" asChild data-testid="button-create-account">
            <Link href="/create-account">Go Live Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [rotationPaused, setRotationPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = (event?: MediaQueryListEvent) => {
      setPrefersReducedMotion(event?.matches ?? mediaQuery.matches);
    };
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (rotationPaused || prefersReducedMotion) return;
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, [activeSlide, prefersReducedMotion, rotationPaused]);

  const showSlide = (index: number) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length);
  };

  return (
    <section
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-slate-950 pt-24 pb-16"
      data-testid="section-hero"
      aria-label="Tribal18 featured content"
      aria-roledescription="carousel"
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
        <div className="max-w-3xl space-y-5 sm:space-y-7 md:space-y-9" aria-live={rotationPaused || prefersReducedMotion ? "polite" : "off"}>
            <div
              key={`hero-copy-${activeSlide}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${activeSlide + 1} of ${heroSlides.length}: ${slide.label}`}
              className="space-y-5 sm:space-y-7 md:space-y-9"
              data-testid={`hero-slide-${activeSlide + 1}`}
            >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300" data-testid="text-hero-eyebrow">
              {slide.label}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white" data-testid="heading-hero">
              {slide.titlePrefix}{" "}
              <span className="text-emerald-300">{slide.titleAccent}</span>{" "}
              {slide.titleSuffix}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" variant="outline" asChild className="gap-2 border-white/70 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20" data-testid="button-request-demo">
                <Link href="/contact">
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" asChild className="gap-2 bg-white text-slate-950 hover:bg-white/90" data-testid="button-sign-up">
                <Link href="/create-account">
                  Go Live Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            </div>
            <div className="flex items-center gap-2" aria-label="Carousel controls" data-testid="hero-carousel-controls">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full border-white/40 bg-black/20 p-0 text-white hover:bg-white/15 hover:text-white"
                aria-label="Previous hero slide"
                onClick={() => showSlide(activeSlide - 1)}
                data-testid="button-hero-previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {heroSlides.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  className="flex h-9 items-center justify-center rounded-full px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={`Show slide ${index + 1}: ${item.label}`}
                  aria-pressed={activeSlide === index}
                  onClick={() => showSlide(index)}
                  data-testid={`button-hero-slide-${index + 1}`}
                >
                  <span
                    className={`h-2 rounded-full transition-all ${activeSlide === index ? "w-6 bg-emerald-300" : "w-2 bg-white/50"}`}
                    aria-hidden="true"
                  />
                </button>
              ))}
              {!prefersReducedMotion && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full border-white/40 bg-black/20 p-0 text-white hover:bg-white/15 hover:text-white"
                  aria-label={rotationPaused ? "Resume slide rotation" : "Pause slide rotation"}
                  aria-pressed={rotationPaused}
                  onClick={() => setRotationPaused((paused) => !paused)}
                  data-testid="button-hero-rotation"
                >
                  {rotationPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                </Button>
              )}
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full border-white/40 bg-black/20 p-0 text-white hover:bg-white/15 hover:text-white"
                aria-label="Next hero slide"
                onClick={() => showSlide(activeSlide + 1)}
                data-testid="button-hero-next"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
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
      description: "Private groups · Discussions · Chat",
      colorClass: "bg-emerald-500/10 text-emerald-400",
    },
    {
      icon: FileText,
      title: "Content",
      description: "News · Articles · Video · Social",
      colorClass: "bg-sky-500/10 text-sky-400",
    },
    {
      icon: Calendar,
      title: "Engagement",
      description: "Polls · Quizzes · Competitions · Events",
      colorClass: "bg-violet-500/10 text-violet-400",
    },
    {
      icon: Award,
      title: "Rewards",
      description: "Points · Leaderboards · Rewards · Marketplace",
      colorClass: "bg-amber-500/10 text-amber-400",
    },
    {
      icon: CreditCard,
      title: "Membership",
      description: "Subscriptions · Payments · Memberships",
      colorClass: "bg-orange-500/10 text-orange-400",
    },
    {
      icon: Smartphone,
      title: "Your Platform",
      description: "Android · iOS · Web · Custom URL · Your Branding",
      colorClass: "bg-cyan-500/10 text-cyan-400",
    },
  ];

  return (
    <section id="features" className="relative overflow-hidden bg-muted/20 py-20 lg:py-28" data-testid="section-features">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl" data-testid="heading-features">
            Everything your community needs.
            <span className="mt-1 block text-emerald-400">In one place.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-relaxed md:text-xl" data-testid="text-features-lead">
            Your community shouldn&apos;t be spread across five different platforms.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg" data-testid="text-features-description">
            Tribal18 brings your community, content, events, engagement, rewards and membership into one branded platform—giving your members one place to connect and giving you one place to manage it.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl rounded-3xl border border-border/60 bg-card/50 p-3 shadow-xl shadow-black/5 sm:p-5 md:mt-16 md:p-7">
          <div className="mb-5 flex items-center justify-center">
            <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-emerald-400">
              ONE BRANDED PLATFORM
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {features.map((feature, i) => (
            <Card key={feature.title} className="h-full border-border/60 bg-background/75 transition-colors hover:border-emerald-500/40 hover:bg-background" data-testid={`card-feature-${i}`}>
              <CardContent className="flex h-full min-h-32 items-start gap-4 p-5 sm:p-6">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${feature.colorClass}`}>
                  <feature.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em]" data-testid={`heading-feature-${i}`}>{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground" data-testid={`text-feature-${i}`}>{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
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
      tribal: "A branded home built around your community",
    },
    {
      social: "Platform rules and algorithms shape the experience",
      tribal: "Custom URL and access on Android, iOS and web",
    },
    {
      social: "Community activity spread across separate channels",
      tribal: "Community, content, events and membership together",
    },
  ];

  return (
    <section
      className="relative overflow-hidden border-y border-border/50 bg-gradient-to-br from-emerald-500/5 via-background to-background py-20 lg:py-28"
      data-testid="section-ownership"
      aria-labelledby="heading-ownership"
    >
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2
              id="heading-ownership"
              className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
              data-testid="heading-ownership"
            >
              Own your community.
              <span className="mt-1 block text-emerald-400">Don&apos;t rent it.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              When your audience lives on third-party social platforms, the rules, reach and experience can change without you. Tribal18 gives your community a home designed around your brand, your members and the way you want to bring people together.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/70 shadow-xl shadow-black/5" data-testid="list-ownership-benefits">
            <div className="grid grid-cols-[1fr_1fr]">
              <div className="border-b border-border/60 bg-muted/50 p-4 sm:p-5">
                <span className="text-xs font-bold uppercase tracking-[0.13em] text-muted-foreground">Traditional social platforms</span>
              </div>
              <div className="border-b border-l border-border/60 bg-emerald-500/10 p-4 sm:p-5">
                <span className="text-xs font-bold uppercase tracking-[0.13em] text-emerald-500">Your Tribal18 community</span>
              </div>
              {comparisonRows.map((row, index) => (
                <div key={row.social} className="contents" data-testid={`row-ownership-comparison-${index}`}>
                  <div className="flex items-start gap-3 border-b border-border/50 p-4 text-sm leading-relaxed text-muted-foreground sm:p-5">
                    <span className="mt-0.5 text-muted-foreground/70" aria-hidden="true">—</span>
                    <span>{row.social}</span>
                  </div>
                  <div className="flex items-start gap-3 border-b border-l border-border/50 bg-emerald-500/[0.03] p-4 text-sm font-medium leading-relaxed sm:p-5">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                    <span>{row.tribal}</span>
                  </div>
                </div>
              ))}
              <div className="col-span-2 bg-emerald-500/[0.06] px-4 py-3 text-center text-sm font-medium text-emerald-500 sm:px-5">
                Your brand. Your URL. Your community.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueSection() {
  const valueFeatures = [
    { icon: Users, title: "Memberships", description: "Bring members into a shared community experience." },
    { icon: CalendarDays, title: "Events", description: "Give people a reason to meet, take part and return." },
    { icon: Trophy, title: "Rewards", description: "Recognise participation with rewards and points." },
    { icon: Store, title: "Marketplace", description: "Connect your community with relevant offers and opportunities." },
    { icon: Handshake, title: "Partners", description: "Build partner relationships into your community experience." },
    { icon: CircleDollarSign, title: "Payments", description: "Support paid memberships and other community payments." },
  ];

  return (
    <section className="py-20 lg:py-28" data-testid="section-value" aria-labelledby="heading-value">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-500">Engagement that adds value</p>
          <h2 id="heading-value" className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl" data-testid="heading-value">
            Turn engagement into value.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Make it easier for members to take part—and create more ways for your community to deliver value.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {valueFeatures.map((feature, index) => (
            <Card key={feature.title} className="h-full border-border/60 bg-card/70 transition-colors hover:border-emerald-500/40" data-testid={`card-value-${index}`}>
              <CardContent className="flex h-full items-start gap-4 p-5 sm:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <feature.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandSection() {
  const brandBenefits = [
    { icon: Link2, title: "Your URL", description: "A custom URL is included with every plan." },
    { icon: Palette, title: "Your branding", description: "Create a community experience that reflects your identity." },
    { icon: Globe, title: "Web access", description: "Members can access Tribal18 on the web." },
    { icon: Smartphone, title: "Android & iOS", description: "Members can also access Tribal18 on Android and iOS." },
    { icon: Users, title: "Your community and data", description: "Build direct relationships with the people who choose to join." },
  ];

  return (
    <section className="overflow-hidden border-y border-border/50 bg-muted/20 py-20 lg:py-28" data-testid="section-brand" aria-labelledby="heading-brand">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-500">A home that feels like yours</p>
            <h2 id="heading-brand" className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl" data-testid="heading-brand">
              Built around your brand.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Every plan includes a custom URL. Members can access Tribal18 on Android, iOS and web, bringing your golf community together across devices.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {brandBenefits.map((benefit, index) => (
                <div className="flex items-start gap-3" key={benefit.title} data-testid={`brand-benefit-${index}`}>
                  <benefit.icon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl" aria-label="Illustration of a branded Tribal18 community on desktop and mobile">
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="relative rounded-2xl border border-border/60 bg-background p-3 shadow-2xl sm:p-4" data-testid="brand-desktop-preview">
              <div className="flex items-center gap-2 border-b border-border/60 px-2 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <div className="ml-3 flex h-7 flex-1 items-center rounded-md bg-muted px-3 text-xs text-muted-foreground">
                  yourcommunity.com
                </div>
              </div>
              <div className="grid min-h-64 grid-cols-[1fr_1.3fr] gap-3 p-3 sm:gap-4 sm:p-5">
                <div className="rounded-xl bg-gradient-to-br from-emerald-800 to-slate-900 p-4 text-white sm:p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
                    <Users className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200">Your community</p>
                  <p className="mt-2 text-xl font-bold">Together, here.</p>
                  <div className="mt-5 h-2 w-4/5 rounded-full bg-white/20" />
                  <div className="mt-2 h-2 w-3/5 rounded-full bg-white/15" />
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl border border-border/60 bg-card p-3 sm:p-4">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-emerald-500/15" />
                      <div className="flex-1">
                        <div className="h-2 w-24 rounded-full bg-foreground/15" />
                        <div className="mt-1.5 h-1.5 w-16 rounded-full bg-muted-foreground/20" />
                      </div>
                    </div>
                    <div className="mt-4 h-2 w-full rounded-full bg-muted-foreground/15" />
                    <div className="mt-2 h-2 w-4/5 rounded-full bg-muted-foreground/10" />
                    <div className="mt-4 flex gap-2">
                      <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-500">Community update</span>
                      <span className="rounded-full bg-muted px-2 py-1 text-[10px] text-muted-foreground">Members</span>
                    </div>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-card p-3 sm:p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <CalendarDays className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                      Upcoming event
                    </div>
                    <div className="mt-3 h-2 w-4/5 rounded-full bg-foreground/15" />
                    <div className="mt-2 h-2 w-1/2 rounded-full bg-muted-foreground/15" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 right-3 w-32 rounded-[1.6rem] border-[5px] border-slate-900 bg-background p-2 shadow-2xl sm:right-0 sm:w-36" data-testid="brand-mobile-preview">
              <div className="mx-auto mb-3 h-1 w-9 rounded-full bg-muted-foreground/30" />
              <div className="rounded-xl bg-emerald-800 p-3 text-white">
                <div className="h-2 w-12 rounded-full bg-white/50" />
                <div className="mt-3 h-2 w-16 rounded-full bg-white/80" />
                <div className="mt-2 h-2 w-10 rounded-full bg-white/50" />
              </div>
              <div className="mt-2 space-y-2 rounded-lg border border-border/60 p-2">
                <div className="h-2 w-full rounded-full bg-muted-foreground/15" />
                <div className="h-2 w-4/5 rounded-full bg-muted-foreground/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudiencesSection() {
  const audiences = [
    { icon: Users, title: "Golf clubs & societies", description: "Bring members together for club updates, events and competitions." },
    { icon: Trophy, title: "Golfers & fan communities", description: "Build stronger connections around clubs, players and the game." },
    { icon: Heart, title: "Charity golf & causes", description: "Bring golf communities together to support charitable causes." },
    { icon: CalendarDays, title: "Golf events & competitions", description: "Create shared experiences that keep players involved." },
    { icon: Briefcase, title: "Golf brands & partners", description: "Connect golf communities with relevant partners and opportunities." },
    { icon: Building2, title: "Golf associations", description: "Keep members and groups connected across the golf community." },
  ];

  return (
    <section className="py-20 lg:py-28" data-testid="section-audiences" aria-labelledby="heading-audiences">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-500">Built around the golf community</p>
          <h2 id="heading-audiences" className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl" data-testid="heading-audiences">
            One platform. Every part of golf.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From clubs and societies to charitable causes and golf events, give members a place to connect and get involved.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <Card key={audience.title} className="h-full border-border/60 bg-card/60" data-testid={`card-audience-${index}`}>
              <CardContent className="flex h-full items-start gap-4 p-5 sm:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <audience.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold">{audience.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{audience.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { icon: Layers, number: "01", title: "Create", description: "Set up the foundations of your community." },
    { icon: Settings, number: "02", title: "Configure", description: "Shape the experience around your brand and needs." },
    { icon: Rocket, number: "03", title: "Launch", description: "Open your community and welcome your members." },
    { icon: TrendingUp, number: "04", title: "Grow", description: "Keep people involved with content, events and more." },
  ];

  return (
    <section className="border-y border-border/50 bg-muted/20 py-20 lg:py-28" data-testid="section-how-it-works" aria-labelledby="heading-how-it-works">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-500">A clear path from idea to launch</p>
          <h2 id="heading-how-it-works" className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl" data-testid="heading-how-it-works">
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
                    <span className="text-sm font-bold tracking-widest text-muted-foreground/60">{step.number}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-emerald-500 lg:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  const capabilities = [
    { icon: Users, title: "Community", description: "Bring members together in one shared space." },
    { icon: BookOpen, title: "Content", description: "Publish updates and useful content for your members." },
    { icon: MessageCircle, title: "Engagement", description: "Use events, competitions, polls and other activities to invite participation." },
    { icon: Award, title: "Rewards", description: "Recognise involvement with points, leaderboards and rewards." },
    { icon: CreditCard, title: "Monetisation", description: "Support memberships and payments as part of your community." },
    { icon: Settings, title: "Administration", description: "Manage community activity from a central platform." },
    { icon: Link2, title: "Integrations", description: "Talk with the Tribal18 team about integration and API options." },
  ];

  return (
    <section className="py-20 lg:py-28" data-testid="section-platform" aria-labelledby="heading-platform">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-500">Everything under one roof</p>
            <h2 id="heading-platform" className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl" data-testid="heading-platform">
              Everything you need to run your community.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Bring the essential parts of your community experience into one branded platform, instead of stitching together disconnected tools.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <Card key={capability.title} className="border-border/60 bg-card/60" data-testid={`card-platform-${index}`}>
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <capability.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{capability.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{capability.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
            Your audience is already there. Give them somewhere to belong.
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Build a community you own, control and grow with Tribal18.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/create-account">
              <Button size="lg" className="gap-2 bg-white text-emerald-700 hover:bg-white/90" data-testid="button-view-platform-home">
                Go Live Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
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

function EngagementSection() {
  return (
    <section className="overflow-hidden border-y border-border/50 bg-muted/20 py-20 lg:py-28" data-testid="section-engagement" aria-labelledby="heading-engagement">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-500">Built for participation</p>
            <h2 id="heading-engagement" className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl" data-testid="heading-engagement">
              Real community.
              <span className="mt-1 block text-emerald-400">Real engagement.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Community is more than a feed. Give people useful reasons to show up, take part and stay connected through conversations, content, events and shared activities.
            </p>
            <ul className="mt-7 space-y-3">
              {["Share updates members care about", "Bring people together around events and activities", "Give members ways to contribute and connect"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border/60 bg-background p-4 shadow-xl shadow-black/5 sm:p-6" data-testid="engagement-product-visual">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-emerald-500">Community home</p>
                <p className="mt-1 text-lg font-bold">What&apos;s happening</p>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <Users className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-border/60 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
                    <FileText className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">A community update</p>
                    <p className="text-xs text-muted-foreground">News and content for members</p>
                  </div>
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-muted-foreground/15" />
                <div className="mt-2 h-2 w-4/5 rounded-full bg-muted-foreground/10" />
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />Conversation</span>
                  <span className="inline-flex items-center gap-1.5"><Award className="h-3.5 w-3.5" aria-hidden="true" />Participation</span>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border/60 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                  <CalendarDays className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">An event to look forward to</p>
                  <p className="mt-1 text-xs text-muted-foreground">Share details and invite members to join in</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GrowthSection() {
  const growthStages = [
    { icon: Rocket, title: "Start", description: "Create a home for your community and bring your first members together." },
    { icon: Users, title: "Grow", description: "Build participation through content, events and community activity." },
    { icon: CircleDollarSign, title: "Monetise", description: "Explore memberships, payments, partners and marketplace opportunities." },
    { icon: TrendingUp, title: "Scale", description: "Develop your community experience as your needs and ambitions evolve." },
  ];

  return (
    <section className="py-20 lg:py-28" data-testid="section-growth" aria-labelledby="heading-growth">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-500">Your community, at every stage</p>
          <h2 id="heading-growth" className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl" data-testid="heading-growth">
            Built to grow.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Start with what your community needs today. Keep building as it grows.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {growthStages.map((stage, index) => (
            <Card key={stage.title} className="relative h-full border-border/60 bg-card/70" data-testid={`card-growth-${index}`}>
              <CardContent className="p-5 sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <stage.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.description}</p>
              </CardContent>
              {index < growthStages.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-emerald-500 lg:block" aria-hidden="true" />
              )}
            </Card>
          ))}
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
            Choose your Plan
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
                <div className="text-sm text-muted-foreground">Forever</div>
              </div>
              <div className="space-y-3 mb-6 flex-1">
                {["Up to 50 members", "Custom URL", "Basic event management", "Community feed", "Content publishing", "Reviews", "Podcasts", "Email support"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" data-testid={`text-starter-feature-${i}`}>
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/create-account" className="mt-auto">
                <Button size="lg" className="w-full whitespace-normal leading-tight" data-testid="button-pricing-go-live-starter">
                  Go Live Now - free forever
                </Button>
              </Link>
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
                <div className="mt-3 rounded-lg bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  Free for the first 30 days
                  <span className="mt-1 block text-xs font-normal">No card details needed to go live</span>
                </div>
              </div>
              <div className="space-y-3 mb-6 flex-1">
                {["Up to 500 members", "Custom URL", "Advanced competitions", "Reciprocal play", "Search and connect with other golfers", "Priority support"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" data-testid={`text-pro-feature-${i}`}>
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/create-account" className="mt-auto">
                <Button size="lg" className="w-full whitespace-normal leading-tight" data-testid="button-pricing-go-live-professional">
                  Go Live Now - free for 30 days
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="hover-elevate h-full" data-testid="card-pricing-enterprise">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-lg mb-2" data-testid="heading-plan-enterprise">Enterprise</h3>
                <div className="text-4xl font-bold mb-1" data-testid="text-price-enterprise">£150<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                <div className="text-sm text-muted-foreground">Billed annually</div>
                <div className="mt-3 rounded-lg bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  Free for the first 30 days
                  <span className="mt-1 block text-xs font-normal">No card details needed to go live</span>
                </div>
              </div>
              <div className="space-y-3 mb-6 flex-1">
                {["Unlimited members", "Custom URL", "White-label branding", "API access", "Dedicated support", "Custom integrations"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" data-testid={`text-enterprise-feature-${i}`}>
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/create-account" className="mt-auto">
                <Button size="lg" className="w-full whitespace-normal leading-tight" data-testid="button-pricing-go-live-enterprise">
                  Go Live Now - free for 30 days
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "What is Tribal18?",
      answer: "Tribal18 is a community platform that brings your members, content, events, engagement and membership tools together in one branded place.",
    },
    {
      question: "Do I need a technical team to get started?",
      answer: "No technical team is required. The process is designed to take you through creating, configuring and launching your community.",
    },
    {
      question: "Does every plan include a custom URL, and where is Tribal18 available?",
      answer: "Yes. Every plan includes a custom URL, and Tribal18 is available on Android, iOS and web.",
    },
    {
      question: "What can members do in my community?",
      answer: "Members can connect with your community, access content, take part in events and activities, and engage with the features you make available.",
    },
    {
      question: "Can I monetise my community?",
      answer: "Tribal18 includes tools for memberships and payments, as well as marketplace and partner opportunities. The right setup depends on your community.",
    },
    {
      question: "Is Tribal18 only for golf communities?",
      answer: "Tribal18 is golf-focused, built for clubs, societies and the wider golf community. Its community and event tools can also help golf organisations support charitable causes.",
    },
    {
      question: "What do the plans cost?",
      answer: "Starter is free forever. Professional and Enterprise plans are paid plans with the first 30 days free. See the pricing cards for billing details and included features.",
    },
    {
      question: "Can I connect other tools or use the API?",
      answer: "Integration and API options are available through the Tribal18 team. Contact us to discuss what your community needs.",
    },
  ];

  return (
    <section className="border-y border-border/50 bg-muted/20 py-20 lg:py-28" data-testid="section-faq" aria-labelledby="heading-faq">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-500">Good questions</p>
            <h2 id="heading-faq" className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl" data-testid="heading-faq">
              Frequently asked questions.
            </h2>
          </div>
          <Accordion type="single" collapsible className="mt-10 rounded-2xl border border-border/60 bg-background px-5 sm:px-7" data-testid="accordion-faq">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} data-testid={`faq-item-${index}`}>
                <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Have another question?{" "}
            <Link href="/contact" className="font-semibold text-emerald-500 underline-offset-4 hover:underline">Talk to our team</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [showApiPopup, setShowApiPopup] = useState(false);

  return (
    <>
      <footer className="border-t bg-muted/30 py-12" data-testid="section-footer">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4" data-testid="footer-logo">
                <img src={logoPath} alt="Tribal18 Logo" className="h-10 w-10 object-contain" />
                <span className="text-xl font-bold">Tribal18</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-md leading-relaxed" data-testid="text-footer-description">
                Tribal18 is a golf-focused community platform helping clubs and societies connect members, manage events and competitions, enable reciprocal play, and bring golf communities together to support charitable causes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" data-testid="heading-footer-product">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded inline-block" data-testid="link-footer-features">Features</a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded inline-block" data-testid="link-footer-pricing">Pricing</a>
                </li>
                <li>
                  <button onClick={() => setShowApiPopup(true)} className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded inline-block text-left" data-testid="link-footer-integrations">Integrations</button>
                </li>
                <li>
                  <button onClick={() => setShowApiPopup(true)} className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded inline-block text-left" data-testid="link-footer-api">API</button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" data-testid="heading-footer-company">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded inline-block" data-testid="link-footer-contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {new Date().getFullYear()} Tribal18. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded" data-testid="link-privacy">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded" data-testid="link-terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>

      {showApiPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowApiPopup(false)} data-testid="popup-api-overlay">
          <div className="bg-card border rounded-xl shadow-xl max-w-md w-full mx-4 p-6" onClick={(e) => e.stopPropagation()} data-testid="popup-api">
            <h3 className="text-lg font-bold mb-3" data-testid="heading-api-popup">Integrations & API</h3>
            <p className="text-muted-foreground mb-4" data-testid="text-api-popup">
              Contact our team for access to our integration tools and API.
            </p>
            <div className="flex gap-3">
              <Link href="/contact">
                <Button data-testid="button-api-contact">Contact Us</Button>
              </Link>
              <Button variant="outline" onClick={() => setShowApiPopup(false)} data-testid="button-api-close">Close</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  useSEO({ path: "/" });
  return (
    <div className="min-h-screen" data-testid="page-home">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <OwnershipSection />
        <ValueSection />
        <BrandSection />
        <AudiencesSection />
        <HowItWorksSection />
        <PlatformSection />
        <EngagementSection />
        <GrowthSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
