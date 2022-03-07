import React from "react";
import styled from "styled-components";
import SectionDescription from "./SectionDescription";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import SectionImage from "./SectionImage";


function ProjectCard({
  item: { projectSubtitle, projectTitle, description, src, href, alt }, subtitleColor
}) {
  return (
    <StyledCardContainer>
      <StyledCardLeft>
        <SectionSubtitle subtitleColor={subtitleColor}>{projectSubtitle}</SectionSubtitle>
        <SectionTitle>{projectTitle}</SectionTitle>
        <SectionDescription>{description}</SectionDescription>
      </StyledCardLeft>
      <a href={href}>
        <SectionImage src={src} alt={alt} />
      </a>
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
