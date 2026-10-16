/* ==========================================================================
   css/components/tag/tag.js
   Tag (reusable): builds a list of small labels.
   Usage: createTags(['Ages 8-9', 'Sat', '10:00']) returns a <ul class="tags">.
   Styles: css/components/tag/tag.css
   ========================================================================== */

'use strict';

function createTags(labels) {
  const list = document.createElement('ul');
  list.className = 'tags';
  labels.forEach((label) => {
    const tag = document.createElement('li');
    tag.className = 'tag';
    tag.textContent = label;
    list.appendChild(tag);
  });
  return list;
}
