import React from "react";
import styled from "styled-components";
import SkillCard from "./SkillCard";

function Skills({ skillContent, bg }) {
  return (
    <SectionBackground style={{
      '--bg': bg
    }}>
      <StyledSkillsWrapper>
        {skillContent.map((skill, index) => (
          <SkillCard skill={skill} key={index} />
        ))}
      </StyledSkillsWrapper>
    </SectionBackground>
  );
}

const SectionBackground = styled.section`
  background-color: var(--bg, var(--color-skills));
`;

const StyledSkillsWrapper = styled.ul`

  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 1em;
  }

  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    margin-top: -5em;
    margin-bottom: -7em;
    padding-top: 7em;
  }
`;

export default Skills;
