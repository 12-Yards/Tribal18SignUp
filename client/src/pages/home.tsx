import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logoPath from "@assets/tribal8icon_1783436350353.png";
import heroBackgroundPath from "@assets/image_1784735263353.png";
import { Link } from "wouter";
import { useSEO } from "@/lib/seo";
import { 
  Users, 
  Calendar, 
  MessageCircle, 
  Globe, 
  FileText, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Palette
} from "lucide-react";

const heroSlides = [
  {
    label: "Tribal18 golf community platform",
    titlePrefix: "Built to Help Your",
    titleAccent: "Golf Community",
    titleSuffix: "Flourish",
    description:
      "Bring members together with tools for community, competitions, events, and reciprocal play—all in one platform built for clubs and golf societies.",
  },
  {
    label: "Slide 2 content coming soon",
    titlePrefix: "Slide 2",
    titleAccent: "Content TBC",
    titleSuffix: "",
    description:
      "The final headline and supporting copy for this hero will be added once approved.",
  },
  {
    label: "Slide 3 content coming soon",
    titlePrefix: "Slide 3",
    titleAccent: "Content TBC",
    titleSuffix: "",
    description:
      "The final headline and supporting copy for this hero will be added once approved.",
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
            <Link href="/create-account">Sign Up</Link>
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white" data-testid="heading-hero">
              {slide.titlePrefix}{" "}
              <span className="text-emerald-300">{slide.titleAccent}</span>{" "}
              {slide.titleSuffix}
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed" data-testid="text-hero-description">
              {slide.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" variant="outline" asChild className="gap-2 border-white/70 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20" data-testid="button-request-demo">
                <Link href="/contact">
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" asChild className="gap-2 bg-white text-slate-950 hover:bg-white/90" data-testid="button-sign-up">
                <Link href="/create-account">
                  Sign Up
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
      icon: MessageCircle,
      title: "Member Communication & Social Networking",
      description: "Enable members to connect, message, comment, post, and compete inside a private community network.",
      colorClass: "bg-sky-500/20 text-sky-400",
      slug: "member-communication"
    },
    {
      icon: Users,
      title: "Groups & Communities",
      description: "Create regional groups, interest-based groups, trip groups, and societies so members can easily organise away days, trips, and regular meetups.",
      colorClass: "bg-sky-500/20 text-sky-400",
      slug: "groups-communities"
    },
    {
      icon: Calendar,
      title: "Events & Competition Management",
      description: "Create and manage meet-ups, leagues, knockout tournaments, team competitions, and practice sessions with ease.",
      colorClass: "bg-sky-500/20 text-sky-400",
      slug: "events-competitions"
    },
    {
      icon: Globe,
      title: "Tee Time Offers & Reciprocal Play Requests",
      description: "Allow members to offer availability or request reciprocal access at other clubs and regions. Discover new venues and meet new members effortlessly.",
      colorClass: "bg-sky-500/20 text-sky-400",
      slug: "reciprocal-play"
    },
    {
      icon: FileText,
      title: "Content Publishing & Insights",
      description: "Share news, articles, coaching tips, and community updates. Track engagement and allow members to publish articles or opinion pieces.",
      colorClass: "bg-sky-500/20 text-sky-400",
      slug: "content-publishing"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description: "Monitor member activity, event participation, and community growth with detailed analytics and insights.",
      colorClass: "bg-sky-500/20 text-sky-400",
      slug: "analytics-reporting"
    }
  ];

  return (
    <section id="features" className="pt-10 lg:pt-14 pb-20 lg:pb-28 bg-muted/30" data-testid="section-features">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-emerald-500/10 rounded-2xl blur-3xl"></div>
          <Card className="relative border-0 bg-gradient-to-br from-card/80 to-card shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
                <Palette className="w-4 h-4" />
                Fully Branded &amp; Customisable
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text" data-testid="heading-features">
                Own the Experience. Build the Community.
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6">
                One platform. Every tool your community needs.
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed" data-testid="text-features-description">
                Fully branded, fully customisable and managed by your own administrators, Tribal18 provides all the tools to grow and run your community from a single platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Easy Setup</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>No Technical Skills Required</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Go Live For Free</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-border"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center" data-testid="heading-features-label">Features</h2>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-border"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="bg-sky-500/10 border-sky-500/25 h-full" data-testid={`card-feature-${i}`}>
              <CardContent className="p-6 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center ${feature.colorClass} shadow-sm`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-3" data-testid={`heading-feature-${i}`}>{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1" data-testid={`text-feature-${i}`}>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-600 to-sky-600 relative overflow-hidden" data-testid="section-cta">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" data-testid="heading-cta">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8">
            Join thousands of communities already using Tribal18 to engage their members.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://tribal18.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 bg-white text-emerald-700" data-testid="button-view-platform-home">
                View Platform
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white" data-testid="button-contact-us-home">
                Contact Us
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
            Choose your Plan
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-pricing-description">
            Transparent monthly or annual subscriptions. Start growing your community today.
          </p>
          <p className="text-emerald-500 dark:text-emerald-400 font-medium mt-3" data-testid="text-pricing-free-trial">
            Free for first 30 days, no card details needed to go live.
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
                {["Up to 50 members", "Basic event management", "Community feed", "Content publishing", "Reviews", "Podcasts", "Email support"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" data-testid={`text-starter-feature-${i}`}>
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
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
                {["Up to 500 members", "Advanced competitions", "Reciprocal play", "Search and connect with other golfers", "Priority support"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" data-testid={`text-pro-feature-${i}`}>
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="hover-elevate h-full" data-testid="card-pricing-enterprise">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-lg mb-2" data-testid="heading-plan-enterprise">Enterprise</h3>
                <div className="text-4xl font-bold mb-1" data-testid="text-price-enterprise">£150<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                <div className="text-sm text-muted-foreground">Billed annually</div>
              </div>
              <div className="space-y-3 mb-6 flex-1">
                {["Unlimited members", "White-label branding", "API access", "Dedicated support", "Custom integrations"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" data-testid={`text-enterprise-feature-${i}`}>
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/create-account">
            <Button size="lg" data-testid="button-pricing-go-live">Go Live Now - pay nothing for 30 days</Button>
          </Link>
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
                Tribal18 is a leading community management software platform helping clubs and communities connect members, manage events and competitions, enable reciprocal play, and grow participation.
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
        <CTASection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
