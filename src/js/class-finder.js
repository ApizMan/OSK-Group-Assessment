/* ==========================================================================
   class-finder.js
   Class finder: filter the classes by age group and day.
   Needs CLASSES from classes-data.js and createClassCard() from
   css/components/class-card/class-card.js.
   ========================================================================== */

'use strict';

const filtersForm = document.getElementById('class-filters');
const classList = document.getElementById('class-list');
const resultCount = document.getElementById('result-count');
const emptyState = document.getElementById('empty-state');

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
