import React from 'react'
import styled from 'styled-components';

function SectionDescription({ children }) {
  return (
    <StyledSectionDescriptionWrapper>{ children }</StyledSectionDescriptionWrapper>
  )
}

export const StyledSectionDescriptionWrapper = styled.p`
  color: #3b3b3b;
  margin-bottom: 3em;
  font-size: 0.85em;
  line-height: 1.8em;
  font-weight: 500;
`;

export default SectionDescription