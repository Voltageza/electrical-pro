
# Electrical Pro — Site Rebuild Plan

A modern, trust-building marketing site inspired by the existing electricalpro.co.za, but with stronger structure, visuals, and conversion focus. Built as a single-page site with smooth scroll-to sections (Home, Services, About, Contact) plus four dedicated service pages.

## Design direction

- **Tone:** Bold, industrial, trustworthy — think premium electrical contractor.
- **Palette:** Deep navy (`#0A1628`) base, electric blue accent (`#1E90FF`), warm amber highlight (for "energy" CTAs), clean off-white surfaces.
- **Typography:** "Barlow Condensed" or "Oswald" for bold display headings; "Inter" for body. Strong, confident, slightly industrial.
- **Style:** Layered hero with overlay, subtle grid/circuit motif background accents, large imagery, soft elevation shadows in electric-blue tint, smooth fade-in animations on scroll (framer-motion).
- All colors and gradients defined as HSL semantic tokens in `index.css` + `tailwind.config.ts`.

## Site structure

1. **Sticky navigation** — logo wordmark "ELECTRICAL PRO" + tagline "Danny Farnham · Tim Toovey", links: Home, Solar, Commercial, Agricultural, Residential, About, Contact. Mobile hamburger.
2. **Hero** — full-bleed image of their building / electrician at work, dark gradient overlay, headline *"Three Decades of Expertise. Lighting the Way to a Brighter Future."*, subhead about Garden Route service, two CTAs: "Get a Quote" + "Explore Services".
3. **Stats strip** — 30+ Years, 1000+ Projects, 4 Sectors, Garden Route Coverage.
4. **Services grid (4 cards)** — EP Solar, Commercial, Agricultural, Residential. Each card: generated image, title, blurb, "Learn more" link to its page.
5. **Why Choose Us** — 3–4 feature blocks: Certified electricians, Solar specialists, Safety-first, Local Garden Route team. Icons from lucide-react.
6. **Featured project / showcase** — large image + short narrative (e.g., recent solar install).
7. **Testimonials** — 3 short client quotes in a clean card row.
8. **Contact / CTA section** — contact form (name, email, phone, service interest, message), business info (phone, email, address, hours), embedded map placeholder. Form is front-end only (submit shows toast); can be wired later.
9. **Footer** — services links, contact, social, copyright.

## Service sub-pages (4)

Each follows the same template:
- Hero banner with sector-specific image + page title.
- Intro paragraph.
- "What we offer" — bulleted list of services for that sector.
- Image + text feature block.
- CTA back to Contact.

Routes: `/solar`, `/commercial`, `/agricultural`, `/residential`, plus `/` for the main page.

## Imagery (AI generated, stored in `src/assets/`)

Generated with Nano Banana, all in a consistent moody/industrial style:
1. Hero — modern electrical contractor building / team at golden hour.
2. Solar — rooftop solar panels with Garden Route landscape.
3. Commercial — electrician working in a modern commercial facility.
4. Agricultural — electrical work in a farm / dairy setting.
5. Residential — electrician wiring a modern home interior.
6. Featured project — large solar array close-up.
7. About / team — generic electrician-at-work shot.

## Technical notes

- React + Vite + Tailwind, framer-motion for entrance animations, lucide-react for icons, react-router-dom for service routes (already present), shadcn `Button`, `Card`, `Input`, `Textarea`, `Form`, `Toast`.
- Define semantic tokens (`--brand-navy`, `--brand-electric`, `--brand-amber`, gradients, shadow-glow) in `index.css`; extend `tailwind.config.ts` with `brand` colors and the two display/body font families (loaded via Google Fonts in `index.html`).
- New `Button` variants: `hero` (electric-blue glow), `outlineLight` (for hero on dark).
- Components: `Navbar`, `Hero`, `Stats`, `ServicesGrid`, `ServiceCard`, `WhyUs`, `FeaturedProject`, `Testimonials`, `ContactSection`, `Footer`, `ServicePageLayout`.
- Pages: rewrite `Index.tsx`; add `Solar.tsx`, `Commercial.tsx`, `Agricultural.tsx`, `Residential.tsx`; register routes in `App.tsx`.
- Contact form is client-side only in v1; can later wire to Lovable Cloud + email function on request.
- No backend / Cloud needed for this version.

## Out of scope (v1)

- Live form submission/email delivery (can add via Lovable Cloud later).
- CMS / blog.
- Real Google Map embed (placeholder only unless you want it).
- Multi-language.
