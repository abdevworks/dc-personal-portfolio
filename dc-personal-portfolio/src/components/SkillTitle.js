import React from "react";
import styled from "styled-components";

function SkillTitle({ children }) {
  return <StyledSkillTitleWrapper>{children}</StyledSkillTitleWrapper>;
}

const StyledSkillTitleWrapper = styled.p`
  font-weight: bold;
  text-transform: uppercase;
`;

export default SkillTitle;
