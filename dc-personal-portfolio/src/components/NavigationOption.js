import React from "react";
import styled from "styled-components";

const NavigationOption = ({ href, children }) => {
  return (
    <li>
      <StyledNavigationOption href={href}>{children}</StyledNavigationOption>
    </li>
  );
};

const StyledNavigationOption = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1em;
  color: var(--color, white);

  &:hover {
    background-color: #ff64cb;
  }
`;

export default NavigationOption;
