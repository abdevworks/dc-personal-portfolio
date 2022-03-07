import React from "react";
import styled from "styled-components";

function GridContainer({ position = "auto", minScreenWidth = "large", bg, color, children }) {
  
    const mainContentScreenCoverage = "66%"
    const gridPosition = {
    left: `${mainContentScreenCoverage} auto`,
    right: `auto ${mainContentScreenCoverage}`,
    auto: "auto auto",
  };
  let gridTemplateColumns = gridPosition[position];

  return (
    <StyledGridWrapper
      minWidth={minScreenWidth}
      gridTemplateColumns={gridTemplateColumns}
      style={{
        "--bg": bg,
        "--color": color,
      }}
    >
      {children}
    </StyledGridWrapper>
  );
}

export const StyledGridWrapper = styled.div`
  background-color: var(--bg, var(--color-header));
  color: var(--color, white);

  @media only screen and (min-width: ${({ theme, minWidth }) => theme[minWidth]}) {
    display: grid;
    grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
    background-color: unset;
  }
`;

export default GridContainer;
