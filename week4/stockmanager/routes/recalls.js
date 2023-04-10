var express = require('express');
var router = express.Router();
const productsData = require('../data.js');


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
    console.log(recalls)
  });

  router.get('/byTimestamp/:timestamp', (req, res) => {
    const recalls = productsData.reduce((acc, curr) => {
      curr.batches.forEach(batch => {
        const expirationDateTimestamp = new Date(batch.expirationDate).getTime();
        if (batch.recall && expirationDateTimestamp === Number(req.params.timestamp)) {
          acc.push(curr.id);
        }
      });
      return acc;
    }, []);
    res.json(recalls);
  });
  
  

  module.exports = router;