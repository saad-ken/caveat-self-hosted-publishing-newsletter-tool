// src/index.js

import './editor.js';
import './content.js';
import './settings.js';
import './utils.js';
import './api.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the application
  const editor = new Editor();
  const contentManager = new ContentManager();
  const settings = new Settings();
  const utils = new Utils();

  // Set up event listeners
  settings.loadSettings();
  editor.setupEditor();
  contentManager.setupContent();
});
