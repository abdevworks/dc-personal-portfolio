import React from "react";
import styled from "styled-components";

function FormInput(props) {
  
  const {marginBottom, height, ...rest} = props;
  
  return <StyledFormInputWrapper style={{
      '--marginBottom': marginBottom,
      '--height': height
  }} {...rest} />;
}

const StyledFormInputWrapper = styled.input`
  margin-bottom: var(--marginBottom, 15px);
  height: var(--height, 2.5em);
  padding: 0.4rem 0.5rem;
  border: 2px solid lightgray;
  border-radius: 10px;
  
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
    border: 2px solid var(--color-skills);
  }
`;

export default FormInput;
