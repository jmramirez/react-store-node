(async () => {
  try {
    const App = require('./express').default;
    const app = new App();
    app.listen();
  } catch (e) {
    console.log(e);
    console.error('Something went wrong initializing the server');
  }
})();
