const db = require("./database/connection");

function returnOrder(req, res) {
  db.query("SELECT * FROM return_order").then((res) => {
    console.log("result", res);
  });
  res.writeHead(200, { "content-type": "text/html" });
  res.end("<h1>Hello</h1>");
}
