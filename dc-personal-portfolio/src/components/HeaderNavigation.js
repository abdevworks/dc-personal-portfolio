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

  background-color: var(--color-header);
  padding: 2em;

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    padding-left: var(--page-padding-large);
  }
  @media only screen and (min-width: ${({ theme }) => theme.xl}) {
    padding-left: var(--page-padding-xl);
  }
  @media only screen and (min-width: ${({ theme }) => theme.xxl}) {
    padding-left: var(--page-padding-xxl);
  }
`;


export default HeaderNavigation