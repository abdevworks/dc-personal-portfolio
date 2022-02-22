import React from 'react'
import styled from 'styled-components';

function SectionSubtitle({ children }) {
  return (
    <StyledSectionSubtitleWrapper>{ children }</StyledSectionSubtitleWrapper>
  )
}

const StyledSectionSubtitleWrapper = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: #6e00ff;
  letter-spacing: 0.2em;
  font-size: 0.85em;
`;

export default SectionSubtitle