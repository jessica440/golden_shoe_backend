const express = require("express");
const app = express();
const returnOrder = require("./handlers/returnOrder");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello");
});

app.post("/return", returnOrder);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
