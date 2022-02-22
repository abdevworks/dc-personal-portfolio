import React from 'react'
import styled from 'styled-components';


function HeaderNavigation({ children }) {
  return (
    <StyledHeaderNavigationWrapper>{ children }</StyledHeaderNavigationWrapper>
  )
}

const StyledHeaderNavigationWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2em;

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    background-color: #6700ee;
    padding: 2em 2em 2em 4em;
  }
`;


export default HeaderNavigation