import React from "react";
import styled from "styled-components";
import { StyledIconNavigationWrapper } from "./IconNavigation";

const IconNavigationSocial = ({ position = "center", children }) => {
  const headerPosition = {
    left: "start",
    center: "center",
    right: "end",
  };
  return (
    <StyledIconNavigationSocial headerPosition={headerPosition[position]}>
      <ul>{children}</ul>
    </StyledIconNavigationSocial>
  );
};

export const StyledIconNavigationSocial = styled(StyledIconNavigationWrapper)`
  display: none;

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    display: flex;
    justify-content: ${({ headerPosition }) => headerPosition};
    align-self: center;
  }
`;

export default IconNavigationSocial;
