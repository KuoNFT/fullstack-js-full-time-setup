var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const User = require('../models/users')
const OWM_API_KEY = 'ce7418650c86eae6629dfcfdda141c14';
const { checkBody } = require('./modules/checkBody');

router.post('/signup', (req, res) => {
  const expectedKeys = ['name', 'email', 'password'];
  if (checkBody(req.body, expectedKeys)) {
    User.findOne({ email: req.body.email }).then(data => {
      if (data === null) {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
   
        newUser.save().then(newDoc => {
          res.json({ result: true });
        });
      } else {
        res.json({ result: false, error: 'User already exists' });
      }
    });
  } else {
    res.json({ result: false, error: 'Invalid request body' });
  }
});

router.post('/signin', (req, res) => {
  const expectedKeys = ['email', 'password'];
  if (checkBody(req.body, expectedKeys)) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email, password }).then(data => {
      if (data === null) {
        res.json({ result: false, error: 'User not found' });
      } else {
        res.json({ result: true });
      }
    });
  } else {
    res.json({ result: false, error: 'Invalid request body' });
  }
});

module.exports = router;