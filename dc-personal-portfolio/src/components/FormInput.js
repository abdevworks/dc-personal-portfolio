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
`;

export default FormInput;
