import { useState } from "react";

import Navigation from "../Navigation/Nav";
import Products from "../Products/Products";
import products from "..//db/uomo";
import Card from "../Card";
import "./Uomo.css";
import SidebarUomo from "../Sidebar/SidebarUomo";
import MarcheUomo from "../marche/MarcheUomo";

function Uomo() {
  const [selectedCategory, setSelectedCategory] = useState(null);


  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;


    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
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