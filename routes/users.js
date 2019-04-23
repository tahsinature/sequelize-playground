var express = require('express');
var router = express.Router();
var m = require('../models');
var User = m.User;

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await User.findAll();
  res.send(users);
});

module.exports = router;
