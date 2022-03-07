import React from "react";
import styled from "styled-components";

function FormInput({ type, name, id, marginBottom, height }) {
  return <StyledFormInputWrapper style={{
      '--marginBottom': marginBottom,
      '--height': height
  }} type={type} name={name} id={id} />;
}

const StyledFormInputWrapper = styled.input`
  margin-bottom: var(--marginBottom, 15px);
  height: var(--height, 2.5em);
`;

export default FormInput;
