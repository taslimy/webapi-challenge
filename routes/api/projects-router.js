const express = require("express");

const Projects = require("../../data/helpers/projectModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.get();
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot find projects"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const projects = await Projects.get(req.params.id);
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot find projects"
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const projects = await Projects.insert(req.body);
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "error adding projects"
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const projects = await Projects.update(req.params.id, req.body);
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot delete this projects"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const projects = await Projects.remove(req.params.id);
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot delete this projects"
    });
  }
});

//  getProjectActions(projectId)
router.get("/:id/action", async (req, res) => {
  try {
    const projects = await Projects.getProjectActions(req.params.id);
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot find this projects"
    });
  }
});

module.exports = router;
