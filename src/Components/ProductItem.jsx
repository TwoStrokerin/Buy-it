import React from 'react';

const ProductItem = ({ product }) => {

    const importAll = (r) => {
        let images = {};
        r.keys().forEach((item, index) => {
          images[item.replace('./', '')] = r(item);
        });
        return images;
      };

    const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

    const productImage = images[product.image];

  return (
    <div className="product-item">
      <img src={productImage} alt={product.name} />
      <h3>{product.name}</h3>
      <p className='product-category'>{product.category}</p>
      <p className='product-price'>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductItem;
