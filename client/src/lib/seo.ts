import { useEffect } from "react";

const SITE_URL = "https://tribal18.com";
const DEFAULT_TITLE = "Golf Club & Community Management Software | Tribal18";
const DEFAULT_DESCRIPTION =
  "Tribal18 helps golf clubs, societies, event organisers and golf communities manage members, events, content and reciprocal play in one branded platform.";

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
}

export function useSEO({ title, description, path, noindex }: SEOOptions = {}) {
  useEffect(() => {
    const fullTitle = title ?? DEFAULT_TITLE;
    const desc = description ?? DEFAULT_DESCRIPTION;
    const url = `${SITE_URL}${path ?? "/"}`;

    document.title = fullTitle;
    setMeta("name", "description", desc);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    if (noindex) removeCanonical();
    else setCanonical(url);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:url", url);
  }, [title, description, path, noindex]);
}
