import { useState } from "react";

import Navigation from "../Navigation/Nav";
import Products from "../Products/Products";
import products from "../db/donna";
import Card from "../Card";
import SidebarDonna from "../Sidebar/SidebarDonna";
import MarcheDonna from "../marche/MarcheDonna";


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
        ({ category, color, brand, newPrice, title }) =>
          category === selected ||
          color === selected ||
          brand === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory);

  return (
    <>
      <SidebarDonna handleChange={handleChange} />
      <Navigation />
      <MarcheDonna handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default Donna;