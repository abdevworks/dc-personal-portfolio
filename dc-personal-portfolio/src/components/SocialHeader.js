import React from "react";
import styled from "styled-components";

function SocialHeader( { children }) {
  return (
    <StyledSocialHeaderWrapper>
      { children }
    </StyledSocialHeaderWrapper>
  );
}

const StyledSocialHeaderWrapper = styled.div`
  display: none;

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    display: block;
    padding: 2em 4em 2em 0;
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
`;

export default SocialHeader;
