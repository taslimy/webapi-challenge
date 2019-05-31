const express = require("express");

const Projects = require("./projectModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(" Hello from project route? ");
});

module.exports = router;
