const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Save Skills
router.post("/saveSkills", (req, res) => {
  const { user_id, skill_name } = req.body;

  const sql = "INSERT INTO skills (user_id, skill_name) VALUES (?, ?)";
  db.query(sql, [user_id, skill_name], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ msg: "DB error" });
    }
    res.json({ msg: "Skill saved" });
  });
});

module.exports = router;
