var express = require('express');
var router = express.Router();
const productsData = require('../data.js');

// Route 1 : Récupérer un produit par son ID
router.get('/byId/:id', (req, res) => {
    const product = productsData.find(p => p.id === req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  });
  
  // Route 2 : Récupérer tous les produits d'une marque
  router.get('/byBrand/:brand', (req, res) => {
    const products = productsData.filter(p => p.brand === req.params.brand);
    if (products.length > 0) {
      res.json(products);
    } else {
      res.status(404).send('No products found for this brand');
    }
  });
  
  // Route 3 : Récupérer un produit par son numéro de lot
  router.get('/byBatchId/:id', (req, res) => {
    const product = productsData.find(p => p.batches.some(b => b.id === req.params.id));
    if (product) {
      const batch = product.batches.find(b => b.id === req.params.id);
      res.json({
        id: product.id,
        brand: product.brand,
        name: product.name,
        price: product.price,
        unitPrice: product.unitPrice,
        unit: product.unit,
        batchId: batch.id,
        quantity: batch.quantity,
        shippingDate: batch.shippingDate,
        expirationDate: batch.expirationDate,
        recall: batch.recall,
      });
    } else {
      res.status(404).send('Product not found for this batch ID');
    }
  });
  


module.exports = router;
