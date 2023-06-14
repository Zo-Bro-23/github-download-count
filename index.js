const express = require("express");
const app = express();
const repo = require("./repo");
const user = require("./user");

app.get("/repo", (req, res) => repo(req, res));
app.get("/user", (req, res) => user(req, res));

app.listen(5210);
