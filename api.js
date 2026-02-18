const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("API WORKING");
});



router.use("/projects", require("./routes/projectRoutes"));
router.use("/auth", require("./routes/authRoutes"));
router.use("/skills", require("./routes/skillsRoutes"));
router.use("/match", require("./routes/matchRoutes"));

module.exports = router;
