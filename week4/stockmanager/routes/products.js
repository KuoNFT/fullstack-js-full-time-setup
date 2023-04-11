var express = require('express');
var router = express.Router();
const productsData = require('../data.js');

// Route 1 : Récupérer un produit par son ID
router.get('/byId/:id', (req, res) => {
  const {id} = req.params;
    const product = productsData.find(p => p.id === Number(id));
    res

  });
  
  // Route 2 : Récupérer tous les produits d'une marque
  router.get('/byBrand/:brand', (req, res) => {
    const {brand} = req.params;
    const products = productsData.filter(p => p.brand === brand);
  });
  
  // Route 3 : Récupérer un produit par son numéro de lot
  router.get('/byBatchId/:id', (req, res) => {
    const {id} = req.params;
    const product = productsData.find(p => p.batches.find(b => b.id === Number(id)));
    res.json({product})
  })
  


module.exports = router;
