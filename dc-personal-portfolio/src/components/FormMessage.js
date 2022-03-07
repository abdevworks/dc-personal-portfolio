import React from "react";
import styled from "styled-components";

function FormMessage({ name, id }) {
  return <StyledFormMessageWrapper name={name} id={id} />;
}

const StyledFormMessageWrapper = styled.textarea`
  height: 10em;
  resize: none;
  margin-bottom: 20px;
  font-size: 1.5em;
`;

export default FormMessage;
