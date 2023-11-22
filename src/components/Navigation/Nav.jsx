import React from "react";
import "../../style/Nav.css"
import { Link } from "react-router-dom";


const Nav = (cart) => {
  function showCart() {
    console.log(JSON.stringify(cart, null, 2));
  }
  return (
    <div className="navbar">
      <ul className="nav-menu">
            <li><button onClick={showCart}>Carrello</button></li>
            <li><Link to="/uomo">Uomo</Link></li>
            <li><Link to="/donna">Donna</Link></li>
            <li><Link to="/scarpe">Scarpe</Link></li>
            <li><Link to="/carello">Carello</Link></li>
        </ul>
    </div>
  );
};

export default Nav;
