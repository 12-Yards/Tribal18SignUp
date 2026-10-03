import { build as esbuild, type Plugin } from "esbuild";
import { build as viteBuild } from "vite";
import { readdir, rm, readFile, writeFile } from "fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { getIndexablePaths } from "../server/seo";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  console.log("building public page renderer...");
  const builtAssets = await readdir(path.resolve("dist/public/assets"));
  const viteAssetPlugin: Plugin = {
    name: "vite-built-assets",
    setup(build) {
      build.onResolve({ filter: /^@assets\// }, (args) => ({
        path: args.path.slice("@assets/".length),
        namespace: "vite-built-assets",
      }));
      build.onLoad(
        { filter: /.*/, namespace: "vite-built-assets" },
        (args) => {
          const sourceName = path.basename(args.path);
          const extension = path.extname(sourceName);
          const stem = sourceName.slice(0, -extension.length);
          const assetName = builtAssets.find(
            (name) =>
              name === sourceName ||
              (name.startsWith(`${stem}-`) && name.endsWith(extension)),
          );

          if (!assetName) {
            return {
              errors: [{ text: `Could not find Vite output for ${sourceName}` }],
            };
          }

          return {
            contents: `export default ${JSON.stringify(`/assets/${assetName}`)};`,
            loader: "js",
          };
        },
      );
    },
  };

  await esbuild({
    entryPoints: ["client/src/ssr-entry.tsx"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/ssr-renderer.cjs",
    target: "node20",
    jsx: "automatic",
    alias: {
      "@": path.resolve("client/src"),
      "@shared": path.resolve("shared"),
    },
    packages: "external",
    plugins: [viteAssetPlugin],
    logLevel: "info",
  });

  const rendererPath = path.resolve("dist/ssr-renderer.cjs");
  const requireFromRenderer = createRequire(rendererPath);
  const { renderPage } = requireFromRenderer(rendererPath) as {
    renderPage: (routePath: string) => string;
  };
  const prerenderedPages = Object.fromEntries(
    getIndexablePaths().map((routePath) => [
      routePath,
      renderPage(routePath),
    ]),
  );
  prerenderedPages.__not_found__ = renderPage("/__prerender_not_found__");
  await writeFile(
    path.resolve("dist/prerendered-pages.json"),
    JSON.stringify(prerenderedPages),
    "utf-8",
  );

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
