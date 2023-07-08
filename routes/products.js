const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, brand: 'Brand 1', productLine: 'Product Line 1', markedPrice: 100, pricePerUnit: 50, sizeFormat: '500gm' },
    { id: 2, brand: 'Brand 2', productLine: 'Product Line 2', markedPrice: 200, pricePerUnit: 100, sizeFormat: '1kg' },
    // Add as many products as you want for testing
  ]);
});

module.exports = router;
