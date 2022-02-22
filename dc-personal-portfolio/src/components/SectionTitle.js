import React from 'react'
import styled from 'styled-components';

function SectionTitle({ href, children }) {
  return (
    <StyledSectionTitleWrapper href={href}>{ children }</StyledSectionTitleWrapper>
  )
}

const StyledSectionTitleWrapper = styled.a`
  color: black;
  font-weight: bold;
  font-size: 1.3em;
  margin-top: -0.4em;
  display: block;
`;

export default SectionTitle