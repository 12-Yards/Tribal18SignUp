import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "wouter";
import logoPath from "@assets/tribal8icon_1783436350353.png";
import { apiRequest } from "@/lib/queryClient";
import { useSEO } from "@/lib/seo";
import { ArrowRight, Building2, CalendarDays, Check, Flag, Users } from "lucide-react";
import { ComingSoonDialog } from "@/components/coming-soon-dialog";

const communityTypes = [
  { label: "Golf clubs & societies", icon: Flag },
  { label: "Events & competitions", icon: CalendarDays },
  { label: "Golf businesses", icon: Building2 },
  { label: "Golf communities", icon: Users },
];

export default function ContactPage() {
  useSEO({ title: "Contact Us | Tribal18", description: "Get in touch with the Tribal18 team to learn how our community management platform can help your golf club, society or community.", path: "/contact", image: "/og/contact.jpg" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [organisation, setOrganisation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await apiRequest("POST", "/api/contacts", {
        organisation,
        name,
        email,
        mobile,
        notes,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to submit contact form:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main
      className="relative isolate min-h-screen overflow-hidden bg-[#08120c] text-[#f4f7f2]"
      data-testid="page-contact"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.17]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,214,188,.075) 1px, transparent 1px), linear-gradient(90deg, rgba(184,214,188,.075) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(105deg, black, transparent 78%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-64 z-0 h-[43rem] w-[43rem] rounded-full border border-emerald-100/[0.08]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-44 z-0 h-[32rem] w-[32rem] rounded-full border border-emerald-100/[0.07]"
      />

      <header className="relative z-10 border-b border-white/[0.1] bg-[#08120c]/80 backdrop-blur-md">
        <div className="container mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <a
            href="/#home-top"
            aria-label="Tribal18 home"
            className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            data-testid="link-home"
          >
            <img src={logoPath} alt="" className="h-10 w-10 object-contain" />
            <span className="text-lg font-bold tracking-tight text-white">Tribal18</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            <a href="/#home-top" className="text-sm font-medium text-white/65 transition-colors hover:text-white">
              Home
            </a>
            <a href="/#pricing" className="text-sm font-medium text-white/65 transition-colors hover:text-white">
              Pricing
            </a>
            <Link href="/faqs" className="text-sm font-medium text-white/65 transition-colors hover:text-white">
              FAQ&apos;s
            </Link>
          </nav>
          <ComingSoonDialog>
            <Button
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200/25 bg-emerald-300/[0.08] px-3.5 py-2 text-xs font-semibold text-emerald-100 transition-colors hover:bg-emerald-300/[0.15] sm:px-4 sm:text-sm"
              data-testid="button-contact-go-live"
            >
              Go Live
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </ComingSoonDialog>
        </div>
      </header>

      <div className="relative z-10 container mx-auto grid w-full max-w-7xl gap-12 px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:py-6">
        <section
          className="relative flex flex-col justify-center lg:min-h-[620px]"
          aria-labelledby="heading-contact"
        >
          <p className="section-eyebrow mb-7 inline-flex items-center gap-3">
            <span className="h-px w-9 bg-emerald-300/80" aria-hidden="true" />
            For golf clubs, societies and events
          </p>
          <h1
            className="max-w-[640px] text-[clamp(3.35rem,7vw,6.1rem)] font-bold leading-[0.91] tracking-[-0.075em] text-[#f4f0e6]"
            data-testid="heading-contact"
          >
            Let&apos;s bring
            <span className="block text-emerald-300">your people</span>
            together.
          </h1>
          <p className="mt-7 max-w-[490px] text-[15px] leading-[1.85] text-[#d4ded4]/80 sm:text-base">
            Tell us about your golf community. Tribal18 gives clubs, societies, events and golf-connected businesses a branded home for their people.
          </p>

          <div className="mt-9 flex max-w-[540px] flex-wrap gap-2">
            {communityTypes.map(({ label, icon: Icon }, index) => (
              <span
                key={label}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-semibold tracking-wide ${
                  index === 0
                    ? "border-emerald-200/25 bg-emerald-300/[0.08] text-emerald-100"
                    : "border-white/[0.12] bg-white/[0.025] text-white/65"
                }`}
              >
                <Icon className="h-3 w-3" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-12 hidden items-center gap-4 border-t border-emerald-100/[0.12] pt-5 sm:flex lg:mt-16">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200/20 bg-emerald-300/[0.08] text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
                A home for your community
              </p>
              <p className="mt-1 text-xs font-medium text-[#d5e2d6]/90">
                Your people. Your place. Your game.
              </p>
            </div>
          </div>
          <span
            className="pointer-events-none absolute bottom-[-6rem] right-0 hidden select-none font-['Montserrat'] text-[15rem] font-black leading-none tracking-[-0.12em] text-white/[0.018] lg:block"
            aria-hidden="true"
          >
            18
          </span>
        </section>

        <section id="contact-form" className="relative scroll-mt-6">
          <div
            className="absolute -inset-3 rounded-[2rem] border border-emerald-100/[0.09] sm:-inset-4"
            aria-hidden="true"
          />
          <Card className="relative overflow-hidden rounded-[1.45rem] border border-emerald-100/[0.12] bg-[#12231a] text-[#f4f0e6] shadow-[0_28px_90px_rgba(0,0,0,0.3)]">
            <div className="h-1 w-full bg-gradient-to-r from-[#739d75] via-[#a9d4b4] to-[#739d75]" />
            <CardContent className="p-5 sm:p-8 lg:p-9">
              {submitted ? (
                <div
                  className="flex min-h-[540px] flex-col items-center justify-center py-10 text-center"
                  data-testid="text-submitted"
                  role="status"
                  aria-live="polite"
                >
                  <div className="mb-7 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-emerald-200/30 bg-emerald-300/[0.1] text-emerald-200">
                    <Check className="h-8 w-8" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-200">
                    Message received
                  </p>
                  <h2 className="text-4xl font-bold tracking-[-0.055em] text-[#f4f0e6]">Thank you.</h2>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-[#c4d0c5]/80">
                    We&apos;ve received your message and will be in touch shortly.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-8 rounded-full border-emerald-200/25 bg-transparent px-6 text-[#e6eee4] hover:bg-white/[0.07]"
                    data-testid="button-back-home"
                  >
                    <Link href="/#home-top">
                      Back to Home <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-7 flex items-start justify-between gap-4 sm:mb-8">
                    <div>
                      <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-emerald-200">
                        Talk to our team
                      </p>
                      <h2 className="text-[1.8rem] font-bold leading-tight tracking-[-0.05em] text-[#f4f0e6] sm:text-[2rem]">
                        Start here.
                      </h2>
                      <p className="mt-2 text-[13px] leading-6 text-[#c4d0c5]/75">
                        Share a few details and we&apos;ll take it from there.
                      </p>
                    </div>
                    <span className="hidden shrink-0 rounded-full border border-white/[0.12] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white/45 sm:inline-flex">
                      Contact
                    </span>
                  </div>

                  <form className="space-y-[17px]" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="organisation" className="text-[11px] font-semibold text-[#dce5dc]/90">
                        Organisation <span className="font-normal text-white/45">· optional</span>
                      </Label>
                      <Input
                        id="organisation"
                        type="text"
                        placeholder="Club, society or business"
                        value={organisation}
                        onChange={(e) => setOrganisation(e.target.value)}
                        data-testid="input-organisation"
                        className="h-12 rounded-lg border-emerald-100/[0.14] bg-[#0b1a11]/70 px-4 text-sm text-[#f4f0e6] placeholder:text-[#c5d1c5]/45 focus-visible:border-emerald-200/60 focus-visible:ring-emerald-200/20"
                      />
                    </div>
                    <div className="grid gap-[17px] sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[11px] font-semibold text-[#dce5dc]/90">
                          Name <span className="text-emerald-200" aria-hidden="true">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          data-testid="input-name"
                          className="h-12 rounded-lg border-emerald-100/[0.14] bg-[#0b1a11]/70 px-4 text-sm text-[#f4f0e6] placeholder:text-[#c5d1c5]/45 focus-visible:border-emerald-200/60 focus-visible:ring-emerald-200/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[11px] font-semibold text-[#dce5dc]/90">
                          Email <span className="text-emerald-200" aria-hidden="true">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          data-testid="input-email"
                          className="h-12 rounded-lg border-emerald-100/[0.14] bg-[#0b1a11]/70 px-4 text-sm text-[#f4f0e6] placeholder:text-[#c5d1c5]/45 focus-visible:border-emerald-200/60 focus-visible:ring-emerald-200/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="text-[11px] font-semibold text-[#dce5dc]/90">
                        Mobile <span className="font-normal text-white/45">· optional</span>
                      </Label>
                      <Input
                        id="mobile"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Your number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        data-testid="input-mobile"
                        className="h-12 rounded-lg border-emerald-100/[0.14] bg-[#0b1a11]/70 px-4 text-sm text-[#f4f0e6] placeholder:text-[#c5d1c5]/45 focus-visible:border-emerald-200/60 focus-visible:ring-emerald-200/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes" className="text-[11px] font-semibold text-[#dce5dc]/90">
                        Notes <span className="font-normal text-white/45">· optional</span>
                      </Label>
                      <Textarea
                        id="notes"
                        placeholder="What would you like to talk about?"
                        className="min-h-[104px] resize-y rounded-lg border-emerald-100/[0.14] bg-[#0b1a11]/70 px-4 py-3 text-sm text-[#f4f0e6] placeholder:text-[#c5d1c5]/45 focus-visible:border-emerald-200/60 focus-visible:ring-emerald-200/20"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        data-testid="input-notes"
                      />
                    </div>
                    <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                      <Button
                        type="submit"
                        className="h-12 w-full rounded-lg bg-emerald-300 text-[13px] font-bold text-[#102218] hover:bg-emerald-200 sm:flex-1"
                        disabled={submitting}
                        data-testid="button-contact-submit"
                      >
                        {submitting ? "Submitting..." : "Send your message"}
                        {!submitting && <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />}
                      </Button>
                      <Link
                        href="/#home-top"
                        className="text-center text-[11px] font-semibold text-white/50 transition-colors hover:text-white/85 sm:px-4"
                        data-testid="button-back"
                      >
                        Back
                      </Link>
                    </div>
                    <p className="pt-1 text-center text-[10px] leading-5 text-white/45">
                      Fields marked <span className="text-emerald-200">*</span> are required.
                    </p>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
          <p className="mt-5 text-center text-[9px] font-semibold uppercase tracking-[0.19em] text-white/40 sm:text-right">
            A space for golf communities to belong
          </p>
        </section>
      </div>
    </main>
  );
}
