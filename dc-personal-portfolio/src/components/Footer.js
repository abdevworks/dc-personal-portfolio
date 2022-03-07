import React from "react";
import FooterDesignSvg from "./FooterDesignSvg";
import Logo from "./Logo";
import Navigation from "./Navigation";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <FooterDesignSvg />
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

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.header};
  position: relative;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em 0 2em;
  width: 100%;
  height: 100%;
`;

export default Footer;