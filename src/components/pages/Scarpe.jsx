import { useState } from "react";

import Navigation from "../Navigation/Nav";
import Products from "../Products/Products";
import products from "../db/data";

import Sidebar from "../Sidebar/Sidebar";
import GenderScarpe from "../marche/GenderScarpe";
import Product from "../Product";

function Scarpe() {
  const [selectedCategory, setSelectedCategory] = useState(null);



  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected) {
    let filteredProducts = products;
  
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, brand, gender, price, title }) =>
          category === selected ||
          color === selected ||
          brand === selected ||
          gender === selected ||
          title === selected ||
          (price <= selected && price >= selected - 50)
      );
    }
  
    return filteredProducts.map((product) => (
      <Product
        key={product.id}
        id={product.id}
        img={product.img}
        title={product.title}
        prevPrice={product.prevPrice}
        newPrice={product.newPrice}
        brand={product.brand}
        color={product.color}
        category={product.category}
      />
    ));
  }

  const result = filteredData(products, selectedCategory );

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation />
      <GenderScarpe handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default Scarpe;