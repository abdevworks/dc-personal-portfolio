import React from "react";
import FooterDesignSvg from "./FooterDesignSvg";
import Logo from "./Logo";
import Navigation from "./Navigation";
import NavigationOption from "./NavigationOption";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <FooterDesignSvg />
      <StyledFooterContainer>
        <Logo>Arkadiusz Biesiada</Logo>

        <Navigation>
          <NavigationOption href="#portfolio">Projekty</NavigationOption>
          <NavigationOption href="#skills">Umiejętności</NavigationOption>
        </Navigation>
      </StyledFooterContainer>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.header};
  position: relative;
  height: 100%;
  min-height: 90px;
  max-height: 8vh;
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
