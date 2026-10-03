---
name: Live SEO release safety
description: Production indexing, custom-domain origin, and cache verification expectations for Tribal18.
---
- Keep noindex host-gated to Replit staging; never allow noindex directives or headers onto tribal18.com.
- After every publish, check the live tribal18.com HTML, robots headers, canonical, and cache behavior directly.
- tribal18.com has previously resolved to a separate nginx host rather than the Replit deployment; confirm current DNS/origin before assuming a Replit publish updates the custom domain.
**Why:** The user identified production noindex as a critical risk and requested live checks after every deployment; stale HTML has also persisted on the custom domain.
**How to apply:** Verify both the Replit deployment URL and tribal18.com before/after publishing. Do not claim the custom-domain cache was purged unless the serving layer's purge is confirmed.