import styled from "styled-components";

export const StyledPortfolio = styled.section`
  background-color: ${({ theme }) => theme.colors.portfolio};

  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    text-align: left;
    padding-top: 7em;
  }
  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    img {
      float: right;
      max-width: 500px;
    }
  }
`;
