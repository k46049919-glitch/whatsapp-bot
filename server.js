server.js
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WhatsApp Bot Running ✅");
});

app.post("/webhook", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
