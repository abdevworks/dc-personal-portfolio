import React from "react";
import styled from "styled-components";

function Navigation({ color, children }) {
  return (
    <StyledNavigationWrapper
      style={{
        "--color": color,
      }}
    >
      <ul>{children}</ul>
    </StyledNavigationWrapper>
  );
}

const StyledNavigationWrapper = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    height: 100%;
    min-height: 90px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0 1em;
      color: var(--color, white);
    }

    a:hover {
      background-color: #ff64cb;
    }
  }
`;

export default Navigation;
