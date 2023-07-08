import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);
        useEffect(() => {
            const fetchData = async () => {
                const result = await axios('http://localhost:3001/products');
                setProducts(result.data);
            }
        fetchData();
    }, []);
    // { id: 1, brand: 'Brand 1', productLine: 'Product Line 1', markedPrice: 100, pricePerUnit: 50, sizeFormat: '500gm' },
    // { id: 2, brand: 'Brand 2', productLine: 'Product Line 2', markedPrice: 200, pricePerUnit: 100, sizeFormat: '1kg' }

  

  return (
    <div>
      <h2>Product List</h2>
      {products.map(product => <Product key={product.id} details={product} />)}
    </div>
  );
}

export default ProductList;
