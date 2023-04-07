var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const User = require('../models/users')
const OWM_API_KEY = 'ce7418650c86eae6629dfcfdda141c14';


router.post('/signup', (req, res) => {
    // Check if the user has not already been registered
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
        // User already exists in database
        res.json({ result: false, error: 'User already exists' });
      }
    });
   });

   router.post('/signin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    if (!email || !password) {
      res.json({ result: false, error: 'Missing or empty fields' });
    } else {
      User.findOne({ email, password }).then(data => {
        if (data === null) {
          res.json({ result: false, error: 'User not found' });
        } else {
          res.json({ result: true });
        }
      });
    }
  });

module.exports = router;