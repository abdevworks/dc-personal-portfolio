import styled from "styled-components";

export const StyledCardContainer = styled.div`
  & a img {
    border-radius: 1em;
    margin-bottom: 2em;
  }

  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    display: grid;
    grid-template-columns: 40% auto;

    img {
      margin-left: 2em;
    }
  }
`;

export const StyledCardLeft = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    display: grid;
    place-content: center;
  }
`;
