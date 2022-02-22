import styled from "styled-components";

export const StyledCallToAction = styled.section`
  height: 4vh;
  padding: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
    padding: 0;
  }
`;

export const StyledCallToActionTitle = styled.h1`
  span {
    color: ${({ theme }) => theme.colors.skills};
    text-decoration: underline;
  }
`;
