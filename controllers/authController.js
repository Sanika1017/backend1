const db = require("../config/db");

// REGISTER USER
exports.register = (req, res) => {
  const { name, email, password } = req.body;

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User Registered Successfully" });
  });
};

// LOGIN USER
exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email=? AND password=?";
  db.query(sql, [email, password], (err, result) => {
    if (result.length == 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.json({ message: "Login Success", user: result[0] });
  });
};
