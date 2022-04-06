import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import ActionHeading from "./ActionHeading";


function CallToAction({  height, padding, href, color }) {

  const actionHeadingRef = useRef();

  useEffect(() => {
    gsap.from(actionHeadingRef.current, {
      scrollTrigger: {
        trigger: actionHeadingRef.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
    });
  });


  return (
    <StyledCallToActionWrapper id="hireme" style={{
      '--height': height,
      '--padding': padding,
    }}>
      <ActionHeading color={ color } ref={actionHeadingRef}>
        Podoba ci się to co widzisz? <a href={href}><span>Zatrudnij mnie!</span></a>
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
