import React from "react";
import styled from "styled-components";
import ActionHeading from "./ActionHeading";


function CallToAction({  height, padding, color }) {
  return (
    <StyledCallToActionWrapper id="hireme" style={{
      '--height': height,
      '--padding': padding
    }}>
      <ActionHeading color={ color }>
        Like what you see? <span>Hire me</span>
      </ActionHeading>
    </StyledCallToActionWrapper>
  );
}

const StyledCallToActionWrapper = styled.section`
  height: var(--height, 4vh);
  padding: var(--padding, 70px );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CallToAction;
