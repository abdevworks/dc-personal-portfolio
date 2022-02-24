import React from 'react'
import styled from 'styled-components';
import { StyledSectionDescriptionWrapper as StyledSectionDescription } from "./SectionDescription";

function SkillDescription({ children }) {
  return (
    <StyledSkillDescriptionWrapper>{ children }</StyledSkillDescriptionWrapper>
  )
}

const StyledSkillDescriptionWrapper = styled(StyledSectionDescription)`
  margin-bottom: 2em;
`;


export default SkillDescription