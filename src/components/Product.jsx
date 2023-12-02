import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Product = ({
  id,
  img,
  title,
  prevPrice,
  newPrice,
  brand,
  color,
  category,
  cart,
  setCart,
}) => {
  return (
    <div>
      <Link to={`/product/${id}`}>
        <Card
          key={id}
          img={img}
          title={title}
          prevPrice={prevPrice}
          newPrice={newPrice}
          brand={brand}
          color={color}
          category={category}
          cart={cart}
          setCart={setCart}
          id={id}
        />
      </Link>
    </div>
  );
};

export default Product;
