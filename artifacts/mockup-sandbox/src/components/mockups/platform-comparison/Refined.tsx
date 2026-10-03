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

            <div className="space-y-3 sm:space-y-4" data-testid="list-ownership-benefits">
              <div className="hidden grid-cols-2 gap-3 px-1 text-[11px] font-bold uppercase tracking-[0.16em] sm:grid">
                <span className="text-[#b2c0b7]">Traditional social platforms</span>
                <span className="text-[#a9d9bb]">Your Tribal18 community</span>
              </div>
              {comparisonRows.map((row, index) => (
                <div
                  key={row.social}
                  className="grid overflow-hidden rounded-[1.15rem] border border-emerald-100/[0.1] bg-[#112017] shadow-[0_12px_34px_rgba(0,0,0,0.16)] sm:grid-cols-2"
                  data-testid={`row-ownership-comparison-${index}`}
                >
                  <div className={`flex items-start gap-3.5 border-b border-emerald-100/[0.08] px-4 py-4 sm:min-h-[110px] sm:border-b-0 sm:px-5 sm:py-5 ${index % 2 === 0 ? "bg-[#14221a]" : "bg-[#17271f]"}`}>
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
                  <div className="flex items-start gap-3.5 bg-[#193a2a] px-4 py-4 sm:min-h-[110px] sm:border-l sm:border-emerald-200/15 sm:px-5 sm:py-5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8ed2a7] text-[#12301f]">
                      <Check className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.13em] text-[#b7e3c4] sm:hidden">
                        Your Tribal18 community
                      </span>
                      <span className="block text-[15px] font-semibold leading-[1.5] text-[#f0f6f1]">
                        {row.tribal}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 rounded-xl border border-emerald-100/[0.1] bg-emerald-950/25 px-4 py-4 sm:px-5">
                <span className="text-xs font-medium leading-relaxed text-[#cfddd3] sm:text-[13px]">
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