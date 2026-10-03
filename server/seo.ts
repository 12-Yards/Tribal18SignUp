import { benefitSeoMeta } from "../shared/benefit-seo";

const SITE_URL = "https://tribal18.com";

const DEFAULT_TITLE =
  "Golf Club & Community Management Software | Tribal18";
const DEFAULT_DESCRIPTION =
  "Tribal18 helps golf clubs, societies, event organisers and golf communities manage members, events, content and reciprocal play in one branded platform.";

interface RouteMeta {
  title: string;
  description: string;
  noindex?: boolean;
}

const routeMeta: Record<string, RouteMeta> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  "/contact": {
    title: "Contact Us | Tribal18",
    description:
      "Get in touch with the Tribal18 team to learn how our community management platform can help your golf club, society or community.",
  },
  "/faqs": {
    title: "Frequently Asked Questions | Tribal18",
    description:
      "Find answers about Tribal18's golf community platform, including setup, membership, pricing, mobile apps, events and integrations.",
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
  },
  "/terms": {
    title: "Terms & Conditions | Tribal18",
    description:
      "Read the Tribal18 Terms & Conditions covering accounts, acceptable use, subscriptions and more.",
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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function injectRouteMeta(html: string, path: string): string {
  const normalized = normalizePath(path);
  const route = getRouteMeta(normalized);
  const meta = route ?? NOT_FOUND_META;
  const noindex = !route || meta.noindex === true;

  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description || DEFAULT_DESCRIPTION);
  const url = `${SITE_URL}${normalized === "/" ? "/" : normalized}`;

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
    );

  out = out.replace(
    /<meta name="robots" content="[^"]*" \/>/,
    `<meta name="robots" content="${noindex ? "noindex, nofollow" : "index, follow"}" />`,
  );

  if (noindex) {
    out = out.replace(/<link rel="canonical" href="[^"]*" \/>/, "");
  } else {
    out = out.replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${url}" />`,
    );
  }

  return out;
}
