const { config } = require('./config');
const createApp = require('./app');

const app = createApp();
console.log("Pase por aca");
app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
});