const express = require("express");
//const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = 9003;

//app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!",
};

const messages = [welcomeMessage];

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.get("/messages", function (req, res) {
  const { id } = req.query;
  if (id !== undefined) {
    const messageToReturn = messages.find(
      (message) => message.id === Number(id)
    );
    return res.send(messageToReturn);
  }
  res.send(messages);
});

app.post("/messages", function (req, res) {
  const { from, text } = req.body;
  const ourMessageObject = {
    id: messages.length,
    from,
    text,
  };
  messages.push(ourMessageObject);
  res.send("you've POST /messages");
});

app.listen(process.env.PORT);
