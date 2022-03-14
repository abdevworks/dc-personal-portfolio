import React from "react";
import styled from "styled-components";

function Logo({ children }) {
  return <LogoLink>{children}</LogoLink>;
}

export default Logo;

const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-logo);
  font-weight: bold;
`;
