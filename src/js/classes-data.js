/* ==========================================================================
   classes-data.js
   Class data: the single source of truth for the class finder and the form.
   Load order: this file must come before class-finder.js and enquiry-form.js.
   ========================================================================== */

"use strict";

// To add or change a class, edit this array only. The class cards and the
// form's "Preferred class" options are both built from it.
const CLASSES = [
  {
    name: "Block Builders",
    ages: "8-9",
    day: "Sat",
    time: "10:00-11:30",
    build: "A catch-the-fruit game in Scratch",
  },
  {
    name: "Story Makers",
    ages: "8-9",
    day: "Sun",
    time: "10:00-11:30",
    build: "An animated story with sound",
  },
  {
    name: "Game Lab 1",
    ages: "10-12",
    day: "Sat",
    time: "13:00-15:00",
    build: "A platform game with levels",
  },
  {
    name: "Game Lab 2",
    ages: "10-12",
    day: "Sun",
    time: "13:00-15:00",
    build: "A quiz game with scores",
  },
  {
    name: "Web Starters",
    ages: "10-12",
    day: "Sat",
    time: "15:30-17:00",
    build: "Their first personal web page",
  },
  {
    name: "Robot Brains",
    ages: "10-12",
    day: "Sun",
    time: "15:30-17:00",
    build: "Simulated robot challenges",
  },
  {
    name: "Pixel Artists",
    ages: "8-9",
    day: "Sat",
    time: "13:00-14:30",
    build: "Their own pixel-art character",
  },
];
