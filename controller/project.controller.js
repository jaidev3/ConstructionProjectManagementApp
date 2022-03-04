const express = require("express");
const router = express.Router();
const auth = require("../middleware/authentication");
const { body, validationResult } = require("express-validator");

//load project/user module
const Project = require("../model/project.model");
const User = require("../model/user.model");

// @route    POST api/project
// @desc     Create or update user project
// @access   Private(infuture)...currently Public
router.post("/", async (req, res) => {
  const user = "621cd85d82f38a56e120941a";

  let project = await Project.create({
    project_name: req.body.project_name,
    company: req.body.company,
    location: req.body.location,
    description: req.body.description,
    date: req.body.date,
    user: user,
  });
  return res.status(200).json({ project: project });
});

// @route    GET api/project
// @desc     Get all projects
// @access   Private(infuture)...currently Public

//get all available projects

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().populate("user", ["name", "avatar"]);
    ////////pagination for future
    return res.json(projects);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

///get project details by id
router.get("/:id", async (req, res) => {
  try {
    const projects = await Project.findById(req.params.id).lean().exec();
    return res.json({ projects });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

///update project details by id
router.patch("/:id", async (req, res) => {
  try {
    const projects = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(projects);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

///delete project by id
router.delete("/:id", async (req, res) => {
  try {
    const projects = await Project.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.json(projects);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
