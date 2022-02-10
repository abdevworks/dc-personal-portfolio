import React from "react";
import "./Header.scss";
import Navigation from "./Navigation";
import SocialHeader from "./SocialHeader";

function Header() {
  return (
    <div className="nav-container">
      <header className="header">
        <a href="index.html" class="logo">
          Arkadiusz Biesiada
        </a>
        <Navigation />
      </header>
      <SocialHeader />
    </div>
  );
}

export default Header;
