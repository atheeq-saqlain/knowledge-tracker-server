var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("getting the questions");
});

router.post("/add-question", function (req, res, next) {
  res.send("add new question here");
});

module.exports = router;
