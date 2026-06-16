# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```
pnpm dev       # dev server at http://localhost:4321
pnpm build     # build to ./dist/
pnpm preview   # preview production build
```

No lint or test commands — this project has no configured linter or test suite.

## Architecture

Static site built with Astro 6, output to `./dist/`. No SSR adapter — fully static.

**Content collections** (`src/content.config.ts`): two collections using Astro's `glob` loader.
- `blog` — requires `title` (string) and `date` (date); `description` is optional
- `notes` — requires `title` (string); `updated` (date) and `tags` (string[]) are optional

**Routing**: file-based pages in `src/pages/`. Dynamic routes `[slug].astro` use `getStaticPaths()` to enumerate collection entries at build time. `src/pages/404.astro` is the custom 404 page.

**Landing page** (`src/pages/index.astro`): shows a bio followed by three "recent content" sections — top 3 blog posts (by date), top 3 gallery photos (by EXIF date, displayed as a justified row using flex with per-image `flex-grow` set to each image's aspect ratio so all photos share the same height without cropping), and top 3 notes (by `updated` date). Each section links to its listing page.

**Gallery** (`src/pages/gallery/index.astro`): images live in `src/assets/gallery/` and are enumerated with `import.meta.glob` (scoped to `*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}`) at build time. Astro's `<Image>` component converts them to WebP and generates content-hashed URLs (`sharp` is required and installed). EXIF metadata (ISO, shutter speed, aperture, date) is read at build time with `exifr`. Images are sorted newest-to-oldest by `DateTimeOriginal` and grouped by year, each year in its own masonry grid. The masonry layout is a vanilla JS shortest-column algorithm (in the page `<script>` block) — not CSS `columns` — so images flow left-to-right across columns. Lightbox is also vanilla JS in the same script block.

To add photos: drop JPEG files into `src/assets/gallery/` — no config needed. PNG and WebP are also supported but won't have EXIF.

**Shared utilities** (`src/utils/content.ts`): `getExcerpt(body, length?)` strips Markdown syntax and truncates at a word boundary; `sortNullableDatesDesc(a, b)` is a null-safe date comparator for `.sort()`. Both are used by the landing page and notes listing.

**Notes listing** (`src/pages/notes/index.astro`): sorted by `updated` date descending (undated notes fall to the bottom).

**Styles**: single file at `src/styles/global.css`, imported in `BaseLayout.astro`. No CSS framework or preprocessor.

**Layout**: one shared layout `src/layouts/BaseLayout.astro` wraps every page — handles `<head>` (including favicon), nav, and footer.

## Content frontmatter

Blog post (`src/content/blog/<slug>.md`):
```md
---
title: "Title"
date: "YYYY-MM-DD"
description: "Optional"
---
```

Note (`src/content/notes/<slug>.md`):
```md
---
title: "Title"
updated: "YYYY-MM-DD"
tags: ["tag"]
---
```

Gallery: drop JPEG files into `src/assets/gallery/` — no config needed. Display order is determined by `DateTimeOriginal` EXIF (newest first), so filename prefixes are not needed.
