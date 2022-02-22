import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.header};
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em 0 2em;
  width: 100%;
  height: 100%;
`;
