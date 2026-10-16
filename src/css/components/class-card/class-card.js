/* ==========================================================================
   css/components/class-card/class-card.js
   Class card: builds one card from an item in CLASSES (js/classes-data.js).
   Uses createTags() from css/components/tag/tag.js.
   Styles: css/components/class-card/class-card.css
   ========================================================================== */

'use strict';

function createClassCard(item) {
  const card = document.createElement('article');
  card.className = 'class-card';

  const title = document.createElement('h3');
  title.textContent = item.name;

  const description = document.createElement('p');
  description.className = 'text-muted text-small';
  description.textContent = item.build;

  card.append(createTags([`Ages ${item.ages}`, item.day, item.time]), title, description);
  return card;
}
