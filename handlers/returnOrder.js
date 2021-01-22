const db = require("./database/connection");

// function returnOrder(req, res) {
//   db.query("SELECT * FROM return_order").then((res) => {
//     console.log("result", res);
//   });
//   res.writeHead(200, { "content-type": "text/html" });
//   res.end("<h1>Hello</h1>");
// }

const returnOrder = (req, res, next) => {
  const id = req.return_order.id;
  const order_number = req.return_order.order_number;
  const quantity = req.return_order.quantity;
  const reason = req.return_order.reason;

  db(order_number, quantity, reason)
    .then(() => {
      res.status(201).send({
        message: "returns generated",
      });
    })
    .catch(next);
};

module.exports = returnOrder;
