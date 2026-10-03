import { useEffect } from "react";

const SITE_URL = "https://tribal18.com";
const DEFAULT_TITLE = "Golf Club & Community Management Software | Tribal18";
const DEFAULT_DESCRIPTION =
  "Tribal18 helps golf clubs, societies, event organisers and golf communities manage members, events, content and reciprocal play in one branded platform.";
const DEFAULT_IMAGE = `${SITE_URL}/og/home.jpg`;

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

function absoluteImageUrl(image?: string) {
  if (!image) return DEFAULT_IMAGE;
  if (/^https?:\/\//i.test(image)) return image;
  return `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;
}

function removeCanonical() {
  document.head
    .querySelector<HTMLLinkElement>('link[rel="canonical"]')
    ?.remove();
}

interface SEOOptions {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
  image?: string;
  imageAlt?: string;
}

export function useSEO({
  title,
  description,
  path,
  noindex,
  image,
  imageAlt,
}: SEOOptions = {}) {
  useEffect(() => {
    const fullTitle = title ?? DEFAULT_TITLE;
    const desc = description ?? DEFAULT_DESCRIPTION;
    const url = `${SITE_URL}${path ?? "/"}`;
    const routeNoindex = Boolean(noindex);
    const isStagingHost = window.location.hostname
      .toLowerCase()
      .endsWith(".replit.app");
    const imageUrl = absoluteImageUrl(image);
    const resolvedImageAlt = imageAlt ?? `${fullTitle} — Tribal18`;

    document.title = fullTitle;
    setMeta("name", "description", desc);
    setMeta(
      "name",
      "robots",
      routeNoindex || isStagingHost ? "noindex, nofollow" : "index, follow",
    );
    if (routeNoindex) removeCanonical();
    else setCanonical(url);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:image:alt", resolvedImageAlt);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:url", url);
    setMeta("name", "twitter:image", imageUrl);
    setMeta("name", "twitter:image:alt", resolvedImageAlt);
  }, [title, description, path, noindex, image, imageAlt]);
}
