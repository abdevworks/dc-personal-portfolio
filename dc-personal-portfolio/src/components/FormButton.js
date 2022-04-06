import React from "react";
import styled from "styled-components";
import { StyledFormContainer } from "./FormContainer";

function FormButton({ bg, color, children, ...rest }) {
  return (
    <StyledFormButtonWrapper
      style={{
        "--bg": bg,
        "--color": color,
      }}
      {...rest}
      
    >
      {children}
    </StyledFormButtonWrapper>
  );
}

const StyledFormButtonWrapper = styled.button`
  color: var(--color, white);
  background-color: var(--bg, var(--color-skills));
  cursor: pointer;
  font-weight: bold;
  border: none;
  height: 3em;
  width: 10em;

  &:hover {
    filter: brightness(110%);
  }

  &:disabled{
    cursor: unset;
    filter: brightness(75%);
  }

  ${StyledFormContainer} & {
    align-self: flex-end;
    margin-top: 0.5em;
    margin-bottom: 0px;
  }
`;

export default FormButton;
