# CrownForm | Personalised Hair Prostheses

A responsive, accessible, frontend-only landing page for **CrownForm**, presenting its planned personalised hair-prosthesis service for people experiencing medical hair loss (including chemotherapy-related hair loss and alopecia).

---

## Key Implementation Features

- **Exact Section Sequence**:
  1. **Home** (`#home`): Hero copy, primary & secondary CTAs, three supporting statements, and custom vector illustrations of the HairPrint kit and digital scalp/cap model (labelled *"Illustrative concept"*).
  2. **About** (`#about`): The medical hair-loss challenge, CrownForm's connected approach, the planned Luton operating model, and founder profile for Aranu Deborah Mai-Lafia.
  3. **Platform** (`#platform`): Six core service modules (A through F) from HairPrint capture to controlled data access, plus the planned capability roadmap.
  4. **How It Works** (`#how-it-works`): Six-step patient journey, eight-week custom turnaround note, and ready-to-wear synthetic bridge headwear context.
  5. **Market & Pricing** (`#market-pricing`): Target audience breakdown, three bespoke prosthesis product tiers (£1,074, £1,500, £2,220 with before-VAT amounts), HairPrint Kit (£58.80 / £49 credit), Backup Units (-25%), CrownCare maintenance plans, Studio Licensing terms, and conditional future NHS voucher illustration.
  6. **FAQ** (`#faq`): Accessible accordion controls with complete answers to all 13 required questions.
  7. **Footer**: Navigation anchors, Luton operating base, copyright, and working **Demo Privacy Disclosure** modal.

- **Blank Favicon & Exact Metadata**:
  - Empty SVG favicon: `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E">`
  - Page Title: `CrownForm | Personalised Hair Prostheses`
  - Meta Description: `Discover CrownForm’s planned approach to personalised hair prostheses, combining calibrated HairPrint capture, custom design, specialist craftsmanship and ongoing care.`

- **Accessible "Request a Pilot" Modal**:
  - Focus trap, Escape key handling, and focus restoration to the triggering button.
  - Client-side storage only in `localStorage` under key `crownform_pilot_submissions`.
  - Never overwrites previous records; appends to the array.
  - Safe error handling preserving form input when storage is full, corrupted or blocked.
  - No external network calls, cookies, or backend dependencies.

- **Design & Typography**:
  - Palette: Warm ivory backgrounds (`#FAF8F5`, `#F5F2EB`), deep plum typography (`#241824`, `#170E17`), muted sage secondary surfaces (`#EAEFE9`, `#D8E2D7`), and restrained champagne accents (`#C5A059`, `#8E6D38`).
  - Typography: Serif headings (*Fraunces*) and Humanist sans-serif body text (*Plus Jakarta Sans*).
  - Respects `prefers-reduced-motion` and keyboard accessibility standards.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```
