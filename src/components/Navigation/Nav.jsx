import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="navbar">
      <ul className="nav-menu">
      
            <li><Link to="/uomo">Uomo</Link></li>
            <li><Link to="/donna">Donna</Link></li>
            <li><Link to="/scarpe">Scarpe</Link></li>
        </ul>
    </div>
  );
};

export default Nav;
