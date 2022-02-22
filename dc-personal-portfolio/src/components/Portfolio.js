import React from "react";
import portfolioContent from "../content";
import Card from './Card';
import { StyledPortfolio } from "./styles/Portfolio.styled";

function Portfolio() {

  return (
    <StyledPortfolio id="portfolio">
      {portfolioContent.map((item, index) =>
        <Card key={index} item={item} />
      )}
    </StyledPortfolio>
  );
}

export default Portfolio;
