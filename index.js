const express = require("express");
const app = express();
app.use(express.json());

//import controller
const userController = require("./controller/user.controller");
const projectController = require("./controller/project.controller");

///using controllers
app.use("/api/user", userController);
app.use("/api/project", projectController);

module.exports = app;
