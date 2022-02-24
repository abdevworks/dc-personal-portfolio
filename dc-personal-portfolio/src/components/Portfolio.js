import React from "react";
import styled from "styled-components";
import ProjectCard from './ProjectCard';


function Portfolio({ portfolioContent, subtitleColor, bg }) {

  return (
    <StyledPortfolioWrapper id="portfolio" style={{
      '--bg': bg
    }}>
      {portfolioContent.map((item, index) =>
        <ProjectCard key={index} item={item} subtitleColor={subtitleColor}/>
      )}
    </StyledPortfolioWrapper>
  );
}

export const StyledPortfolioWrapper = styled.section`
  background-color: var(--bg, var(--color-portfolio));

  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    text-align: left;
    padding-top: 7em;
  }
`;

export default Portfolio;
