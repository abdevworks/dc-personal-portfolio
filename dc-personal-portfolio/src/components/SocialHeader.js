import React from "react";
import SocialHeaderOption from "./SocialHeaderOption";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from "styled-components";

function SocialHeader({ position = "center" }) {

  const headerPosition = {
    left: "start",
    center: "center",
    right: "end"
  }

  return (
    <StyledSocialHeaderWrapper headerPosition = {headerPosition[position]}>
      <ul>
        <SocialHeaderOption Icon={EmailIcon} href="arkadiuszbiesiada@gmail.com"/>
        <SocialHeaderOption Icon={LinkedInIcon} href="https://www.linkedin.com/in/arkadiusz-biesiada-ab600722b/"/>
        <SocialHeaderOption Icon={GitHubIcon} href="https://github.com/abdevworks"/>
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
