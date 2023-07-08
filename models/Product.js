const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  brand: String,
  productLine: String,
  markedPrice: Number,
  pricePerUnit: Number,
  sizeFormat: String,
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);