var express = require('express');
var router = express.Router();
const User = require('../models/users.model');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//add student user
router.post('/', async (req, res, next) => {
  newUser = await newUser.save();
});

module.exports = router;
