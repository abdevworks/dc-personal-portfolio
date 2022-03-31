import React from "react";
import styled from "styled-components";

const ActionHeading = React.forwardRef(({ color, children }, ref) => {
  return (
    <StyledCallToActionTitle
      style={{
        "--color": color,
      }}
      ref={ref}
    >
      {children}
    </StyledCallToActionTitle>
  );
});

const StyledCallToActionTitle = styled.h1`
  margin: 0;
  padding: 0;

  span {
    color: var(--color, var(--color-skills));
    text-decoration: underline;
  }
`;

export default ActionHeading;
