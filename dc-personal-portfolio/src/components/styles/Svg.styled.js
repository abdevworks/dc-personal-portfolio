import styled from "styled-components";

export const StyledHeroDesignSvg = styled.svg`
  display: none;

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    display: unset;
    width: 100%;
    margin-left: -50%;
    margin-top: 15%;
  }
`;
