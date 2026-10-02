import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/tribal8icon_1783436350353.png";
import { Link } from "wouter";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full border-b border-white/15 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-2" data-testid="header-logo">
          <img
            src={logoPath}
            alt="Tribal18 Logo"
            className="h-10 w-10 object-contain"
            data-testid="img-logo"
          />
          <span className="text-xl font-bold text-white" data-testid="text-brand-name">
            Tribal18
          </span>
        </div>
        <nav className="hidden items-center gap-6 md:flex" data-testid="nav-main">
          <a
            href="/#features"
            className="rounded-md px-2 py-1 text-sm font-medium text-white/80 hover:text-white"
            data-testid="link-features"
          >
            Features
          </a>
          <a
            href="/#pricing"
            className="rounded-md px-2 py-1 text-sm font-medium text-white/80 hover:text-white"
            data-testid="link-pricing"
          >
            Pricing
          </a>
          <Link
            href="/faqs"
            className="rounded-md px-2 py-1 text-sm font-medium text-white/80 hover:text-white"
            data-testid="link-faqs"
          >
            FAQs
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/faqs"
            className="rounded-md px-1 py-1 text-sm font-medium text-white/80 hover:text-white md:hidden"
            data-testid="link-faqs-mobile"
          >
            FAQs
          </Link>
          <Button size="sm" asChild data-testid="button-create-account">
            <Link href="/create-account">Go Live Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const [showApiPopup, setShowApiPopup] = useState(false);

  return (
    <>
      <footer className="border-t bg-muted/30 py-12" data-testid="section-footer">
        <div className="container mx-auto px-4">
          <div className="mb-8 grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center gap-2" data-testid="footer-logo">
                <img src={logoPath} alt="Tribal18 Logo" className="h-10 w-10 object-contain" />
                <span className="text-xl font-bold">Tribal18</span>
              </div>
              <p
                className="max-w-md text-sm leading-relaxed text-muted-foreground"
                data-testid="text-footer-description"
              >
                Tribal18 is a golf-focused community platform helping clubs and societies connect
                members, manage events and competitions, enable reciprocal play, and bring golf
                communities together to support charitable causes.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold" data-testid="heading-footer-product">
                Product
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/#features"
                    className="inline-block rounded px-1 py-0.5 text-sm text-muted-foreground hover-elevate"
                    data-testid="link-footer-features"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/#pricing"
                    className="inline-block rounded px-1 py-0.5 text-sm text-muted-foreground hover-elevate"
                    data-testid="link-footer-pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="inline-block rounded px-1 py-0.5 text-sm text-muted-foreground hover-elevate"
                    data-testid="link-footer-faqs"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setShowApiPopup(true)}
                    className="inline-block rounded px-1 py-0.5 text-left text-sm text-muted-foreground hover-elevate"
                    data-testid="link-footer-integrations"
                  >
                    Integrations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowApiPopup(true)}
                    className="inline-block rounded px-1 py-0.5 text-left text-sm text-muted-foreground hover-elevate"
                    data-testid="link-footer-api"
                  >
                    API
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold" data-testid="heading-footer-company">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="inline-block rounded px-1 py-0.5 text-sm text-muted-foreground hover-elevate"
                    data-testid="link-footer-contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {new Date().getFullYear()} Tribal18. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="rounded px-1 py-0.5 text-sm text-muted-foreground hover-elevate"
                data-testid="link-privacy"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="rounded px-1 py-0.5 text-sm text-muted-foreground hover-elevate"
                data-testid="link-terms"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {showApiPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowApiPopup(false)}
          data-testid="popup-api-overlay"
        >
          <div
            className="mx-4 w-full max-w-md rounded-xl border bg-card p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            data-testid="popup-api"
          >
            <h3 className="mb-3 text-lg font-bold" data-testid="heading-api-popup">
              Integrations &amp; API
            </h3>
            <p className="mb-4 text-muted-foreground" data-testid="text-api-popup">
              Contact our team for access to our integration tools and API.
            </p>
            <div className="flex gap-3">
              <Link href="/contact">
                <Button data-testid="button-api-contact">Contact Us</Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => setShowApiPopup(false)}
                data-testid="button-api-close"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}