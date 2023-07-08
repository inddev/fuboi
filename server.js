const express = require('express');
const app = express();
const productRoutes = require('./routes/products');
const cors = require('cors');

app.use(cors());
app.use('/products', productRoutes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
