import React from "react";
import styled from "styled-components";

const Meet = React.forwardRef(({ color, children }, ref) => {
  return (
    <StyledMeetWrapper
      style={{
        "--color": color,
      }}
      ref={ref}
    >
      <img src="images/cil_hand-point-down.svg" alt="point down" />
      <p>Poznaj {children}</p>
    </StyledMeetWrapper>
  );
});

const StyledMeetWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 250px;
  font-weight: bold;
  color: var(--color, var(--color-skills));
  align-items: center;
  justify-content: center;
  img {
    height: 1em;
    width: 1em;
    margin-right: 0.5em;
  }

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    margin: unset;
  }
`;

export default Meet;
