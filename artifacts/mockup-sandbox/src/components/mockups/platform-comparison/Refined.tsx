import "./_group.css";
import { Check, Minus } from "lucide-react";

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
    tribal: "Connect on web, Android and iOS in one branded golf community",
  },
];

export function Refined() {
  return (
    <main className="min-h-screen bg-[#07130f] text-[#f3f7f3]">
      <section
        className="relative isolate overflow-hidden border-y border-emerald-100/[0.08] bg-[radial-gradient(ellipse_at_4%_10%,rgba(27,104,72,0.22),transparent_38%),linear-gradient(135deg,#0b1813_0%,#07120e_58%,#0b1914_100%)] py-16 sm:py-20 lg:py-24"
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
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.16em] text-[#87c7a0]">
                A better home for your community
              </p>
              <h2
                id="heading-ownership"
                className="text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[3.45rem]"
                data-testid="heading-ownership"
              >
                A home for your golf community.
                <span className="mt-2 block text-[#87c7a0]">Built around your brand.</span>
              </h2>
              <p className="mt-6 max-w-lg text-[15px] leading-[1.8] text-[#aab9b1] sm:text-base">
                Social profiles and feeds can help people discover you, but they are not a dedicated
                space for your members. Tribal18 gives your golf community a branded home, with an
                admin dashboard for your team.
              </p>
              <div className="mt-9 flex items-center gap-3 border-t border-emerald-100/[0.12] pt-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-200/20 bg-emerald-300/[0.08]">
                  <span className="h-2 w-2 rounded-full bg-[#8ed2a7]" />
                </span>
                <span className="text-xs font-medium tracking-wide text-[#cfdbd3]">
                  Your people. Your place. Your game.
                </span>
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-[1.35rem] border border-emerald-100/[0.12] bg-[#0c1a14]/90 shadow-[0_28px_90px_rgba(0,0,0,0.28)]"
              data-testid="list-ownership-benefits"
            >
              <div className="grid grid-cols-[1fr_1fr]">
                <div className="flex min-h-[76px] items-end border-b border-emerald-100/[0.09] bg-[#101d17] px-4 pb-4 pt-5 sm:px-6">
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#87968d]">
                    Traditional social platforms
                  </span>
                </div>
                <div className="relative flex min-h-[76px] items-end border-b border-l border-emerald-100/[0.1] bg-[#173c2b] px-4 pb-4 pt-5 sm:px-6">
                  <span className="absolute left-0 top-0 h-full w-px bg-emerald-200/50" />
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#a7dbb7]">
                    Your Tribal18 community
                  </span>
                </div>

                {comparisonRows.map((row, index) => (
                  <div
                    key={row.social}
                    className="contents"
                    data-testid={`row-ownership-comparison-${index}`}
                  >
                    <div className="flex min-h-[91px] items-start gap-2.5 border-b border-emerald-100/[0.075] px-4 py-5 text-[13px] leading-[1.55] text-[#94a39b] sm:min-h-[88px] sm:gap-3 sm:px-6 sm:text-sm">
                      <Minus
                        className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[#73847a]"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                      <span>{row.social}</span>
                    </div>
                    <div className="relative flex min-h-[91px] items-start gap-2.5 border-b border-l border-emerald-100/[0.075] bg-emerald-300/[0.035] px-4 py-5 text-[13px] font-medium leading-[1.55] text-[#e2eee6] sm:min-h-[88px] sm:gap-3 sm:px-6 sm:text-sm">
                      <span className="absolute bottom-0 left-0 top-0 w-px bg-emerald-200/[0.14]" />
                      <Check
                        className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[#8ed2a7]"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      <span>{row.tribal}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between gap-4 bg-[#12271c] px-4 py-4 sm:px-6">
                <span className="text-[11px] font-medium leading-relaxed text-[#c5d8cb] sm:text-xs">
                  One branded home for members, events and content.
                </span>
                <span className="hidden shrink-0 text-[9px] font-bold uppercase tracking-[0.18em] text-[#86c69e] sm:block">
                  Made for golf
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}