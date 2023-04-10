var express = require('express');
var router = express.Router();
const app = express();
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
    if (recalls.length > 0) {
      res.json(recalls);
    } else {
      res.status(404).send('No recalls found for this brand');
    }
  });

  router.get('/recalls/byTimestamp/:timestamp', (req, res) => {
    const recalls = productsData
      .reduce((acc, curr) => {
        curr.batches.forEach(batch => {
          if (batch.recall && new Date(batch.expirationDate).getTime() === Number(req.params.timestamp)) {
            acc.push({ id: curr.id, batchId: batch.id });
          }
        });
        return acc;
      }, []);
    if (recalls.length > 0) {
      res.json(recalls);
    } else {
      res.status(404).send('No recalls found for this timestamp');
    }
  });
  

  module.exports = router;