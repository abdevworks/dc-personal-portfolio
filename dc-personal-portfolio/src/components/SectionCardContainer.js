import React from 'react'
import styled from 'styled-components'

function SectionCardContainer({ children }) {
  return (
    <StyledCardContainer>{ children }</StyledCardContainer>
  )
}

export const StyledCardContainer = styled.section`

  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    display: grid;
    grid-template-columns: 40% auto;
    text-align: left;
  }
`;

export default SectionCardContainer