import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import SkillCard from "./SkillCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Skills({ skillContent, bg }) {

  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(revealRefs.current, {
      scrollTrigger: {
        trigger: revealRefs.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
    });
  })

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el);
    }
  };

  return (
    <SectionBackground
      id="skills"
      style={{
        "--bg": bg,
      }}
    >
      <StyledSkillsWrapper>
        {skillContent.map((skill, index) => (
          <SkillCard skill={skill} key={index} ref={addToRefs}/>
        ))}
      </StyledSkillsWrapper>
    </SectionBackground>
  );
}

const SectionBackground = styled.section`
  background-color: var(--bg, var(--color-skills));

  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    margin-top: -7em;
    margin-bottom: -7em;
    padding-top: 7em;
  }
`;

const StyledSkillsWrapper = styled.ul`
  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 1em;
  }
`;

export default Skills;
