import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { getSitemapXml, injectRouteMeta, isKnownRoute } from "./seo";

function isReplitAppHost(hostHeader: string | undefined) {
  const host = (hostHeader || "")
    .split(",")[0]
    .trim()
    .toLowerCase()
    .replace(/:\d+$/, "");
  return host.endsWith(".replit.app");
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const indexHtml = fs.readFileSync(
    path.resolve(distPath, "index.html"),
    "utf-8",
  );
  const prerenderedPagesPath = path.resolve(__dirname, "prerendered-pages.json");
  if (!fs.existsSync(prerenderedPagesPath)) {
    throw new Error(
      `Could not find prerendered pages: ${prerenderedPagesPath}. Run the production build first.`,
    );
  }
  const prerenderedPages = JSON.parse(
    fs.readFileSync(prerenderedPagesPath, "utf-8"),
  ) as Record<string, string>;
  if (!prerenderedPages.__not_found__) {
    throw new Error("The production build is missing its prerendered 404 page.");
  }

  app.use((req, res, next) => {
    if (
      isReplitAppHost(req.get("x-forwarded-host")) ||
      isReplitAppHost(req.get("host"))
    ) {
      res.set("X-Robots-Tag", "noindex, nofollow");
    }
    next();
  });

  app.get("/sitemap.xml", (_req, res) => {
    res.status(200).type("application/xml").send(getSitemapXml());
  });

  app.use(express.static(distPath, { index: false }));

  // Serve server-rendered public content and per-route SEO metadata.
  app.use("/{*path}", (req, res) => {
    const requestPath = new URL(req.originalUrl, "http://localhost").pathname;
    const normalizedPath = requestPath.replace(/\/+$/, "") || "/";
    const knownRoute = isKnownRoute(requestPath);
    const pageMarkup = knownRoute
      ? prerenderedPages[normalizedPath] ?? ""
      : prerenderedPages.__not_found__;
    const rootElement = '<div id="root"></div>';

    if (!indexHtml.includes(rootElement)) {
      throw new Error("The built HTML is missing its application root element.");
    }

    const renderedHtml = indexHtml.replace(
      rootElement,
      `<div id="root">${pageMarkup}</div>`,
    );
    const stagingHost =
      isReplitAppHost(req.get("x-forwarded-host")) ||
      isReplitAppHost(req.get("host"));

    res
      .status(knownRoute ? 200 : 404)
      .set({ "Content-Type": "text/html; charset=utf-8" })
      .send(injectRouteMeta(renderedHtml, requestPath, { stagingHost }));
  });
}
