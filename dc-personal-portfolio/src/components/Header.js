import React from "react";
import styled from "styled-components";

function Header({ bg, color, children }) {
  return (
    <StyledHeaderWrapper
      style={{
        "--bg": bg,
        "--color": color,
      }}
    >
      {children}
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled.div`
  background-color: var(--bg, var(--color-header));
  
  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    display: grid;
    grid-template-columns: 66% auto;
    background-color: unset;
  }
`;

export default Header;


