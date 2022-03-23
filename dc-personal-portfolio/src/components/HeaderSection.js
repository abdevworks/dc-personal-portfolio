import React from "react";
import GridContainer from "./GridContainer";
import Navigation from "./Navigation";
import SocialHeader from "./SocialHeader";
import HeaderNavigation from "./HeaderNavigation";
import NavigationOption from "./HeaderOption";
import Logo from "./Logo";
import { GlobalPaddingRight } from "./GlobalPadding";

function HeaderSection({ logoText }) {
  return (
    <GridContainer position="left">
      <HeaderNavigation>
        <Logo>{logoText}</Logo>
        <Navigation>
          <NavigationOption href="/#portfolio">Projekty</NavigationOption>
          <NavigationOption href="/#skills">Umiejętości</NavigationOption>
          <NavigationOption href="/#hireme">Kontakt</NavigationOption>
        </Navigation>
      </HeaderNavigation>

      <GlobalPaddingRight>
        <SocialHeader position="right" />
      </GlobalPaddingRight>
    </GridContainer>
  );
}

export default HeaderSection;
