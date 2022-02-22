import React from "react";
import styled from "styled-components";

function ScrollSvg({ width, height}) {
  return (
    <StyledScrollSvg style={{
      '--width': width,
      '--height': height
    }} >
      <g id="scroll" transform="translate(-253 -787)">
        <g
          id="Rectangle_12"
          data-name="Rectangle 12"
          transform="translate(253 787)"
          fill="none"
          stroke="#fff"
          strokeWidth="4"
        >
          <rect width="40" height="77" rx="20" stroke="none" />
          <rect x="2" y="2" width="36" height="73" rx="18" fill="none" />
        </g>
        <circle
          className="circle"
          id="Ellipse_1"
          data-name="Ellipse 1"
          cx="11"
          cy="11"
          r="11"
          transform="translate(262 798)"
          fill="#fff"
        />
      </g>
    </StyledScrollSvg>
  );
}

const StyledScrollSvg = styled.svg`
  width: var(--width);
  height: var(--height);
  margin-top: 2em;

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    margin-top: 10em;
  }
`;

export default ScrollSvg;
