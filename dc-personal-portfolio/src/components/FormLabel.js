import React from "react";
import styled from "styled-components";

function FormLabel({ color, fontWeight, marginBottom, id, children }) {
  return (
    <StyledFormLabelWrapper
      htmlFor={id}
      style={{
        "--color": color,
        "--fontWeight": fontWeight,
        "--marginBottom": marginBottom,
      }}
    >
      {children}
    </StyledFormLabelWrapper>
  );
}

const StyledFormLabelWrapper = styled.label`
  color: var(--color, white);
  font-weight: var(--fontWeight, bold);
  margin-bottom: var(--marginBottom, 5px);
`;

export default FormLabel;
