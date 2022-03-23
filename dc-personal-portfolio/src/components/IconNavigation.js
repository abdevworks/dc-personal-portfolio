import React from "react";
import styled from "styled-components";

const IconNavigation = ({ position = "center", children }) => {
  const headerPosition = {
    left: "start",
    center: "center",
    right: "end",
  };

  return (
    <StyledIconNavigationWrapper headerPosition={headerPosition[position]}>
      <ul>{children}</ul>
    </StyledIconNavigationWrapper>
  );
};

export const StyledIconNavigationWrapper = styled.div`
  display: flex;
  justify-content: ${({ headerPosition }) => headerPosition};
  align-self: center;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-around;
    width: 7em;
  }

  img {
    width: 20px;
  }
`;

export default IconNavigation;
