import "./Header.css";
import React from "react";
import logo from "../../assets/favicon.png";

const Header = () => {
  return (
    <header className="header ">
      <img className="logo" src={logo} alt="logo" />
      <h1 className="app-title">Real Estate Property</h1>
    </header>
  );
};

export default Header;
