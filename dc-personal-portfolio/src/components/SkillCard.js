import React from "react";
import styled from "styled-components";
import SkillTitle from "./SkillTitle";
import SkillDescription from "./SkillDescription";

function SkillCard({ skill: { image, alt, title, description } }) {
  return (
    <StyledSkillCardWrapper>
      <StyledSkillIconWrapper>
        <img src={image} alt={alt} />
      </StyledSkillIconWrapper>
      <SkillTitle>{title}</SkillTitle>
      <SkillDescription>{description}</SkillDescription>
    </StyledSkillCardWrapper>
  );
}

const StyledSkillCardWrapper = styled.li`
  background-color: white;
  padding: 4em 2em;
  border-radius: 1em;
  margin-bottom: 1em;
`;

const StyledSkillIconWrapper = styled.div`
  height: 100px;
  display: grid;
  place-content: center;
  margin: 0 auto;

  img {
    width: 80px;
  }
`;

export default SkillCard;
