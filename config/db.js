const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "127.0.0.1", 
  host: "localhost",
  user: "root",
  password: "",   // ✅ Keep empty for XAMPP
  database: "skillsync",
   port: 3307 
});

db.connect(err => {
  if (err) console.log(err);
  else console.log("MySQL Connected");
});

module.exports = db;
