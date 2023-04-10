var express = require('express');
var router = express.Router();
const productsData = require('../data');


router.get('/recalls/byBrand/:brand', (req, res) => {
    const recalls = productsData
      .filter(p => p.brand === req.params.brand)
      .reduce((acc, curr) => {
        curr.batches.forEach(batch => {
          if (batch.recall) {
            acc.push({ id: curr.id, batchId: batch.id });
          }
        });
        return acc;
      }, []);
    
    res.json(recalls);
  });

  router.get('/recalls/byTimestamp/:timestamp', (req, res) => {
    const recalls = productsData.reduce((acc, curr) => {
      curr.batches.forEach(batch => {
        const expirationDateTimestamp = new Date(batch.expirationDate).getTime();
        if (batch.recall && expirationDateTimestamp === Number(req.params.timestamp)) {
          acc.push({ id: curr.id, batchId: batch.id });
        }
      });
      return acc;
    }, []);
    res.json(recalls);
  });
  
  

  module.exports = router;