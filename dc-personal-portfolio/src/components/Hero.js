import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import Meet from "./Meet";
import ScrollSvg from "./ScrollSvg";
import HeroDesignSvg from "./HeroDesignSvg";
import GridContainer from "./GridContainer";
import BackgroundColor from "./BackgroundColor";

function Hero({ title, meet, bg, meetColor }) {
  const heroConRef = useRef();
  const titleRef = useRef();
  const meetRef = useRef();
  const scrollSvgRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(heroConRef.current, {
      y: "-30%",
      opacity: 0,
      duration: 2,
      ease: "power4.out",
    });

    tl.from(
      [titleRef.current, meetRef.current, scrollSvgRef.current],
      {
        opacity: 0,
        y: -50,
        stagger: 0.3,
        duration: 2,
        ease: "power4.out",
      },
      "-=1.5"
    );

  });

  return (
    <BackgroundColor bg="var(--color-hero)">
      <GridContainer position="left" ref={heroConRef}>
        <StyledContent
          style={{
            "--bg": bg,
          }}
        >
          <StyledHeading ref={titleRef}>{title}</StyledHeading>
          <Meet color={meetColor} ref={meetRef}>{meet}</Meet>
          <ScrollSvg width="40px" ref={scrollSvgRef}/>
        </StyledContent>

        <HeroDesignSvg />
      </GridContainer>
    </BackgroundColor>
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
