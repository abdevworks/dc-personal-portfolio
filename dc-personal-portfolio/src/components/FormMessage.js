import React from "react";
import styled from "styled-components";

function FormMessage(props) {
  
  return <StyledFormMessageWrapper {...props} />;
}

const StyledFormMessageWrapper = styled.textarea`
  height: 10em;
  resize: none;
  margin-bottom: 20px;
  font-size: 1.25em;
  min-height: 250px;
`;

export default FormMessage;
