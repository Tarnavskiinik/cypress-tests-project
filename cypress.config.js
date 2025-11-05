const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.google.com/',
    viewportWidth: 1440,
    viewportHeight: 900,
    video: false,
    retries: 1,
    defaultCommandTimeout: 100000,
    pageLoadTimeout: 60000,
    setupNodeEvents(on, config) {
    },
  },
});