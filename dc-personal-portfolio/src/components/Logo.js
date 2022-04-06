import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Logo({ children }) {
  return <LogoLink to="/" onClick={() => window.scrollTo(0, 0)}>{children}</LogoLink>;
}

export default Logo;

const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: var(--color-logo);

`;
