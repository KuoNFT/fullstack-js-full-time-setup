
var express = require('express');
var router = express.Router();
const { checkAdminPassword } = require('../modules/checkPasswords')

checkAdminPassword()

router.post('/admin/login', (req, res) => {
    const password = 'adminazerty123';
    if (req.body.password === password) {
      res.json({ result: true });
    }
    else {
      res.json({ result: false, error: 'Invalid password for admin' });
    }
  });
  
  router.post('/admin/supersecretaction', (req, res) => {
    const password = 'adminazerty123';
    if (req.body.password === password) {
      res.json({ result: true });
    }
    else {
      res.json({ result: false, error: 'Invalid password for admin' });
    }
  });


  module.exports = router;