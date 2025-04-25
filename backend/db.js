// backend/db.js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "coneplusb", // exemplo: root
  password: "SenhaForte123!",
  database: "imc_db", // exemplo: imc_db
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado ao MySQL!");
});

module.exports = connection;
