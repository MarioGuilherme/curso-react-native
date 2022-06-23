const express = require("express");
const app = express();
const db = require("./Config/db");
const consign = require("consign");

consign()
    .include("./Config/passport.js")
    .then("./Config/middlewares.js")
    .then("./api")
    .then("./Config/routes.js")
    .into(app);

app.db = db;

app.listen(3000, () => console.log("Backend executando..."));