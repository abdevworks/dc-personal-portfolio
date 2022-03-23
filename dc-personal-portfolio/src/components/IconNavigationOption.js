import React from "react";
import styled from "styled-components";

const IconNavigationOption = ({ Icon, href = "" }) => {
  return (
    <StyledIconNavigationOption>
      <a href={href} target="_blank" rel="noreferrer noopener">
        {" "}
        {Icon && <Icon className="headerOption__icon" />}
      </a>
    </StyledIconNavigationOption>
  );
};

const StyledIconNavigationOption = styled.li`
  a {
    display: flex;
    justify-content: center;
    align-content: center;
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

export default IconNavigationOption;
