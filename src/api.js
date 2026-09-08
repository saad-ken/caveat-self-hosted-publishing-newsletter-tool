// src/api.js

class API {
  static async fetchContent() {
    // Fetch content from the backend API
    const response = await fetch('/api/content/get');
    if (!response.ok) {
      throw new Error(`Error fetching content: ${response.status}`);
    }
    return await response.json();
  }

  static async saveContent(content) {
    // Save content to the backend API
    const response = await fetch('/api/editor/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });
    if (!response.ok) {
      throw new Error(`Error saving content: ${response.status}`);
    }
    return await response.json();
  }

  static async getSettings() {
    // Get settings from the backend API
    const response = await fetch('/api/settings/get');
    if (!response.ok) {
      throw new Error(`Error fetching settings: ${response.status}`);
    }
    return await response.json();
  }

  static async saveSettings(settings) {
    // Save settings to the backend API
    const response = await fetch('/api/settings/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ settings }),
    });
    if (!response.ok) {
      throw new Error(`Error saving settings: ${response.status}`);
    }
    return await response.json();
  }
}

export default API;
