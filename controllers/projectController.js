const db = require("../config/db");

// ================= GET ALL PROJECTS =================
exports.getProjects = (req, res) => {
  db.query("SELECT * FROM projects", (err, result) => {
    if (err) {
      console.log("DB Error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(result);
  });
};

// ================= ADD PROJECT =================
exports.createProject = (req, res) => {
  const { title, description, project_link, start_date, end_date } = req.body;

  // ✅ Validation
  if (!title || !description || !project_link || !start_date || !end_date) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const sql =
    "INSERT INTO projects (title, description, project_link, start_date, end_date) VALUES (?,?,?,?,?)";

  db.query(sql, [title, description, project_link, start_date, end_date], (err) => {
    if (err) {
      console.log("Insert Error:", err);
      return res.status(500).json({ error: "Insert failed" });
    }

    res.json({ message: "✅ Project Added Successfully" });
  });
};

// ================= DELETE PROJECT =================
exports.deleteProject = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM projects WHERE id=?", [id], (err) => {
    if (err) {
      console.log("Delete Error:", err);
      return res.status(500).json({ error: "Delete failed" });
    }

    res.json({ message: "🗑️ Project Deleted" });
  });
};

// ================= UPDATE PROJECT =================
exports.updateProject = (req, res) => {
  const { title, description, project_link, start_date, end_date } = req.body;
  const id = req.params.id;

  // ✅ Validation
  if (!title || !description || !project_link || !start_date || !end_date) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const sql =
    "UPDATE projects SET title=?, description=?, project_link=?, start_date=?, end_date=? WHERE id=?";

  db.query(sql, [title, description, project_link, start_date, end_date, id], (err) => {
    if (err) {
      console.log("Update Error:", err);
      return res.status(500).json({ error: "Update failed" });
    }

    res.json({ message: "✏️ Project Updated Successfully" });
  });
};
