var express = require('express');
var router = express.Router();
const User = require('../models/user.model');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//add student user
router.post('/', async (req, res, next) => {
  console.log(req.body);
  let newUser = new User(req.body);
  console.log('user before save :', newUser);
  newUser = await newUser.save();
  console.log(' ljslfkj ');
  console.log('user after save :', newUser);
});

module.exports = router;
