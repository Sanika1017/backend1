exports.getMatches = (req, res) => {
  res.json([
    { name: "Amit", score: 80 },
    { name: "Riya", score: 65 }
  ]);
};
