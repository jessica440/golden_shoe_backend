const db = require("../database/connection");

const sendReturnInfo = (orderNumber, quantity, reason) => {
  return db
    .query(
      "INSERT INTO returnOrder(orderNumber, quantity, reason) VALUES ($1, $2, $3) RETURNING *",
      [orderNumber, quantity, reason]
    )
    .then((res) => res.rows[0]);
};

module.exports = sendReturnInfo;
