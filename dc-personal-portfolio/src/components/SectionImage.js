import React from "react";
import styled from "styled-components";

function SectionImage({ src, alt, href }) {
  return (
    <a href={ href }>
      <StyledSectionImage src={src} alt={alt} />
    </a>
  );
}

const StyledSectionImage = styled.img`
  border-radius: 1em;

  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    margin-left: 2em;
    margin-top: 1em;
  }
`;

export default SectionImage;
