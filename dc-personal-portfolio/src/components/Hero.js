import React from "react";
import styled from "styled-components";
import Meet from "./Meet";
import ScrollSvg from "./ScrollSvg";
import HeroDesignSvg from "./HeroDesignSvg";

function Hero({ title, meet, color, bg, meetColor }) {
  return (
    <StyledHero
      style={{
        "--color": color,
        "--bg": bg,
      }}
    >
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
    </StyledHero>
  );
}

const StyledHero = styled.div`
  background-color: var(--bg, var(--color-hero));
  color: var(--color, white);
  display: grid;
  text-align: center;
  padding: 4em;

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    height: 90vh;
    display: grid;
    grid-template-columns: 66% auto;
    background-color: unset;
    padding: 0;
  }
`;

const StyledContent = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    background-color: var(--bg, var(--color-hero));
    padding: 6em 8em 6em 4em;
    text-align: left;
  }
`;

const StyledHeading = styled.h1`
  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    font-size: 3em;
    line-height: 1.2em;
  }
`;

export default Hero;
