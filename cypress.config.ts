import { defineConfig } from "cypress";

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.REACT_APP_BASE_URL,
    setupNodeEvents(on, config) {},
    supportFile: "cypress/support/commands.ts",
  },
});
