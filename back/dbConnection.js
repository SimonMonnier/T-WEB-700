const mysql = require("mysql2");

const db_connection = mysql
  .createConnection({
    host: "database",
    user: "root",
    database: "crypto",
    password: "password",
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

module.exports = db_connection;
