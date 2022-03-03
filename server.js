const connect = require("./config/db.js");
const app = require("./index.js");

const port = process.env.PORT || 4000;

app.listen(port, async () => {
  await connect();
  console.log(`Listening on port number ${port}`);
});
