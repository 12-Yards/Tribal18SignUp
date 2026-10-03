import { benefitSeoMeta } from "../shared/benefit-seo";
import { faqData } from "../shared/faq-data";

const SITE_URL = "https://tribal18.com";

const DEFAULT_TITLE =
  "Golf Club & Community Management Software | Tribal18";
const DEFAULT_DESCRIPTION =
  "Tribal18 helps golf clubs, societies, event organisers and golf communities manage members, events, content and reciprocal play in one branded platform.";

interface RouteMeta {
  title: string;
  description: string;
  lastmod?: string;
  noindex?: boolean;
  image?: string;
  imageAlt?: string;
}

const routeMeta: Record<string, RouteMeta> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    lastmod: "2026-10-03",
    image: "/og/home.jpg",
    imageAlt: "Tribal18 golf club and community management platform",
  },
  "/contact": {
    title: "Contact Us | Tribal18",
    description:
      "Get in touch with the Tribal18 team to learn how our community management platform can help your golf club, society or community.",
    lastmod: "2026-10-03",
    image: "/og/contact.jpg",
    imageAlt: "Contact the Tribal18 team",
  },
  "/faqs": {
    title: "Frequently Asked Questions | Tribal18",
    description:
      "Find answers about Tribal18's golf community platform, including setup, membership, pricing, mobile apps, events and integrations.",
    lastmod: "2026-10-02",
    image: "/og/faqs.jpg",
    imageAlt: "Frequently asked questions about Tribal18",
  },
  "/login": {
    title: "Organisers Login | Tribal18",
    description:
      "Log in to your Tribal18 organiser account to manage your community platform.",
    noindex: true,
  },
  "/create-account": {
    title: "Create Your Account | Tribal18",
    description:
      "Create your Tribal18 community platform in minutes. Free for the first 30 days, no card details needed to go live.",
    noindex: true,
  },
  "/privacy": {
    title: "Privacy Policy | Tribal18",
    description:
      "Read the Tribal18 Privacy Policy to learn how we collect, use and protect your personal information.",
    lastmod: "2026-07-22",
    image: "/og/privacy.jpg",
    imageAlt: "Tribal18 privacy policy",
  },
  "/terms": {
    title: "Terms & Conditions | Tribal18",
    description:
      "Read the Tribal18 Terms & Conditions covering accounts, acceptable use, subscriptions and more.",
    lastmod: "2026-07-22",
    image: "/og/terms.jpg",
    imageAlt: "Tribal18 terms and conditions",
  },
  "/admin": { title: "Admin | Tribal18", description: "", noindex: true },
  "/admin/login": {
    title: "Admin Login | Tribal18",
    description: "",
    noindex: true,
  },
};

const NOT_FOUND_META: RouteMeta = {
  title: "Page Not Found | Tribal18",
  description: "The page you requested could not be found.",
  noindex: true,
};

function normalizePath(path: string) {
  return path.replace(/\/+$/, "") || "/";
}

function getRouteMeta(path: string): RouteMeta | undefined {
  const normalized = normalizePath(path);
  const staticMeta = routeMeta[normalized];
  if (staticMeta) return staticMeta;

  const benefitPrefix = "/benefits/";
  if (!normalized.startsWith(benefitPrefix)) return undefined;

  const slug = normalized.slice(benefitPrefix.length);
  if (!Object.prototype.hasOwnProperty.call(benefitSeoMeta, slug)) {
    return undefined;
  }

  return benefitSeoMeta[slug as keyof typeof benefitSeoMeta];
}

export function isKnownRoute(path: string): boolean {
  return getRouteMeta(path) !== undefined;
}

export function getIndexablePaths(): string[] {
  const staticPaths = Object.entries(routeMeta)
    .filter(([, meta]) => !meta.noindex)
    .map(([path]) => path);
  const benefitPaths = Object.keys(benefitSeoMeta).map(
    (slug) => `/benefits/${slug}`,
  );
  return [...staticPaths, ...benefitPaths];
}

export function getSitemapXml(): string {
  const entries = getIndexablePaths().map((path) => {
    const meta = getRouteMeta(path);
    if (!meta?.lastmod || !/^\d{4}-\d{2}-\d{2}$/.test(meta.lastmod)) {
      throw new Error(`Missing valid sitemap lastmod for ${path}`);
    }
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;
    return `  <url><loc>${url}</loc><lastmod>${meta.lastmod}</lastmod></url>`;
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    "</urlset>",
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function absoluteImageUrl(image?: string) {
  if (!image) return `${SITE_URL}/og/home.jpg`;
  if (/^https?:\/\//i.test(image)) return image;
  return `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;
}

function injectFaqSchema(html: string) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  const json = JSON.stringify(schema).replace(/</g, "\\u003c");
  return html.replace(
    "</head>",
    `<script type="application/ld+json">${json}</script>\n</head>`,
  );
}

export function injectRouteMeta(
  html: string,
  path: string,
  options: { stagingHost?: boolean } = {},
): string {
  const normalized = normalizePath(path);
  const route = getRouteMeta(normalized);
  const meta = route ?? NOT_FOUND_META;
  const routeNoindex = !route || meta.noindex === true;
  const noindex = routeNoindex || options.stagingHost === true;

  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description || DEFAULT_DESCRIPTION);
  const url = `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
  const imageUrl = escapeHtml(absoluteImageUrl(meta.image));
  const imageAlt = escapeHtml(meta.imageAlt ?? `${meta.title} — Tribal18`);

  let out = html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${title}" />`,
    )
    .replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${url}" />`,
    )
    .replace(
      /<meta property="og:image" content="[^"]*" \/>/,
      `<meta property="og:image" content="${imageUrl}" />`,
    )
    .replace(
      /<meta property="og:image:alt" content="[^"]*" \/>/,
      `<meta property="og:image:alt" content="${imageAlt}" />`,
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${title}" />`,
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${description}" />`,
    )
    .replace(
      /<meta name="twitter:url" content="[^"]*" \/>/,
      `<meta name="twitter:url" content="${url}" />`,
    )
    .replace(
      /<meta name="twitter:image" content="[^"]*" \/>/,
      `<meta name="twitter:image" content="${imageUrl}" />`,
    )
    .replace(
      /<meta name="twitter:image:alt" content="[^"]*" \/>/,
      `<meta name="twitter:image:alt" content="${imageAlt}" />`,
    );

  out = out.replace(
    /<meta name="robots" content="[^"]*" \/>/,
    `<meta name="robots" content="${noindex ? "noindex, nofollow" : "index, follow"}" />`,
  );

  if (routeNoindex) {
    out = out.replace(/<link rel="canonical" href="[^"]*" \/>/, "");
  } else {
    out = out.replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${url}" />`,
    );
  }

  return normalized === "/faqs" ? injectFaqSchema(out) : out;
}
