import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { useSEO } from "@/lib/seo";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const faqs = [
  {
    question: "What is Tribal18?",
    answer:
      "Tribal18 is a community platform that brings your members, content, events, engagement and membership tools together in one branded place.",
  },
  {
    question: "Do I need a technical team to get started?",
    answer:
      "No technical team is required. The process is designed to take you through creating, configuring and launching your community.",
  },
  {
    question: "Does every plan include a custom URL, and where is Tribal18 available?",
    answer:
      "Yes. Every plan includes a custom URL, and Tribal18 is available on Android, iOS and web.",
  },
  {
    question: "What can members do in my community?",
    answer:
      "Members can connect with your community, access content, take part in events and activities, and engage with the features you make available.",
  },
  {
    question: "Can I monetise my community?",
    answer:
      "Tribal18 includes tools for memberships and payments, as well as marketplace and partner opportunities. The right setup depends on your community.",
  },
  {
    question: "Is Tribal18 only for golf communities?",
    answer:
      "Tribal18 is golf-focused, built for clubs, societies and the wider golf community. Its community and event tools can also help golf organisations support charitable causes.",
  },
  {
    question: "What do the plans cost?",
    answer:
      "Starter is free forever. Professional is £49 per month, billed monthly after the first 30 days free. Enterprise is £150 per month equivalent (£1,800 per year, billed annually) after the first 30 days free. No card details are needed to go live.",
  },
  {
    question: "Can I connect other tools or use the API?",
    answer:
      "Integration and API options are available through the Tribal18 team. Contact us to discuss what your community needs.",
  },
];

export default function FAQsPage() {
  useSEO({
    title: "Frequently Asked Questions | Tribal18",
    description:
      "Find answers about Tribal18's golf community platform, including setup, membership, pricing, mobile apps, events and integrations.",
    path: "/faqs",
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
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  data-testid={`faq-item-${index}`}
                >
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