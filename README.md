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
- On narrow phones the header button reads "Book trial" instead of "Book a free trial", so the header does not wrap at 360px.
- The benefit icons are simple text glyphs rather than drawn icons, and the hero picture is built from CSS shapes.
- Otherwise the layout, sections and order follow the wireframes.

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

**Resolved issue or verification check:** At 360px wide the header content wrapped onto two lines. I shortened the button label on small screens and stopped the label from wrapping. I confirmed it by checking the page at 360px for horizontal overflow (none) and by looking at the header in the browser's phone view.

## Testing

**Widths tested:** 360, 600, 768, 900, 1024 and 1440px, using browser DevTools and an automated script.

| Check | Result |
|---|---|
| Keyboard navigation (tab order, filters, accordion, form) | Tab order follows the page from the skip link through the header, hero and form. Filters, FAQ and form can all be used with the keyboard. |
| Visible focus on all controls | Every control shows a solid 3px outline when focused. |
| Labels, heading order, image alternatives | Every form field has a label and an error message linked to it. One H1, then H2 sections and H3 items with no skipped levels. The page has no images, so no alternative text is needed. |
| Text contrast | No colour-contrast failures reported by an automated WCAG 2.1 AA audit (axe-core) at 360 and 1440px. |
| Invalid and repeated form submissions | An empty form shows four errors and moves focus to the first field. A bad email shows its error until fixed. A valid submit shows the demo success message and clears the form. Submitting again validates from the start. |
| No horizontal overflow or overlapping elements | No horizontal overflow at any tested width. |

**Browsers and devices:** The live site works properly in Chrome and Safari, including on a mobile phone. I also used the browser's phone emulation (iPhone 16 size) and checked the Network tab to confirm every CSS and JavaScript file loads with status 200 and the console shows no errors.

## Time spent

About 6 hours in total.

## Known limitations and future improvements

- The form is a demo only; a real version would need a secure backend and consent handling.
- Class data is hard-coded demo content.
- There are no image files and the favicon is empty, so a real version would add a logo, a favicon and real photos.
- The fonts load from Google Fonts, so they need an internet connection; without it the page falls back to system fonts.

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
- Images and icons: none from outside sources. The hero picture is drawn with CSS shapes and the benefit icons are text characters.

**AI assistance (Claude, by Anthropic)**

| Area | Files or sections | What the AI did | What I did and how I checked it |
|---|---|---|---|
| Concept | Whole project | Suggested concept ideas; I chose this one | Chose the CodeCamp Kids KL concept from the options. Compared Vue with plain HTML, CSS and JavaScript and decided to keep to plain HTML, CSS and JavaScript so the build follows the brief. |
| Copy | `docs/content-notes.md`, text in `src/index.html` | Drafted the first version of the wording and class and FAQ content | Rewrote the hero introduction and the laptop answer in the FAQ in my own words, then redeployed and read both on the live site. |
| Design | Figma file, `docs/wireframes/` | Built the mobile and desktop wireframes and the brand-rules panel in Figma from the layout we agreed | Decided the mobile and desktop layouts and the brand colours, reviewed the result and asked for changes (removed the section number labels and the wording about how the design was made, and added a prototype on the call-to-action button), and exported the frames to `docs/wireframes/`. |
| Structure | `src/index.html` | Drafted the semantic HTML structure | Decided the folder layout (`css`, `js`, `public`), moved `index.html` into `src`, and asked for the reusable parts to be split into `src/css/components/`. Edited the hero and FAQ wording in `index.html` myself and checked the result on the live site. |
| Styles | `src/css/*.css`, `src/css/components/*/*.css` | Wrote the stylesheet from my Figma design (tokens, mobile-first layout, breakpoints, focus styles) | Asked for the stylesheet to be split into one file per section and then into reusable component folders. Changed the amber colour token in `src/css/base.css` to `#ff9f1c`, then checked that the buttons still read clearly. Checked the live site at several widths and in Chrome and Safari. |
| Interactions | `src/js/*.js`, `src/css/components/*/*.js`, small edits to `src/index.html` | Wrote the class filter, the form validation and the code that fills the class options | Asked for the JavaScript to be split into separate files and the shared parts into components. Added a new class, "Pixel Artists", to `src/js/classes-data.js` and confirmed it appears in the finder and in the form's "Preferred class" dropdown. Tested the filters, error messages and success message on the live site and on a phone. |
| Planning | README outline, schedule | Suggested the plan and the section list | Decided the project structure and the order of the work, chose to keep to plain HTML, CSS and JavaScript, and asked for the reusable parts to go in a shared components folder. |
| Components refactor | `src/css/components/`, `src/index.html` | Split the stylesheet and scripts into reusable component folders and checked that the page looked identical afterwards | Asked for the components folder and where it should live. Confirmed the live page renders and works. |
| Deployment and README | `firebase.json`, `.firebaserc`, `README.md` | Gave the Firebase Hosting steps and drafted the README testing and limitations text from the results | Created the Firebase project and site, deployed it myself, and tested the live site in two browsers and on a phone. |

I can explain and modify this submission independently.
