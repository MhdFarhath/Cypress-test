const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
      browserslist : "last 1 Chrome versions, node >= 14",

    },
  },

  e2e: {
    watchForFileChanges : false,
    defaultCommandTimeout : 4000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },


  },
});
