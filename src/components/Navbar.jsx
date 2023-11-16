import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../components/CustomButton";
import { CartBtn } from "../components/CartBtn";
import Logo from "../assets/Logo3.png";
import UserLogo from "../assets/user.svg"
import "../style/Navbar.css";


export const Navbar = () => {
  const navigate = useNavigate();

  const handleClickNav = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div className="navbar">
      <div className="prova">
      <div>
        <a href="/">
          <img className="logoNav" src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="linkNav">
        <CustomButton text="Uomo" func={() => handleClickNav("uomo")} />
        <CustomButton text="Donna" func={() => handleClickNav("donna")} />
        <CustomButton text="Scarpe" func={() => handleClickNav("scarpe")} />
      </div>
      <div className="CartNav">
        <CartBtn func={() => handleClickNav("carrello")} />
        <button className="userBtnNav" onClick={()=>handleClickNav("login")}> <div class="sign"><svg width="75px" height="75px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"> <g id="SVGRepo_bgCarrier" stroke-width="0"/> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"/> <g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg></div>
          <div className="userText">Account</div>
        </button>
      </div>
      </div>
    </div>
  );
};
