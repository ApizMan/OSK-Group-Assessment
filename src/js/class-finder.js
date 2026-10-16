/* ==========================================================================
   class-finder.js
   Class finder: filter the classes by age group and day.
   Needs CLASSES from classes-data.js.
   ========================================================================== */

'use strict';

const filtersForm = document.getElementById('class-filters');
const classList = document.getElementById('class-list');
const resultCount = document.getElementById('result-count');
const emptyState = document.getElementById('empty-state');

// Build one class card with DOM methods (textContent keeps it safe and simple)
function createClassCard(item) {
  const card = document.createElement('article');
  card.className = 'class-card';

  const tags = document.createElement('ul');
  tags.className = 'tags';
  [`Ages ${item.ages}`, item.day, item.time].forEach((text) => {
    const tag = document.createElement('li');
    tag.className = 'tag';
    tag.textContent = text;
    tags.appendChild(tag);
  });

  const title = document.createElement('h3');
  title.textContent = item.name;

  const description = document.createElement('p');
  description.textContent = item.build;

  card.append(tags, title, description);
  return card;
}

// Show the classes that match the selected age group and day
function renderClasses() {
  const age = filtersForm.elements.age.value;
  const day = filtersForm.elements.day.value;

  const matches = CLASSES.filter(
    (item) => (age === 'all' || item.ages === age) && (day === 'all' || item.day === day)
  );

  classList.replaceChildren(...matches.map(createClassCard));

  // The result count lives in an aria-live region, so screen readers announce it
  resultCount.textContent = `Showing ${matches.length} ${matches.length === 1 ? 'class' : 'classes'}`;
  emptyState.hidden = matches.length > 0;
}

filtersForm.addEventListener('change', renderClasses);
renderClasses();
