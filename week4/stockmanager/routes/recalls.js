var express = require('express');
var router = express.Router();
const productsData = require('../data.js');
const moment = require('moment')

router.get('/byBrand/:brand', (req, res) => {
    const recalls = productsData
      .filter(p => p.brand === req.params.brand)
      .reduce((acc, curr) => {
        curr.batches.forEach(batch => {
          if (batch.recall && !acc.includes(curr.id)) {
            acc.push(curr.id);
          }
        });
        return acc;
      }, []);
    
    res.json(recalls);
  });

  router.get('/byTimestamp/:timestamp', (req, res) => {
    const {timestamp} = req.params;
    const date = moment(Number(timestamp)).format("YYYY-MM-DD");
    const productsRecalled = data.filter(product => product.batches.find(batch => batch.recall && batch.expirationDate === date ))
    const products = productsRecalled.map(product => product.id )
    res.json({products })
  });
  
  

  module.exports = router;