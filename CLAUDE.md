# Daniel Bonavita — Portfolio Experiment

## Project Overview
Custom portfolio website replacing a Squarespace site. This is a design experiment and portfolio piece itself — "Senior designer uses AI to build a bespoke portfolio." The site should feel editorial, crafted, and nothing like a template.

## Tech Stack
- **Framework:** Astro (static site, fast, simple content model)
- **Styling:** Tailwind CSS
- **Animations:** CSS transitions + Intersection Observer (no heavy JS libraries)
- **Deployment target:** Netlify or Vercel
- **Domain:** danielbonavita.xyz (existing, currently on Squarespace)

## Design System

### Typography
Three-font system with a display font accent technique:
- **Headlines:** `Instrument Serif` (Google Fonts) — editorial, warm
- **Display accent:** `Playfair Display italic` (Google Fonts) — swap specific characters (vowels like a, i, o, e) within Instrument Serif headlines to create a mixed-serif editorial effect. This is the signature design detail.
- **Labels/Metadata:** `DM Mono` — monospace, systems-designer feel, uppercase with wide letter-spacing
- **Body:** `DM Sans` — clean, readable

### Colour Palette
- **Background:** `#0A0A0A` (near-black)
- **Primary text:** `#F0EDE6` (warm off-white)
- **Text hierarchy via opacity:** 0.45 for body, 0.35 for secondary, 0.25 for tertiary, 0.15 for ghost
- **Accent:** `#C8FF00` (chartreuse — from betPawa brand, used for active states, CTAs, highlights)
- **Selection:** `::selection { background: #C8FF00; color: #0A0A0A }`

### Layout Principles
- Dark theme done properly — opacity-based text hierarchy, not multiple greys
- Asymmetric grids for project cards (alternating 1.3fr/1fr and 1fr/1.3fr)
- Generous whitespace — 48px page padding, 120px section padding
- Subtle grid overlay on hero (80px × 80px, 2.5% opacity)
- Scroll-driven reveal animations (IntersectionObserver, translateY + opacity)
- Glassmorphic nav on scroll (blur + semi-transparent background)

### Navigation
- Fixed top nav, generous size (36px padding unscrolled, compresses to 20px on scroll)
- Name in Instrument Serif at 28px with Playfair Display italic "a" swaps: "D*a*niel Bon*a*vita"
- Nav links in DM Mono 13px uppercase
- Active state: chartreuse underline
- Social icons as small circles (32px) with hover → chartreuse border
- Backdrop blur + 82% opacity dark background when scrolled

## Site Structure

### Pages
1. **Home (/)** — Hero + Selected Work grid
2. **AI Gen (/ai-gen)** — AI-generated imagery gallery with category filters
3. **About (/about)** — Bio, stats, services
4. **Project pages (/work/[slug])** — Individual case studies (text + image galleries)

### Content: Projects

| # | Title | Subtitle | Year | Tags | Accent Colour |
|---|-------|----------|------|------|---------------|
| 1 | betPawa | Design Systems & Branding | 2019–2023 | Branding, Design Systems, Figma, 15+ Markets | #C8FF00 |
| 2 | betPawa | Branding OOH | 2019–2023 | Out of Home, Campaign, Art Direction | #ffffff |
| 3 | betPawa | AI Integration | 2022–2023 | AI Imagery, Midjourney, Production | #8BF0A7 |
| 4 | ARTRPRNR | Magazine Design | 2021 | Editorial, Print, Typography | #F0EDE6 |
| 5 | The Room | Brand Identity | 2018–2019 | Branding, Digital, Identity | #FF2D7B |
| 6 | Apart of Me | Visual Design — Charity | Ongoing | Volunteer, Visual Design, NGO | #FFD166 |
| 7 | Pen Pal | App Branding | 2022 | App Design, Branding, Product | #F5F0E8 |
| 8 | Paul Read | Photography Identity | 2021 | Identity, Print, Typography | #00C9B7 |

### Content: AI Gen Images
All images are AI-generated with Midjourney, no post-processing. Categories: Sports, Fashion, Typography, Objects, Architecture, Automotive.

### Image Sources (from existing Squarespace CDN)
Download all of these to `/public/images/projects/` and `/public/images/ai-gen/`:

**Project thumbnails:**
- betPawa Design Systems: `https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/22839be6-a272-460f-8fc1-ed2305e1b629/Cover-43.png?format=1500w`
- betPawa OOH: `https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/89ed1e82-68e2-43f5-9e3e-464674e2e823/Cover-4b3.png?format=1500w`
- betPawa AI: `https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/74875fe8-21ea-4956-b0b2-77930878359c/Cover-4b3.png?format=1500w`
- ARTRPRNR: `https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/fef514e9-dff2-41f6-a91d-c9f35888dfdd/500.png?format=1500w`
- The Room: `https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/bcd8a065-4055-4625-b490-394ca06dc849/Cover-4b3.png?format=1500w`
- Apart of Me: `https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/16b3f2e0-a3e0-4cba-ae15-b2740b76af1e/Cover-4b3.png?format=1500w`
- Pen Pal: `https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/d4e1f508-6fe8-4b81-bc1e-ca66fdb2dd96/Cover-4b3.png?format=1500w`
- Paul Read: `https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/39b6a3e7-eb47-4dd3-a85e-c21ebc8e2ba9/Cover-4b3.png?format=1500w`

**AI Gen gallery:**
- Sports: `https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/3c9b9d74-0e6d-4ddd-bdb2-a5496ab7b815/danbnvt_full_body_shot_of_a_dynamic_pose_of_an_african_football_0b7caa34-6dab-4912-a990-ca345bfbd350.png?format=1500w`
- Fashion: `https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/dcc41e6e-bc3f-440b-ad35-894a75fd3446/danbnvt_all_black_highly_fashionable_outfits_and_on_a_couple_of_250323cf-2a93-4a99-89c5-308a49447c61.png?format=1500w`
- Typography: `https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/82a7b1a9-4511-4b04-a0cb-747276869fd0/danbnvt_letter_D_made_of_3D_abstract_composition_with_watermelo_f01454e2-361f-4352-9ea9-1e39f868ae97.png?format=1500w`
- Objects: `https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/8a5e212e-5aae-4e9e-a438-657343de22f7/danbnvt_a_gramophone_made_of_organic_floating_morphing_objects_2b28d6e5-a3b3-47d5-9cd1-e67a84e9f9e1.png?format=1500w`
- Architecture: `https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/a9b460b1-f65d-4dac-9805-2536df3f62e5/danbnvt_a_large_brutalist_concrete_residential_high_rise_apart_c5f26a71-1d9b-4917-8ee2-83f9cd498d7b.png?format=1500w`
- Automotive: `https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/0e3b2e0f-f8b1-44e4-a3d4-3b94f444b2cd/danbnvt_dark_mode._large_cinematic_shot_of_a_delorean_DMC-12_pa_72d4e53e-5ef2-4f3c-b9b3-ef36eafc3e3e.png?format=1500w`

## Reference Files
- `portfolio-concept-v2.jsx` — Working React prototype with all components, animations, and data. Use this as the primary design reference.
- `portfolio-preview.html` — Standalone HTML version for browser preview.

## Key Interactions
- Scroll-driven fade-in reveals (translateY 28-40px + opacity, cubic-bezier(0.16, 1, 0.3, 1))
- Nav compresses on scroll with backdrop blur
- Project cards: image scale(1.015) + brightness shift on hover, "View project" CTA slides in
- AI Gen gallery: masonry 3-column layout, category filter pills, hover overlay with metadata
- Smooth scroll navigation between sections
- Custom scrollbar (4px, subtle)

## About Daniel
Senior Designer, 15+ years experience. Brazilian-Italian, based in London (relocating to Seville end of 2026). Specialises in visual design, branding, design systems, and Figma. Co-runs Consistency BJJ gym in Fulham. Brown belt in BJJ. Specialty coffee enthusiast. Uses AI tools (Midjourney, Claude, Flora) in his design workflow.

## Services to list
Digital Design, Branding Identity, Art Direction, Design Systems, AI Consultancy/Imagery, Photo Retouching
