const express = require("express");

const Actions = require("./actionModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const actions = await Actions.get();
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot find projects"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const actions = await Actions.get(req.params.id);
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot find projects"
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const actions = await Actions.insert(req.body);
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "error adding projects"
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const actions = await Actions.update(req.params.id, req.body);
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot change this projects"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const actions = await Actions.remove(req.params.id);
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot delete this projects"
    });
  }
});

module.exports = router;