I have a portfolio concept that was designed and prototyped in Claude.ai. The working React prototype is in portfolio-concept-v2.jsx and a standalone HTML preview is in portfolio-preview.html. The CLAUDE.md file contains the full design system, content data, all image URLs from my current Squarespace site, and the site structure.

Here's what I need you to do:

1. **Read CLAUDE.md and portfolio-concept-v2.jsx first** to understand the design direction, typography system, colour palette, layout patterns, and interactions.

2. **Set up an Astro project** with Tailwind CSS in this directory. Use Astro's content collections for the project case studies.

3. **Download all images** from the Squarespace CDN URLs listed in CLAUDE.md. Save project thumbnails to /public/images/projects/ and AI Gen images to /public/images/ai-gen/. Use sensible filenames (e.g., betpawa-design-systems.png, ai-sports.png).

4. **Build the site with these pages:**
   - Home (/) — Hero section + project grid, matching the design in the JSX prototype
   - AI Gen (/ai-gen) — Gallery with category filter pills and masonry layout
   - About (/about) — Bio, stats, services section
   - Individual project pages (/work/[slug]) — using Astro content collections

5. **Preserve all design details from the prototype:**
   - The Playfair Display italic character-swap technique on headlines
   - Dark theme with opacity-based text hierarchy
   - Scroll-driven reveal animations via IntersectionObserver
   - Glassmorphic nav that compresses on scroll
   - Hover states on project cards (scale, brightness, sliding CTA)
   - AI Gen masonry grid with hover overlays showing category + tool
   - Custom scrollbar styling

6. **Make it responsive** — the prototype is desktop-only. Add mobile breakpoints.

7. **Set up for deployment** — configure for Netlify with a netlify.toml.

Start by reading the files, then scaffold the Astro project and show me a plan before building. I'm a designer, not a developer — explain any decisions that need my input in plain terms.
