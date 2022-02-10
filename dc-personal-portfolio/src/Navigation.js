import React from "react";
import "./Navigation.scss";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="#portfolio">My work</a>
        </li>
        <li>
          <a href="#skills">My skills</a>
        </li>
        <li>
          <a href="#">Hire me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
