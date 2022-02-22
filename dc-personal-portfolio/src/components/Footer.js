import React from "react";
import FooterDesignSvg from "./FooterDesignSvg";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { StyledFooter, StyledFooterContainer } from "./styles/Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      {/* <FooterDesignSvg /> */}
      <StyledFooterContainer>
        <Logo href="index.html">
          Arkadiusz Biesiada
        </Logo>

        <Navigation>
          <ul>
            <li>
              <a href="#portfolio">My work</a>
            </li>
            <li>
              <a href="#skills">My skills</a>
            </li>
          </ul>
        </Navigation>
      </StyledFooterContainer>
    </StyledFooter>
  );
}

export default Footer;
