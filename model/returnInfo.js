const db = require("../database/connection");

const sendReturnInfo = (order_number, quantity, reason) => {
  return db
    .query(
      "INSERT INTO return_order(order_number, quantity, reason) VALUES ($1, $2, $3) RETURNING *",
      [order_number, quantity, reason]
    )
    .then((res) => res.rows[0]);
};

module.exports = sendReturnInfo;
