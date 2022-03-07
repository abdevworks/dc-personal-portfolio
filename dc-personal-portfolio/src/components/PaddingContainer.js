import React from "react";
import styled from "styled-components";

function GlobalPadding({ padding, bg, children }) {
  return (
    <StyledPaddingContainerWrapper padding={padding} bg={ bg }>
      {children}
    </StyledPaddingContainerWrapper>
  );
}

const StyledPaddingContainerWrapper = styled.div`
  background-color: var(${({ bg }) => bg});

  ${({ padding }) => padding}: var(--page-padding-medium);

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    ${({ padding }) => padding}: var(--page-padding-large);
  }
  @media only screen and (min-width: ${({ theme }) => theme.xl}) {
    ${({ padding }) => padding}: var(--page-padding-xl);
  }
  @media only screen and (min-width: ${({ theme }) => theme.xxl}) {
    ${({ padding }) => padding}: var(--page-padding-xxl);
  }
`;

export default GlobalPadding;
