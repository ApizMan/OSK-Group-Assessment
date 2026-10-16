/* ==========================================================================
   enquiry-form.js
   Enquiry form: demo validation. Nothing is sent, saved or logged.
   Needs CLASSES from classes-data.js and showError()/clearError() from
   css/components/form-field/form-field.js.
   ========================================================================== */

'use strict';

const enquiryForm = document.getElementById('enquiry-form');
const classSelect = document.getElementById('preferred-class');
const formStatus = document.getElementById('form-status');

// Fill the "Preferred class" select from the same class data
CLASSES.forEach((item) => {
  const option = document.createElement('option');
  option.value = item.name;
  option.textContent = `${item.name} (ages ${item.ages}, ${item.day})`;
  classSelect.appendChild(option);
});

// One entry per field: how to check it and what to say when it is wrong
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validators = [
  {
    id: 'parent-name',
    isValid: (value) => value.trim() !== '',
    message: 'Please enter your name.',
  },
  {
    id: 'email',
    isValid: (value) => EMAIL_PATTERN.test(value.trim()),
    message: 'Enter a valid email, like name@example.com.',
  },
  {
    id: 'child-age',
    isValid: (value) => value !== '',
    message: "Choose your child's age.",
  },
  {
    id: 'preferred-class',
    isValid: (value) => value !== '',
    message: 'Choose a class.',
  },
];

// Returns the first invalid field (so we can move focus to it), or null
function validateForm() {
  let firstInvalid = null;

  validators.forEach(({ id, isValid, message }) => {
    const field = document.getElementById(id);
    if (isValid(field.value)) {
      clearError(field);
    } else {
      showError(field, message);
      if (!firstInvalid) {
        firstInvalid = field;
      }
    }
  });

  return firstInvalid;
}

enquiryForm.addEventListener('submit', (event) => {
  event.preventDefault(); // demo only: the form is never submitted anywhere
  formStatus.hidden = true;

  const firstInvalid = validateForm();
  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }

  // Success: show the message and clear the fields. The entered values are
  // not stored, sent or logged anywhere.
  enquiryForm.reset();
  formStatus.textContent =
    "Thanks! In a real version, we'd reply within two working days. (Demo: nothing was sent.)";
  formStatus.hidden = false;
});

// Clear a field's error as soon as the visitor fixes it
enquiryForm.addEventListener('input', (event) => {
  const rule = validators.find(({ id }) => id === event.target.id);
  if (rule && rule.isValid(event.target.value)) {
    clearError(event.target);
  }
});
