import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

function Featured({ portfolioContent }) {
  console.log(portfolioContent);
  return (
    <StyledSectionWrapper>
      {portfolioContent.map(
        (item, index) =>
          item.featured && <ProjectCard key={index} item={item} />
      )}
    </StyledSectionWrapper>
  );
}

export const StyledSectionWrapper = styled.section`
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
    opacity: 0.2;
  }
`;

export default Featured;
