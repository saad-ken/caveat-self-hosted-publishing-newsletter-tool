// src/settings.js

class Settings {
  constructor() {
    this.settingsElement = document.getElementById('settings');
    this.settingsElement.addEventListener('input', this.handleSettingsChange.bind(this));
  }

  setupSettings() {
    // Setup the settings with default settings or user-defined settings
    this.settingsElement.textContent = 'Your settings will appear here.';
    this.loadSettingsFromServer();
  }

  loadSettingsFromServer() {
    // Example of loading settings from the backend API
    fetch('/api/settings/get')
      .then(response => response.json())
      .then(data => {
        this.settingsElement.textContent = `Current Settings: ${data.settings}`;
      })
      .catch(error => {
        console.error('Error loading settings:', error);
      });
  }

  handleSettingsChange(event) {
    // Handle changes to the settings
    const settings = event.target.textContent;
    // Optionally, send the settings to the backend API
    this.updateSettingsToServer(settings);
  }

  updateSettingsToServer(settings) {
    // Example of sending settings to the backend API
    fetch('/api/settings/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ settings }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Settings updated successfully:', data);
      })
      .catch(error => {
        console.error('Error updating settings:', error);
      });
  }
}
