import "./Header.css";
import React from "react";
import logo from "../../assets/favicon.png";
import { useNavigate } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToPrivate = () => {
    navigate("/favourite");
  };

  return (
    <header className="header">
      <section className="header-logo-section">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="app-title pointer" onClick={goToHome}>
          Real Estate Property
        </h1>
      </section>
      <section className="header-menu-section flex-center">
        <h1 className="header-menu pointer" onClick={goToPrivate}>
          Favourite
        </h1>
        <IoHeartOutline
          className="favourite-icon badge-icon"
          onClick={goToPrivate}
        />
      </section>
    </header>
  );
};

export default Header;
