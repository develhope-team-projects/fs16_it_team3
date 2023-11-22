
import React from 'react';
import Card from './Card';

const Product = ({ id, img, title, prevPrice, newPrice, brand, color, category }) => {
  return (
    <Card
      key={id}
      img={img}
      title={title}
      prevPrice={prevPrice}
      newPrice={newPrice}
      brand={brand}
      color={color}
      category={category}
    />
  );
};

export default Product;
