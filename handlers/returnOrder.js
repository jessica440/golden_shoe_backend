// const db = require("./database/connection");
const returnInfo = require("../model/returnInfo");

// function returnOrder(req, res) {
//   db.query("SELECT * FROM return_order").then((res) => {
//     console.log("result", res);
//   });
//   res.writeHead(200, { "content-type": "text/html" });
//   res.end("<h1>Hello</h1>");
// }

const returnOrder = (req, res, next) => {
  const id = req.returnOrder.id;
  const orderNumber = req.returnOrder.ordernumber;
  const quantity = req.returnOrder.quantity;
  const reason = req.returnOrder.reason;

  returnInfo(orderNumber, quantity, reason)
    .then(() => {
      res.status(201).send({
        message: "returns generated",
      });
    })
    .catch(next);
};

module.exports = returnOrder;
