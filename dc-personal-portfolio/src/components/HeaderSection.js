import React from "react";
import GridContainer from "./GridContainer";
import Navigation from "./Navigation";
import SocialHeader from "./SocialHeader";
import HeaderNavigation from "./HeaderNavigation";
import Logo from "./Logo";

function HeaderSection({ logoText, socialMediaContent }) {
  return (
    <GridContainer position="left">
        <HeaderNavigation>
          <Logo href="index.html">{logoText}</Logo>
          <Navigation>
            <ul>
              <li>
                <a href="#portfolio">My work</a>
              </li>
              <li>
                <a href="#skills">My skills</a>
              </li>
              <li>
                <a href="#hireme">Hire me</a>
              </li>
            </ul>
          </Navigation>
        </HeaderNavigation>

        <SocialHeader
          socialMediaContent={socialMediaContent}
          position="right"
        />

    </GridContainer>
  );
}

export default HeaderSection;
