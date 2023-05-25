const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

//App
const app = express();

//Security Middlewares
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//Load Files
const homeRouter = require("./routes/home.router");

//Open Routes Middlewares
app.use("/", homeRouter);

module.exports = app;
