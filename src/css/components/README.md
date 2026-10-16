# Components

Reusable pieces of the page. Each folder holds one component's CSS and, where the
component is built with JavaScript, its JS file. Edit a component once and every
place that uses it changes.

| Component | Files | Used in |
|---|---|---|
| `button` | button.css | Header, hero, enquiry form |
| `text` | text.css | Supporting copy, captions, filter labels, empty state |
| `section` | section.css | Every page section and the card grids |
| `card` | card.css | Benefit cards and step cards |
| `chip` | chip.css | Age and day filters |
| `tag` | tag.css, tag.js | Labels on each class card |
| `class-card` | class-card.css, class-card.js | Class finder results |
| `form-field` | form-field.css, form-field.js | The four enquiry form fields |
| `accordion` | accordion.css | FAQ questions |
| `header` | header.css | Sticky site header |
| `footer` | footer.css | Site footer |

Page-specific layout (hero, class finder, steps, FAQ, enquiry form) stays in `src/css/`.
Design tokens (colours, fonts, spacing) are in `src/css/base.css`.

Each component's CSS file starts with a comment that shows the HTML to use.
JS components are plain functions loaded with `defer` scripts in `index.html`
(`createTags`, `createClassCard`, `showError`, `clearError`). Load order matters:
`classes-data.js`, then the components, then `class-finder.js` and `enquiry-form.js`.
