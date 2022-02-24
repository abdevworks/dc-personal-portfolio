import React from 'react'
import styled from 'styled-components'

function ActionHeading({ color, children }) {
  return (
    <StyledCallToActionTitle style={{
        '--color': color
    }}>{ children }</StyledCallToActionTitle>
  )
}

const StyledCallToActionTitle = styled.h1`
  margin: 0;
  padding: 0;

  span {
    color: var(--color, var(--color-skills));
    text-decoration: underline;
  }
`;

export default ActionHeading