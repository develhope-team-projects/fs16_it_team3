import { useState } from "react";

import Navigation from "../Navigation/Nav";
import Products from "../Products/Products";
import products from "../db/data";

import Sidebar from "../Sidebar/Sidebar";
import Card from "../Card";
import GenderScarpe from "../marche/GenderScarpe";

function Scarpe({cart, setCart}) {
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
        ({ category, color, brand, gender, newPrice, title }) =>
          category === selected ||
          color === selected ||
          brand === selected ||
          gender === selected ||
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
          cart={cart}
          setCart={setCart}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory );

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation cart={cart}/>
      <GenderScarpe handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default Scarpe;