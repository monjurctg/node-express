const express = require("express");

const app = express();

app.use(express.json());

const logger = (req, res, next) => {
  console.log(`${req.method}--- ${req.url}`);
  next();
};

app.get("/", logger, (req, res, next) => {
  res.json({ msg: "hello home route" });
});

app.get("/hello", logger, (req, res, next) => {
  res.json({ msg: "hello home helo route" });
});

app.listen(4000, () => [console.log("listening from 4000")]);
