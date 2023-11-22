import { useState } from "react";

import Navigation from "../Navigation/Nav";
import Products from "../Products/Products";
import products from "..//db/uomo";
import Card from "../Card";

import SidebarUomo from "../Sidebar/SidebarUomo";
import MarcheUomo from "../marche/MarcheUomo";
import Product from "../Product";

function Uomo() {
  const [selectedCategory, setSelectedCategory] = useState(null);


  // ----------- Radio Filtering -----------
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
        ({ category, color, brand, price, title }) =>
          category === selected ||
          color === selected ||
          brand === selected ||
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

  const result = filteredData(products, selectedCategory, );

  return (
    <>
      <SidebarUomo handleChange={handleChange} />
      <Navigation />
      <MarcheUomo handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default Uomo;