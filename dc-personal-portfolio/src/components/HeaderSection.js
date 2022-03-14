import React from "react";
import GridContainer from "./GridContainer";
import Navigation from "./Navigation";
import SocialHeader from "./SocialHeader";
import HeaderNavigation from "./HeaderNavigation";
import NavigationOption from "./HeaderOption";
import Logo from "./Logo";

function HeaderSection({ logoText, socialMediaContent }) {
  return (
    <GridContainer position="left">
      <HeaderNavigation>
        <Logo href="index.html">{logoText}</Logo>
        <Navigation>
          <NavigationOption href="#portfolio">Projekty</NavigationOption>
          <NavigationOption href="#skills">Umiejętości</NavigationOption>
          <NavigationOption href="#hireme">Kontakt</NavigationOption>
        </Navigation>
      </HeaderNavigation>

      <SocialHeader socialMediaContent={socialMediaContent} position="right" />
    </GridContainer>
  );
}

export default HeaderSection;
