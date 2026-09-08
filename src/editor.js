// src/editor.js

class Editor {
  constructor() {
    this.editorElement = document.getElementById('editor');
    this.editorElement.addEventListener('input', this.handleEditorChange.bind(this));
  }

  setupEditor() {
    // Setup the editor with default content or user-defined content
    this.editorElement.textContent = 'Type your content here...';
  }

  handleEditorChange(event) {
    // Handle changes to the editor content
    const content = event.target.textContent;
    // Optionally, send the content to the backend API
    this.updateContentToServer(content);
  }

  updateContentToServer(content) {
    // Example of sending content to the backend API
    fetch('/api/editor/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Content saved successfully:', data);
      })
      .catch(error => {
        console.error('Error saving content:', error);
      });
  }
}
