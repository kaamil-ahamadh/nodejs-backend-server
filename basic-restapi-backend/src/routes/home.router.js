const express = require("express");
const homeRouter = express.Router();

const { getWelcomeMsg } = require("../controllers/home.controller");

homeRouter.get("/", getWelcomeMsg);

module.exports = homeRouter;
