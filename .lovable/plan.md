

## Experience Section Redesign: From Dropdowns to Case Study Link-Outs

### Design Direction

Replace the expandable dropdowns with a cleaner static layout per role, each with a "View work" button linking to a dedicated detail page. This keeps the experience section scannable while giving each role a proper space to tell its story.

### Layout Change for Experience Items

Current: `[Role + Company] ———————— [Dates] [▼]`

Proposed:
```text
Role Title
Company · Sector                    2023 — 2025
One-line summary of scope/impact
                                    [View work →]
```

- Dates move below the role/company line (stacked, not side-by-side)
- Remove the chevron and dropdown entirely
- Add a short one-liner summary per role (static, always visible)
- Add a subtle "View work" link-button per entry

### Detail Pages (per experience)

Create a reusable `ExperienceCaseStudy` page component with a URL structure like `/experience/bio-protocol`, `/experience/square`, etc.

Each page follows your proposed structure:
1. **Approach** — How you tackled the problem, your process
2. **Business Outcomes** — Measurable results, impact
3. **Learnings** — Reflections, what you'd do differently

Plus: image/screenshot placeholders between sections, a back link to home, and the same editorial styling as the existing `/case-study` page.

### Technical Steps

1. **Update `ExperienceTimeline.tsx`** — Remove dropdown state/animation, restructure each item with stacked layout + summary + "View work" link. Add a `slug` field to each experience entry.

2. **Create `src/pages/ExperienceCaseStudy.tsx`** — A parameterized page that reads the slug from the URL, renders the structured case study (Approach, Business Outcomes, Learnings) with image placeholders. Reuses the editorial layout from the existing `CaseStudy.tsx`.

3. **Update `src/App.tsx`** — Add route `/experience/:slug` pointing to the new page.

4. **Update experience data** — Add `slug`, `summary`, and placeholder case study content (approach, outcomes, learnings) to each experience entry. Data stays in-file for now.

### What Stays the Same

- Overall section position and visual system (colors, typography, spacing)
- The existing `/case-study` page (BioRadar) remains untouched
- `divide-y` list structure in the experience section

