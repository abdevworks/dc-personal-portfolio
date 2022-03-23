import React from "react";
import styled from "styled-components";

function FooterDesignSvg() {
  return (
    <StyledFooterSvg
      xmlns="http://www.w3.org/2000/svg"
      className="footer-hero-design"
      width="660"
      height="200"
      viewBox="0 0 686 400"
    >
      <g id="blockdesign" transform="translate(-935 -289)">
        <rect
          data-name="Rectangle 2"
          width="172"
          height="172"
          rx="19"
          transform="translate(1107 289)"
          fill="#6e00ff"
        />
        <rect
          data-name="Rectangle 10"
          width="172"
          height="172"
          rx="86"
          transform="translate(1107 461)"
          fill="#ff64cb"
        />
  
        <rect
          data-name="Rectangle 3"
          width="172"
          height="172"
          rx="19"
          transform="translate(1280 461)"
          fill="#6e00ff"
          opacity="0.57"
        />
      </g>
    </StyledFooterSvg>
  );
}

const StyledFooterSvg = styled.svg`
  display: none;
  position: absolute;
  bottom: 0;
  left: -240px;
  top: -175px;

  overflow-y: hidden;

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    display: inline;
  }
`

export default FooterDesignSvg;
