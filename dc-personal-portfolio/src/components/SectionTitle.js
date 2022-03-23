import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SectionTitle({ id, children }) {
  return (
    <StyledSectionTitleWrapper to={`/projects/${id}`}>
      {children}
    </StyledSectionTitleWrapper>
  );
}
 
const StyledSectionTitleWrapper = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.3em;
  margin-top: -0.4em;
  display: block;
`;

export default SectionTitle;
