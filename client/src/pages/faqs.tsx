import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { useSEO } from "@/lib/seo";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { PlatformNamesText } from "@/components/platform-names-text";
import { faqData } from "@shared/faq-data";

export default function FAQsPage() {
  useSEO({
    title: "Frequently Asked Questions | Tribal18",
    description:
      "Find answers about Tribal18's golf community platform, including setup, membership, pricing, mobile apps, events and integrations.",
    path: "/faqs",
    image: "/og/faqs.jpg",
  });

  return (
    <div className="flex min-h-screen flex-col" data-testid="page-faqs">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <section
          className="border-y border-border/50 bg-muted/20 py-16 lg:py-24"
          data-testid="section-faq"
          aria-labelledby="heading-faq"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-eyebrow">
                Good questions
              </p>
              <h1
                id="heading-faq"
                className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                data-testid="heading-faq"
              >
                Frequently asked questions.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Answers about getting started, running your community and making the most of
                Tribal18.
              </p>
            </div>
            <Accordion
              type="single"
              collapsible
              className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border/60 bg-background px-5 sm:px-7"
              data-testid="accordion-faq"
            >
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    forceMount
                    className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    <PlatformNamesText text={faq.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Have another question?{" "}
              <Link
                href="/contact"
                className="font-semibold text-emerald-500 underline-offset-4 hover:underline"
              >
                Talk to our team
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}