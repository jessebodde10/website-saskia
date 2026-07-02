# Rise & Connect

Moderne, rustige en professionele website voor **Rise & Connect** — training, ademcoaching en bewustwording voor mensen en teams.

Gebouwd met **Next.js 14 (App Router)**, **React 18**, **Tailwind CSS** en **Framer Motion**.

## Aan de slag

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | Omschrijving                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Ontwikkelserver met hot reload        |
| `npm run build` | Productiebuild                        |
| `npm run start` | Start de productiebuild               |
| `npm run lint`  | ESLint                                |

## Structuur

```
app/
  layout.tsx          # Root layout, SEO metadata, fonts, header/footer
  page.tsx            # Home
  trainingen/         # Trainingen voor teams
  ademcoaching/       # Ademcoaching (mini-retreat, kinderen, teams)
  over-mij/           # Over Saskia
  contact/            # Contact + formulier
  robots.ts, sitemap.ts
components/
  Header.tsx, Footer.tsx, Logo.tsx, ContactForm.tsx, icons.tsx
  motion/             # Framer Motion fade-in & stagger helpers
  ui/                 # Herbruikbare UI (ImageFrame, PageHeader)
lib/
  nav.ts              # Navigatie + contactgegevens
  images.ts           # Placeholder-fotografie (Unsplash)
public/
  favicon.svg, og-image.svg
```

## Aanpassen

- **Kleuren & typografie**: `tailwind.config.ts`
- **Navigatie & e-mailadres**: `lib/nav.ts`
- **Afbeeldingen**: vervang de Unsplash-placeholders in `lib/images.ts` door eigen beeldmateriaal (bv. in `public/`).
- **Contactformulier**: verstuurt nu via de mailclient (`mailto:`). Koppel eventueel een backend/e-maildienst in `components/ContactForm.tsx`.

## Toegankelijkheid & SEO

- Semantische HTML, skip-link, focus states en `prefers-reduced-motion`.
- Metadata, Open Graph, sitemap en robots.txt zijn ingesteld.
- Toegankelijke kleurcontrasten in de rustige, natuurlijke palet.
# website-saskia
