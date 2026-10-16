/* ==========================================================================
   css/components/form-field/form-field.js
   Form field (reusable): show or clear the error message under a field.
   Each field needs a paragraph with the id "<field id>-error" (see index.html).
   Styles: css/components/form-field/form-field.css
   ========================================================================== */

'use strict';

function showError(field, message) {
  const error = document.getElementById(`${field.id}-error`);
  error.textContent = message;
  error.hidden = false;
  field.setAttribute('aria-invalid', 'true');
}

function clearError(field) {
  const error = document.getElementById(`${field.id}-error`);
  error.textContent = '';
  error.hidden = true;
  field.removeAttribute('aria-invalid');
}
