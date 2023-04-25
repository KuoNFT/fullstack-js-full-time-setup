var express = require('express');
var router = express.Router();

require('../models/connection');
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');
const uid2 = require('uid2');
const bcrypt = require('bcrypt');

const saltRounds= 10;

router.post('/signup', (req, res) => {
	if (!checkBody(req.body, ['username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }
  const hash = bcrypt.hashSync(req.body.password, 10)
  
  // Check if the user has not already been registered
  User.findOne({ username: req.body.username }).then(data => {
    if (data === null) {
      const token = uid2(32);
      const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
  
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        token: token
      });
  
      newUser.save().then(() => {
        res.json({ result: true });
      });
    } else {
      // User already exists in database
      res.json({ result: false, error: 'User already exists' });
    }
  });
});

router.post('/signin', (req, res) => {
  if (!checkBody(req.body, ['username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }
  

  User.findOne({ username: req.body.username}).then(data => {
    if (data && bcrypt.compareSync(req.body.password, data.password)) {
      res.json({ result: true, token: data.token });
    } else {
      res.json({ result: false, error: 'User not found' });
    }
  });
});

router.get('/users/canBookmark/:token', (req, res) => {
  User.findOne({ token: req.params.token }).then(data => {
    if (data) {
      res.json({ result: true, canBookmark: data.canBookmark });
    } else {
      res.json({ result: false, error: 'User not found' });
    }
  });
});


module.exports = router;
