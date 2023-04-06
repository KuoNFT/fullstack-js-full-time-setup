var express = require('express');
var router = express.Router();


router.post('/moderator/login', (req, res) => {
    const password = 'modpwd123';
    if (req.body.password === password) {
      res.json({ result: true });
    }
    else {
      res.json({ result: false, error: 'Invalid password for moderator' });
    }
  });
  
  
  
  
  router.post('/moderator/secretaction', (req, res) => {
    const password = 'modpwd123';
    if (req.body.password === password) {
      res.json({ result: true });
    }
    else {
      res.json({ result: false, error: 'Invalid password for moderator' });
    }
  });
  
  
  
  
  