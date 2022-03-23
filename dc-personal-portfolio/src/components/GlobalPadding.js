import React from "react";
import styled from "styled-components";

export const GlobalPadding = ({ children }) => {
  return <StyledGlobalPadding>{children}</StyledGlobalPadding>;
};

const StyledGlobalPadding = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  padding-right: var(--page-padding-large);
  padding-left: var(--page-padding-large);

  @media only screen and (min-width: ${({ theme }) => theme.xl}) {
    padding-right: var(--page-padding-xl);
    padding-left: var(--page-padding-xl);
  }
  @media only screen and (min-width: ${({ theme }) => theme.xxl}) {
    padding-right: var(--page-padding-xxl);
    padding-left: var(--page-padding-xxl);
  }
`;

export const GlobalPaddingLeft = ({ children }) => {
  return <StyledGlobalPaddingLeft>{children}</StyledGlobalPaddingLeft>;
};

const StyledGlobalPaddingLeft = styled(StyledGlobalPadding)`
  padding-right: 0;
`;

export const GlobalPaddingRight = ({ children }) => {
  return <StyledGlobalPaddingRight>{children}</StyledGlobalPaddingRight>;
};

const StyledGlobalPaddingRight = styled(StyledGlobalPadding)`
  padding-left: 0;
`;
