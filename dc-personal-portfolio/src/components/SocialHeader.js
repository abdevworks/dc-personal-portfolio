import React from "react";
import styled from "styled-components";

function SocialHeader({ position = "center", socialMediaContent }) {

  const headerPosition = {
    left: "start",
    center: "center",
    right: "end"
  }

  return (
    <StyledSocialHeaderWrapper headerPosition = {headerPosition[position]}>
      <ul>
        {socialMediaContent.map(({ href, src, alt }) => (
          <li>
            <a href={href}>
              <img src={src} alt={alt} />
            </a>
          </li>
        ))}
      </ul>
    </StyledSocialHeaderWrapper>
  );
}

const StyledSocialHeaderWrapper = styled.div`
  display: none;

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    display: block;
    padding: 2em;
    padding-right: var(--page-padding-large);
    justify-self: ${({ headerPosition }) => headerPosition};
    align-self: center;
    
    ul {
      display: flex;
      justify-content: space-between;
      width: 7em;
      float: right;
    }

    img {
      width: 20px;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.xl}) {
    padding-right: var(--page-padding-xl);
  }
  @media only screen and (min-width: ${({ theme }) => theme.xxl}) {
    padding-right: var(--page-padding-xxl);
  }
`;

export default SocialHeader;
