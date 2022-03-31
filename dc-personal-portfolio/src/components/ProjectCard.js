import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import SectionDescription from "./SectionDescription";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import SectionImage from "./SectionImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProjectCard({
  item: { id, projectSubtitle, projectTitle, description, image: {src, alt}, featured },
  subtitleColor,
}) {
  const cardLeftRef = useRef();
  const imageRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from([cardLeftRef.current, imageRef.current], {
      scrollTrigger: {
        trigger: [cardLeftRef.current, imageRef.current],
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
    });
  });

  return (
    <StyledCardContainer>
      <StyledCardLeft ref={cardLeftRef}>
        <SectionSubtitle subtitleColor={subtitleColor}>
          {featured ? "Projekt wyróżniony" : projectSubtitle}
        </SectionSubtitle>
        <SectionTitle id={id}>{projectTitle}</SectionTitle>
        <SectionDescription>{description.short}</SectionDescription>
      </StyledCardLeft>

      <SectionImage src={src} alt={alt} ref={imageRef}  id={id} />
    </StyledCardContainer>
  );
}

const StyledCardContainer = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    display: grid;
    grid-template-columns: 40% auto;
    text-align: left;
  }
`;

const StyledCardLeft = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    display: grid;
    place-content: center;
    margin-bottom: 2em;
  }
`;

export default ProjectCard;
