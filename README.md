# CodeCamp Kids KL

A single-page responsive website for a **fictional** weekend coding school for children aged 8-12. Built as my 48-hour Web Designer and Developer practical assessment.

> Items marked **TODO** are for me to fill in once I have actually done the work. Do not submit with any TODO left.

## Links

| What | Where |
|---|---|
| Live site (HTTPS) | https://codecamp-kids-kl.web.app/ |
| Design (Figma) | https://www.figma.com/design/McNJwYHC5WTsMtHD0Zg9jn |
| Design exports | [`docs/wireframes/`](docs/wireframes/) (mobile 390, desktop 1440, brand rules) |
| Repository | https://github.com/ApizMan/OSK-Group-Assessment |
| Final commit | TODO: commit hash that matches the live site |

## Audience and primary action

- **Audience:** parents in the Klang Valley choosing a screen-time activity for a child aged 8-12.
- **Primary action:** enquire about a free trial class.

The page answers a parent's questions in order: what is this, why should I trust it, which class fits my child, what happens next, what if I have doubts, and how do I book.

## Stack choice

Plain **HTML, CSS and JavaScript** with no framework and no build step.

Why: this is a single landing page with three small interactions, so a framework would add tooling and dependencies without adding value. Plain files deploy directly, are easy to inspect and reproduce, and are easy to update.

Libraries used: none. Fonts are loaded from Google Fonts (see Credits).

## Design rationale

Full details are in the brand panel: [`docs/wireframes/brand-rules.png`](docs/wireframes/brand-rules.png).

**Brand rules**
- Colours: navy `#1B2A4A` for text and headings, amber `#FFB020` for call-to-action buttons only, cream `#FAF7F0` page background, white for cards, slate `#5B6579` for secondary text, soft amber `#FFF3D6` for tags and notices, error red `#B3123F` for errors.
- Type: Nunito ExtraBold for headings, Inter for body text.
- Shape: 12px radius on buttons and cards, 8px on inputs, pill-shaped filter chips.
- Voice: warm, short sentences, reassuring toward parents, no jargon.
- Imagery: no image files. The hero picture is a decorative "game screen" drawn with CSS shapes; the benefit icons are simple text glyphs.

**Design decisions**
1. The call-to-action button appears in the header, the hero and the form section, so a parent never has to hunt for it.
2. "How a trial class works" comes before the FAQ because it removes the biggest unknown first and keeps the FAQ shorter.

**Differences between the plan and the finished site**
- TODO: list any material differences between the wireframes and the final build, or write "none".

## Interactions

| Interaction | Purpose | Keyboard and states |
|---|---|---|
| Class finder (filter by age group and day) | Helps a parent find a suitable class before enquiring (supports the main task) | Radio buttons, selected state, live result count, empty state |
| FAQ accordion | Answers parent doubts without a long page | Native `<details>`/`<summary>`, open and closed states |
| Demo enquiry form | The primary action | Labelled fields, validation, inline errors, success message |

**The form is a demo.** It does not transmit, store or log anything entered.

## Project structure

```
src/
├── index.html        the page (the deployable site is the src folder)
├── css/
│   ├── base.css      design tokens (custom properties), reset, accessibility helpers
│   ├── hero.css, class-finder.css, steps.css, faq.css, enquiry-form.css
│   │                 page-specific layout
│   └── components/   reusable pieces, one folder each (see css/components/README.md)
│       ├── button/, text/, section/, card/, chip/, accordion/, header/, footer/
│       │             CSS only
│       └── tag/, class-card/, form-field/
│                     CSS plus a small JS file
├── js/
│   ├── classes-data.js   class data (single source of truth)
│   ├── class-finder.js   filter by age group and day
│   └── enquiry-form.js   demo form validation
└── public/images/    image assets
docs/
├── content-notes.md  copy drafts
└── wireframes/       design exports
```

## Setup, run and build

There is no build step and no dependencies to install.

1. Clone the repository.
2. Open `src/index.html` in a browser, or serve the folder locally:
   - `python3 -m http.server --directory src 8000`, then open http://localhost:8000

## Deployment (Firebase Hosting, free tier)

1. Install the CLI: `npm install -g firebase-tools`, then `firebase login`.
2. In the project root run `firebase init hosting`. Choose the public directory `src`. Answer **No** to single-page app and **No** to overwriting `index.html`.
3. Deploy: `firebase deploy --only hosting`.
4. Open the live URL in a private browser window to confirm it loads without a login.

The site will stay available for at least 14 days after submission.

**Resolved issue or verification check:** TODO: describe one real problem you found and fixed, or one check you ran, and how you confirmed it.

## Testing

TODO: fill in only what I actually tested.

**Widths tested:** TODO (planned: 360, 600, 768, 900, 1024, 1440)

| Check | Result |
|---|---|
| Keyboard navigation (tab order, filters, accordion, form) | TODO |
| Visible focus on all controls | TODO |
| Labels, heading order, image alternatives | TODO |
| Text contrast | TODO |
| Invalid and repeated form submissions | TODO |
| No horizontal overflow or overlapping elements | TODO |

**Browsers and devices:** TODO (at least two browsers and a mobile device or emulator)

## Time spent

TODO: approximate hours.

## Known limitations and future improvements

- The form is a demo only; a real version would need a secure backend and consent handling.
- Class data is hard-coded demo content.
- TODO: add anything else I notice while testing.

## Maintenance

**Update content**
- Page text: edit `src/index.html`.
- Classes shown in the finder: edit the `CLASSES` array in `src/js/classes-data.js`. The class cards and the form's "Preferred class" options are both built from it, so there is one place to change.
- Colours, fonts and spacing: edit the custom properties at the top of `src/css/base.css`.
- A shared piece such as a button, card, tag or form field: edit its folder in `src/css/components/`. The change applies everywhere it is used.
- Layout of one part of the page (for example the FAQ): edit that part's file in `src/css/`. New stylesheets or scripts must be added to `src/index.html`; `base.css` must stay first.

**Redeploy:** run `firebase deploy --only hosting` from the project root.

**Restore a previous version**
- Code: find the commit with `git log --oneline`, then `git checkout <commit> -- src` and commit the restore.
- Live site: in the Firebase console, open Hosting, then the release history, and roll back to an earlier release. Or restore the code as above and redeploy.

## Credits and disclosure

**Assets and libraries**
- Fonts: Nunito and Inter via Google Fonts, under the SIL Open Font License.
- Images and icons: TODO (my own SVG or CSS shapes, or credit the source).

**AI assistance (Claude, by Anthropic)**

| Area | Files or sections | What the AI did | What I did and how I checked it |
|---|---|---|---|
| Concept | Whole project | Suggested concept ideas; I chose this one | TODO |
| Copy | `docs/content-notes.md`, text in `src/index.html` | Drafted the first version of the wording and class and FAQ content | TODO: what I rewrote |
| Design | Figma file, `docs/wireframes/` | Built the mobile and desktop wireframes and the brand-rules panel from a layout we agreed | TODO: what I changed |
| Structure | `src/index.html` | Drafted the semantic HTML structure | TODO: what I edited and verified |
| Styles | `src/css/*.css`, `src/css/components/*/*.css` | Wrote the stylesheet from my Figma design (tokens, mobile-first layout, breakpoints, focus styles) | TODO: what I changed, and how I checked it (widths, keyboard, contrast) |
| Interactions | `src/js/*.js`, `src/css/components/*/*.js`, small edits to `src/index.html` | Wrote the class filter, the form validation and the code that fills the class options | TODO: what I changed, and how I checked it (filters, error and success states, repeated submits) |
| Planning | README outline, schedule | Suggested the plan and the section list | TODO |

TODO: add a row for any further AI help (debugging, deployment, README) as I use it. If I use none for a part, say so.

I can explain and modify this submission independently.
