import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import SocialHeader from "./SocialHeader";
import HeaderNavigation from "./HeaderNavigation";
import Logo from "./Logo";

function HeaderSection() {
  return (
    <Header>
      <HeaderNavigation>
        <Logo href="index.html">Arkadiusz Biesiada</Logo>
        <Navigation>
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
        </Navigation>
      </HeaderNavigation>

      <SocialHeader>
        <ul>
          <li>
            <a href="#">
              <img src="images/bytesize_mail.svg" alt="email" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/akar-icons_twitter-fill.svg" alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/akar-icons_github-fill.svg" alt="github" />
            </a>
          </li>
        </ul>
      </SocialHeader>
    </Header>
  );
}

export default HeaderSection;
