import React from "react";
import styled from "styled-components";
import { StyledPortfolioWrapper } from "./Portfolio";

const SectionImage = React.forwardRef(({ src, alt, href }, ref) => {
  return (
    <a href={href}>
      <StyledSectionImage src={src} alt={alt} ref={ref} />
    </a>
  );
});

const StyledSectionImage = styled.img`
  border-radius: 1em;
  margin-bottom: 2em;

  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    margin-left: 2em;
    margin-top: 1em;
  }

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    ${StyledPortfolioWrapper} & {
      float: right;
      max-width: 500px;
    }
  }
`;

export default SectionImage;
