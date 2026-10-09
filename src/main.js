/**
 * @file main.js
 * Entry point — boots FreeTubeApp once the DOM is ready.
 */

import './index.css';

import FreeTubeApp from './app.js';

window.addEventListener('DOMContentLoaded', () => {
  new FreeTubeApp();
});