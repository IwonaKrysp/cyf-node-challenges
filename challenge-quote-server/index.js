/* const { Console } = require("console");
const express = require("express");
const res = require("express/lib/response");
const app = express();

const PORT = 9002;

app.listen(PORT, () => {
  console.log(`my server is running on ${PORT}`);
});

const quotes = require("./quotes.json");

app.get("/", function (request, response) {
  response.send("Iwona's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const listener = app.listen(process.env.PORT, function () {
  console.log("My app is listening on port " + listener.address().port);
});
 */
