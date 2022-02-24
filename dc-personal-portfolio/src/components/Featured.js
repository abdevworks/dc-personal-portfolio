import React from "react";
import styled from "styled-components";
import SectionDescription from "./SectionDescription";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import SectionImage from "./SectionImage";

function Featured({
  featuredContent: {
    projectSubtitle,
    projectTitle,
    description,
    src,
    alt,
    href,
  },
}) {
  return (
    <StyledSectionWrapper>
      <ContentCenterMd>
        <SectionSubtitle>{projectSubtitle}</SectionSubtitle>
        <SectionTitle href={href}>{projectTitle}</SectionTitle>
        <SectionDescription>{description}</SectionDescription>
      </ContentCenterMd>
      
      <SectionImage src={src} alt={alt} href={href} />
    </StyledSectionWrapper>
  );
}

const StyledSectionWrapper = styled.section`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #6e00ff;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.2;
  }

  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    text-align: left;
    display: grid;
    grid-template-columns: 40% auto;
  }
`;

const ContentCenterMd = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    display: grid;
    place-content: center;
  }
`;

export default Featured;
