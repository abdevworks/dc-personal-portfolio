import React from "react";
import styled from "styled-components";

const SocialHeaderOption = ({ Icon, href = "" }) => {
  return (
    <StyledSocialHeaderOption>
      <a href={href}> {Icon && <Icon className="headerOption__icon" />}</a>
    </StyledSocialHeaderOption>
  );
};

const StyledSocialHeaderOption = styled.li`
  a {
    text-decoration: none;
    color: gray;
  }

  a:hover {
    color: black;
  }

  .headerOption__icon {
    object-fit: contain;
    height: 25px !important;
    width: 25px !important;
  }


`;

export default SocialHeaderOption;
