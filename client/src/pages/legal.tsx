import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import logoPath from "@assets/tribal8icon_1783436350353.png";
import { useSEO } from "@/lib/seo";

function LegalLayout({ title, updated, children, testId }: { title: string; updated: string; children: React.ReactNode; testId: string }) {
  return (
    <div className="min-h-screen bg-background flex flex-col" data-testid={testId}>
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/#home-top" aria-label="Tribal18 home" className="flex items-center gap-2" data-testid="link-legal-home">
            <img src={logoPath} alt="Tribal18 Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold">Tribal18</span>
          </a>
          <Button variant="ghost" className="gap-2" asChild data-testid="button-legal-back">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2" data-testid="heading-legal-title">{title}</h1>
        <p className="text-sm text-muted-foreground mb-10" data-testid="text-legal-updated">Last updated: {updated}</p>
        <div className="space-y-8 text-muted-foreground leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
          {children}
        </div>
      </main>
    </div>
  );
}

export function PrivacyPage() {
  useSEO({
    title: "Privacy Policy | Tribal18",
    description: "Read the Tribal18 Privacy Policy to learn how we collect, use and protect your personal information.",
    path: "/privacy",
    image: "/og/privacy.jpg",
  });
  return (
    <LegalLayout title="Privacy Policy" updated="17 November 2026" testId="page-privacy">
      <section>
        <h2>1. Who we are</h2>
        <p>
          Tribal18 (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides a community management platform for golf clubs, societies, event organisers and golf communities. Tribal18 is operated by Tribal18 Limited, a UK registered company.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, share and protect your personal information when you use:
        </p>
        <ul>
          <li>our website at tribal18.com; and</li>
          <li>the Tribal18 mobile app on Android and iOS (the &quot;App&quot;), including any club- or society-branded versions of the App powered by Tribal18.</li>
        </ul>
        <p>
          Together these are our &quot;Services&quot;. For data protection purposes, we are the controller of the personal information described in this policy. Where a golf club or society uses Tribal18 to manage its own members, that club or society may also be a controller of its members&apos; information.
        </p>
      </section>
      <section>
        <h2>2. Information we collect</h2>
        <h3 className="text-base font-semibold text-foreground">Information you give us</h3>
        <ul>
          <li>Account details you provide when registering, such as your name, email address, mobile number and organisation, club or society name.</li>
          <li>Profile and membership information, such as your handicap, membership details, and event entries or bookings.</li>
          <li>Contact details you submit through our contact form, such as your name, email address and mobile number.</li>
          <li>Content you post, such as messages, comments and photos shared within your community.</li>
        </ul>
        <h3 className="text-base font-semibold text-foreground">Information collected automatically</h3>
        <ul>
          <li>Location information from your device when you use the App, if you give permission (see Section 3).</li>
          <li>Device and technical information, such as device type, operating system, app version, browser type, IP address and crash logs.</li>
          <li>Usage information, such as pages and screens visited and features used, collected through cookies and similar technologies on our website, and analytics tools in the App.</li>
        </ul>
      </section>
      <section>
        <h2>3. Location information</h2>
        <p><strong className="text-foreground">What we collect.</strong> With your permission, the App collects your device&apos;s approximate location.</p>
        <p><strong className="text-foreground">When we collect it.</strong> We collect location while you are using the App and, if you choose to allow it, in the background when the App is closed or not in use, so that live round tracking and offer alerts continue when your screen is locked. You can turn background location off at any time in your device settings.</p>
        <p><strong className="text-foreground">Why we use it.</strong> We use your location to:</p>
        <ul>
          <li>show golf clubs, courses, societies and events near you;</li>
          <li>let you check in to an event, competition or tee time when you arrive at the club;</li>
          <li>alert you when offers are available nearby; and</li>
          <li>help keep the Services secure and prevent misuse.</li>
        </ul>
        <p><strong className="text-foreground">Your choice.</strong> Location access is optional. The App will ask for your permission before it accesses your location, and you can allow, deny or withdraw permission at any time in your device settings. If you don&apos;t allow location access, you can still use the Services, but location-based features will not work.</p>
        <p><strong className="text-foreground">Sharing.</strong> We do not sell your location information or share it with advertisers. We only share it with service providers that help us provide location features (such as mapping providers, e.g. Google Maps) and our hosting providers, as described in Section 5.</p>
        <p><strong className="text-foreground">Retention.</strong> We do not store your location after it has been used to provide the feature you requested.</p>
      </section>
      <section>
        <h2>4. How we use your information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>create and manage your Tribal18 account and your club or community platform;</li>
          <li>provide the features of the Services, including location-based features;</li>
          <li>manage memberships, events, bookings and reciprocal play;</li>
          <li>respond to enquiries and provide customer support;</li>
          <li>send service updates and, where you agree, marketing communications;</li>
          <li>keep the Services secure and prevent fraud or misuse; and</li>
          <li>improve our website, App and Services.</li>
        </ul>
        <p><strong className="text-foreground">Legal bases (UK/EU users).</strong> We process your information to perform our contract with you (providing the Services), on the basis of our legitimate interests (running, securing and improving the Services), with your consent (location access, marketing and non-essential cookies), and where needed to meet our legal obligations. You can withdraw consent at any time.</p>
      </section>
      <section>
        <h2>5. Sharing your information</h2>
        <p>We do not sell your personal information. We only share it:</p>
        <ul>
          <li>with the club, society or organisation whose community you join on Tribal18, so they can manage membership and events;</li>
          <li>with trusted service providers who help us operate the Services, such as hosting, mapping and location services, analytics, email delivery and payment providers. They may only use your information to provide services to us;</li>
          <li>where required by law, or to protect the rights, safety and security of our users or others; and</li>
          <li>in connection with a merger, acquisition or sale of our business, in which case we will tell you.</li>
        </ul>
        <p>Some of our service providers may process information outside the UK. Where they do, we use appropriate safeguards such as the UK International Data Transfer Agreement or Standard Contractual Clauses.</p>
      </section>
      <section>
        <h2>6. Data retention and security</h2>
        <p>We keep your information only for as long as needed to provide our Services and meet legal obligations. Location data is kept as described in Section 3. When you delete your account, we delete or anonymise your personal information within 30 days, unless we need to keep some of it to meet legal obligations.</p>
        <p>We use appropriate technical and organisational measures to protect your data, including encryption in transit.</p>
      </section>
      <section>
        <h2>7. Your rights</h2>
        <p>You may request access to, correction of, or deletion of your personal information at any time. You may also object to or restrict certain processing, ask for a copy of your data in a portable format, and withdraw consent (for example, by turning off location access in your device settings).</p>
        <p><strong className="text-foreground">Deleting your account.</strong> You can delete your account and associated data in the App under Profile &gt; Delete account or by emailing <a href="mailto:support@tribal18.com" className="text-foreground underline">support@tribal18.com</a>.</p>
        <p>To exercise any of these rights, contact us at <a href="mailto:support@tribal18.com" className="text-foreground underline">support@tribal18.com</a> or via our <Link href="/contact" className="text-foreground underline">contact page</Link>. If you are in the UK and are unhappy with how we handle your information, you have the right to complain to the Information Commissioner&apos;s Office (<a href="https://ico.org.uk/" target="_blank" rel="noreferrer" className="text-foreground underline">ico.org.uk</a>).</p>
      </section>
      <section>
        <h2>8. Children</h2>
        <p>The Services are not intended for children under 13 without the involvement of a parent, guardian or their club. If junior members use the App, explain how their information is managed, e.g. by the club or with parental consent.</p>
      </section>
      <section>
        <h2>9. Cookies</h2>
        <p>We use cookies to keep the website working properly and to understand how it is used. You can control cookies through your browser settings. See our cookie notice shown when you first visit the site.</p>
      </section>
      <section>
        <h2>10. Changes to this policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date, and where the changes are significant we will let you know in the App or by email.</p>
      </section>
      <section>
        <h2>11. Contact us</h2>
        <p>If you have any questions about this Privacy Policy or how we handle your information, contact us at:</p>
        <p>Tribal18 Limited<br />Email: <a href="mailto:support@tribal18.com" className="text-foreground underline">support@tribal18.com</a></p>
      </section>
    </LegalLayout>
  );
}

export function TermsPage() {
  useSEO({
    title: "Terms & Conditions | Tribal18",
    description: "Read the Tribal18 Terms & Conditions covering accounts, acceptable use, subscriptions and more.",
    path: "/terms",
    image: "/og/terms.jpg",
  });
  return (
    <LegalLayout title="Terms & Conditions" updated="July 2026" testId="page-terms">
      <section>
        <h2>1. Agreement</h2>
        <p>
          By creating an account or using the Tribal18 website and platform, you agree to these Terms &amp; Conditions. If you do not agree, please do not use our services.
        </p>
      </section>
      <section>
        <h2>2. The service</h2>
        <p>
          Tribal18 provides community management software for clubs, societies and golf communities, including member management, events, competitions, content publishing and reciprocal play features. We may improve or change features over time.
        </p>
      </section>
      <section>
        <h2>3. Your account</h2>
        <ul>
          <li>You must provide accurate information when creating an account.</li>
          <li>You are responsible for keeping your login details secure.</li>
          <li>You are responsible for content published on your community platform by you and your administrators.</li>
        </ul>
      </section>
      <section>
        <h2>4. Acceptable use</h2>
        <p>
          You agree not to misuse the platform, including uploading unlawful content, attempting to gain unauthorised access, or using the service to send spam or harmful material.
        </p>
      </section>
      <section>
        <h2>5. Subscriptions and payment</h2>
        <p>
          Paid plans are billed as described on our pricing page. New platforms are free for the first 30 days and no card details are needed to go live. You can cancel at any time before a paid period begins.
        </p>
      </section>
      <section>
        <h2>6. Intellectual property</h2>
        <p>
          Tribal18 and its licensors own the platform and its software. You retain ownership of the content you and your members create. You grant us the rights needed to host and display that content as part of the service.
        </p>
      </section>
      <section>
        <h2>7. Liability</h2>
        <p>
          The service is provided "as is". To the fullest extent permitted by law, Tribal18 is not liable for indirect or consequential losses arising from use of the service.
        </p>
      </section>
      <section>
        <h2>8. Ending the agreement</h2>
        <p>
          You may stop using the service at any time. We may suspend or terminate accounts that breach these terms.
        </p>
      </section>
      <section>
        <h2>9. Contact</h2>
        <p>
          Questions about these terms? Get in touch via our <Link href="/contact" className="text-foreground underline">contact page</Link>.
        </p>
      </section>
    </LegalLayout>
  );
}
