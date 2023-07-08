import React from 'react';

const Product = ({ details }) => {
  
    return (
        <div>
        <h3>{details.brand}</h3>
        <p>Product Line: {details.productLine}</p>
        <p>Marked Price: {details.markedPrice}</p>
        <p>Price per Unit: {details.pricePerUnit}</p>
        <p>Size Format: {details.sizeFormat}</p>
      </div>
    );
}

export default Product;
