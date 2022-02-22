import React from "react";

import { StyledCallToAction, StyledCallToActionTitle } from './styles/CallToAction.styled';


function CallToAction() {
  return (
    <StyledCallToAction id="call-to-action">
      <div className="call-to-action-container">
        <StyledCallToActionTitle>
          Like what you see? <span>Hire me</span>
        </StyledCallToActionTitle>
      </div>
    </StyledCallToAction>
  );
}

export default CallToAction;
