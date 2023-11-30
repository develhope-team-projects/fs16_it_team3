import { useState } from "react";
import Products from "../Products/Products";
import products from "../db/donna";
import Card from "../Card";
import SidebarDonna from "../Sidebar/SidebarDonna";
import MarcheDonna from "../marche/MarcheDonna";
import Product from "../Product";


function Donna() {
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

  const result = filteredData(products, selectedCategory);

  return (
    <>
      <SidebarDonna handleChange={handleChange} />
      <MarcheDonna handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default Donna;