import React from "react";
import styled from "styled-components";
import Meet from "./Meet";
import ScrollSvg from "./ScrollSvg";
import HeroDesignSvg from "./HeroDesignSvg";
import GridContainer from "./GridContainer";

function Hero({ title, meet, bg, meetColor }) {
  return (
    <GridContainer position="left" bg="var(--color-hero)">
      <StyledContent
        style={{
          "--bg": bg,
        }}
      >
        <StyledHeading>{title}</StyledHeading>
        <Meet color={meetColor}>{meet}</Meet>
        <ScrollSvg width="40px" />
      </StyledContent>

      <HeroDesignSvg />
    </GridContainer>
  );
}

const StyledContent = styled.div`
  padding: 4em;
  padding-bottom: 0;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    background-color: var(--bg, var(--color-hero));
    height: 74vh;
    padding: 6em 8em 6em 8em;
    padding-left: var(--page-padding-large);
    text-align: left;
  }
  @media only screen and (min-width: ${({ theme }) => theme.xl}) {
    padding: 6em 8em 6em 10em;
    padding-left: var(--page-padding-xl);
  }
  @media only screen and (min-width: ${({ theme }) => theme.xxl}) {
    padding: 9em 15em 6em 15em;
    padding-right: var(--page-padding-xxl);
    padding-left: var(--page-padding-xxl);
  }
`;

const StyledHeading = styled.h1`
  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    font-size: 3em;
    line-height: 1.2em;
  }
`;

export default Hero;
