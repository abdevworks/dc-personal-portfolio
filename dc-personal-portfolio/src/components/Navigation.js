import React from "react";
import styled from "styled-components";



function Navigation({ color, children }) {
  return (
    <StyledNavigationWrapper style={{
      '--color': color
    }}>
      { children }
    </StyledNavigationWrapper>
  );
}

const StyledNavigationWrapper = styled.nav`
  ul {
    display: flex;

    a {
      display: block;
      padding: 0 1em;
      color: var(--color, white);
    }
  }
`;


export default Navigation;
