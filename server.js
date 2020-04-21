/* eslint-disable */
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const colors = require('colors');

const app = express();
app.use(bodyParser());
const route = express.Router();

//Routes here
route.get(`/test`, (req, res) => res.status(200).send('yooooo you see this shit?'));

app.use("/api", route);
const serverPort = process.env.PORT || 3003;
const _public = path.join(__dirname, 'public');

app.listen(serverPort, "localhost", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost: ${serverPort}`.trap);
});
