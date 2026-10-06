import "./_group.css";
import { useState } from "react";
import { ArrowDownRight, ArrowRight, Check, Flag, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const logoPath = "/__mockup/images/tribal18-logo.png";

const communityTypes = ["Golf clubs", "Societies", "Events", "Golf businesses"];

export function Branded() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [organisation, setOrganisation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 420));
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <main
      className="relative isolate min-h-[100dvh] overflow-hidden bg-[#0d1b14] text-[#f4f0e6]"
      data-testid="page-contact"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,214,188,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(184,214,188,.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(105deg, black, transparent 78%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-64 -z-10 h-[43rem] w-[43rem] rounded-full border border-[#d4e8d2]/[0.09]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-44 -z-10 h-[32rem] w-[32rem] rounded-full border border-[#d4e8d2]/[0.08]"
      />

      <header className="relative z-10 border-b border-white/[0.12] bg-[#0b1711]/75 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8">
          <a href="/#home-top" aria-label="Tribal18 home" className="flex items-center gap-3" data-testid="link-home">
            <img src={logoPath} alt="Tribal18" className="h-11 w-11 rounded-full object-cover" />
            <span className="text-[19px] font-extrabold tracking-[-0.04em] text-[#f5f0e6]">Tribal18</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <a href="/" className="text-sm font-medium text-white/65 transition-colors hover:text-white">Home</a>
            <a href="/#pricing" className="text-sm font-medium text-white/65 transition-colors hover:text-white">Pricing</a>
            <a href="/faqs" className="text-sm font-medium text-white/65 transition-colors hover:text-white">FAQ&apos;s</a>
          </nav>
          <a
            href="#contact-form"
            className="hidden items-center gap-2 rounded-full border border-[#b9d8bd]/30 px-4 py-2 text-xs font-semibold tracking-wide text-[#cce8d1] transition-colors hover:bg-[#b9d8bd]/10 sm:flex"
          >
            Start a conversation <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a href="#contact-form" aria-label="Jump to contact form" className="rounded-full p-2 text-[#d4e8d2] sm:hidden">
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:py-[5.5rem]">
        <section className="relative flex flex-col justify-center lg:min-h-[620px]">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-[#a9d4b4]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b4d8bd]">For the people behind the game</p>
          </div>
          <h1
            className="max-w-[640px] text-[clamp(3.35rem,7vw,6.35rem)] font-bold leading-[0.91] tracking-[-0.075em] text-[#f4f0e6]"
            data-testid="heading-contact"
          >
            Let&apos;s bring
            <span className="block text-[#a8d6b4]">your people</span>
            <span className="block">together.</span>
          </h1>
          <p className="mt-7 max-w-[490px] text-[15px] leading-[1.85] text-[#d4ded4]/75 sm:text-base">
            Tell us a little about your golf community. We&apos;re here to talk through what a branded home could look like for your club, society, event or business.
          </p>

          <div className="mt-9 flex max-w-[520px] flex-wrap gap-2">
            {communityTypes.map((type, index) => (
              <span
                key={type}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-semibold tracking-wide ${
                  index === 0
                    ? "border-[#b6d9bc]/25 bg-[#b6d9bc]/[0.08] text-[#c6e2cb]"
                    : "border-white/[0.12] bg-white/[0.025] text-white/65"
                }`}
              >
                {index === 0 && <Flag className="h-3 w-3" aria-hidden="true" />}
                {type}
              </span>
            ))}
          </div>

          <div className="mt-12 hidden items-center gap-4 border-t border-white/[0.12] pt-5 sm:flex lg:mt-16">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#caddc7]/20 bg-[#caddc7]/[0.07] text-[#b9dbbf]">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">A home for your community</p>
              <p className="mt-1 text-xs font-medium text-[#d5e2d6]/85">Your people. Your place. Your game.</p>
            </div>
              <ArrowDownRight className="ml-auto h-5 w-5 text-[#a9d4b4]" />
          </div>
          <span className="pointer-events-none absolute bottom-[-6rem] right-0 hidden select-none font-['Montserrat'] text-[15rem] font-black leading-none tracking-[-0.12em] text-white/[0.018] lg:block" aria-hidden="true">
            18
          </span>
        </section>

        <section id="contact-form" className="relative scroll-mt-6">
          <div className="absolute -inset-3 rounded-[2rem] border border-[#b8d9be]/[0.09] sm:-inset-4" aria-hidden="true" />
          <Card className="relative overflow-hidden rounded-[1.45rem] border border-[#d9e5d4]/[0.12] bg-[#14251b] text-[#f4f0e6] shadow-[0_28px_90px_rgba(0,0,0,0.3)]">
            <div className="h-1 w-full bg-gradient-to-r from-[#739d75] via-[#a9d4b4] to-[#739d75]" />
            <CardContent className="p-5 sm:p-8 lg:p-9">
              {submitted ? (
                <div className="flex min-h-[540px] flex-col items-center justify-center py-10 text-center" data-testid="text-submitted">
                  <div className="mb-7 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#a9d4b4]/30 bg-[#a9d4b4]/[0.1] text-[#a9d4b4]">
                    <Check className="h-8 w-8" strokeWidth={1.8} />
                  </div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#a9d4b4]">Message received</p>
                  <h2 className="text-4xl font-bold tracking-[-0.055em] text-[#f4f0e6]">Thank you.</h2>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-[#c4d0c5]/75">
                    We&apos;ve received your message and will be in touch shortly.
                  </p>
                  <a href="/" className="mt-8">
                    <Button variant="outline" className="rounded-full border-[#caddc7]/25 bg-transparent px-6 text-[#e6eee4] hover:bg-white/[0.07]" data-testid="button-back-home">
                      Back to Home <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              ) : (
                <>
                  <div className="mb-7 flex items-start justify-between gap-4 sm:mb-8">
                    <div>
                      <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#a9d4b4]">Talk to our team</p>
                      <h2 className="text-[1.8rem] font-bold leading-tight tracking-[-0.05em] text-[#f4f0e6] sm:text-[2rem]">Start here.</h2>
                      <p className="mt-2 text-[13px] leading-6 text-[#c4d0c5]/65">Share a few details and we&apos;ll take it from there.</p>
                    </div>
                    <span className="hidden shrink-0 rounded-full border border-white/[0.12] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white/45 sm:inline-flex">
                      Contact
                    </span>
                  </div>

                  <form className="space-y-[17px]" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="organisation" className="text-[11px] font-semibold text-[#dce5dc]/85">Organisation <span className="font-normal text-white/40">· optional</span></Label>
                      <Input
                        id="organisation"
                        type="text"
                        placeholder="Club, society or business"
                        value={organisation}
                        onChange={(event) => setOrganisation(event.target.value)}
                        data-testid="input-organisation"
                        className="h-12 rounded-lg border-[#dce5dc]/[0.14] bg-[#0e1c14]/65 px-4 text-sm text-[#f4f0e6] placeholder:text-[#c5d1c5]/35 focus-visible:border-[#a9d4b4]/55 focus-visible:ring-[#a9d4b4]/20"
                      />
                    </div>
                    <div className="grid gap-[17px] sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[11px] font-semibold text-[#dce5dc]/85">Name <span className="text-[#a9d4b4]">*</span></Label>
                        <Input
                          id="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Your name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          required
                          data-testid="input-name"
                          className="h-12 rounded-lg border-[#dce5dc]/[0.14] bg-[#0e1c14]/65 px-4 text-sm text-[#f4f0e6] placeholder:text-[#c5d1c5]/35 focus-visible:border-[#a9d4b4]/55 focus-visible:ring-[#a9d4b4]/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[11px] font-semibold text-[#dce5dc]/85">Email <span className="text-[#a9d4b4]">*</span></Label>
                        <Input
                          id="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                          data-testid="input-email"
                          className="h-12 rounded-lg border-[#dce5dc]/[0.14] bg-[#0e1c14]/65 px-4 text-sm text-[#f4f0e6] placeholder:text-[#c5d1c5]/35 focus-visible:border-[#a9d4b4]/55 focus-visible:ring-[#a9d4b4]/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="text-[11px] font-semibold text-[#dce5dc]/85">Mobile <span className="font-normal text-white/40">· optional</span></Label>
                      <Input
                        id="mobile"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Your number"
                        value={mobile}
                        onChange={(event) => setMobile(event.target.value)}
                        data-testid="input-mobile"
                        className="h-12 rounded-lg border-[#dce5dc]/[0.14] bg-[#0e1c14]/65 px-4 text-sm text-[#f4f0e6] placeholder:text-[#c5d1c5]/35 focus-visible:border-[#a9d4b4]/55 focus-visible:ring-[#a9d4b4]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes" className="text-[11px] font-semibold text-[#dce5dc]/85">Notes <span className="font-normal text-white/40">· optional</span></Label>
                      <Textarea
                        id="notes"
                        placeholder="What would you like to talk about?"
                        className="min-h-[104px] resize-y rounded-lg border-[#dce5dc]/[0.14] bg-[#0e1c14]/65 px-4 py-3 text-sm text-[#f4f0e6] placeholder:text-[#c5d1c5]/35 focus-visible:border-[#a9d4b4]/55 focus-visible:ring-[#a9d4b4]/20"
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                        data-testid="input-notes"
                      />
                    </div>
                    <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                      <Button
                        type="submit"
                        className="h-12 w-full rounded-lg bg-[#b3d9bc] text-[13px] font-bold text-[#102218] hover:bg-[#c4e5cb] sm:flex-1"
                        disabled={submitting}
                        data-testid="button-contact-submit"
                      >
                        {submitting ? "Sending..." : "Send your message"}
                        {!submitting && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                      <a href="/" className="text-center text-[11px] font-semibold text-white/45 transition-colors hover:text-white/80 sm:px-4" data-testid="button-back">
                        Back
                      </a>
                    </div>
                    <p className="pt-1 text-center text-[10px] leading-5 text-white/35">
                      Fields marked <span className="text-[#a9d4b4]">*</span> are required.
                    </p>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
          <p className="mt-5 text-center text-[9px] font-semibold uppercase tracking-[0.19em] text-white/35 sm:text-right">
            A space for golf communities to belong
          </p>
        </section>
      </div>
    </main>
  );
}
