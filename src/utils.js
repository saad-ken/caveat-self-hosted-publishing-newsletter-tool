// src/utils.js

class Utils {
  static validateEmail(email) {
    // Simple email validation using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  static generateRandomString(length) {
    // Generate a random string of a specified length
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static formatTimestamp(timestamp) {
    // Format a timestamp to a readable string
    const date = new Date(timestamp);
    return date.toLocaleString();
  }
}
