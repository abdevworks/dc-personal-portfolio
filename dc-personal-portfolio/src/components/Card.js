import React from "react";
import SectionDescription from "./SectionDescription";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import SectionImage from "./SectionImage";
import { StyledCardContainer, StyledCardLeft } from "./styles/Card.styled";

function Card({
  item: { projectSubtitle, projectName, description, image, href, alt },
}) {
  return (
    <StyledCardContainer>
      <StyledCardLeft>
        <SectionSubtitle>{projectSubtitle}</SectionSubtitle>
        <SectionTitle>{projectName}</SectionTitle>
        <SectionDescription>{description}</SectionDescription>
      </StyledCardLeft>
      <a href={href}>
        <SectionImage src={image} alt={alt} />
      </a>
    </StyledCardContainer>
  );
}

export default Card;
