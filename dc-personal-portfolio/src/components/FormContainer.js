import React from "react";
import styled from "styled-components";

function FormContainer({ bg, color, children }) {
  return (
    <StyledFormContainer
      style={{
        "--bg": bg,
        "--color": color,
      }}
    >
      {children}
    </StyledFormContainer>
  );
}

export const StyledFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--bg, var(--color-hero));
  padding: 8% 12% 8% 12%;
  width: auto;
  flex: 0.66;

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    justify-content: end;
  }
`;

export default FormContainer;
