import React from "react";
import styled from "styled-components";

function FormMessage(props) {
  
  return <StyledFormMessageWrapper {...props} />;
}

const StyledFormMessageWrapper = styled.textarea`
  height: 10em;
  resize: none;
  margin-bottom: 20px;
  font-size: 1em;
  min-height: 250px;
  padding: 0.4rem 0.5rem;
  border: 2px solid lightgray;
  border-radius: 10px;
  font-family: var(--font-family);

  &:focus {
    outline: none;
    border: 2px solid var(--color-skills);
  }
`;

export default FormMessage;
