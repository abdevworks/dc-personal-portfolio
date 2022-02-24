import React from 'react'
import styled from 'styled-components';

function SectionSubtitle({ subtitleColor, children }) {
  return (
    <StyledSectionSubtitleWrapper style={{
      '--color': subtitleColor
    }}>{ children }</StyledSectionSubtitleWrapper>
  )
}

const StyledSectionSubtitleWrapper = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: var(--color, var(--color-hero));
  letter-spacing: 0.2em;
  font-size: 0.85em;
`;

export default SectionSubtitle