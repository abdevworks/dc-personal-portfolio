import React from "react";
import {
  StyledSkills,
  StyledSkillsContainer,
  StyledIconContainer,
  StyledSkillTitle,
  StyledSkillDescription,
} from "./styles/Skills.styled";

function Skills() {
  const skillCard = ({ image, alt, title, description }) => (
    <li className="transition2">
      <StyledIconContainer>
        <img src={image} alt={alt} />
      </StyledIconContainer>
      <StyledSkillTitle>{title}</StyledSkillTitle>
      <StyledSkillDescription>{description}</StyledSkillDescription>
    </li>
  );

  return (
    <StyledSkills id="skills">
      <StyledSkillsContainer>
        {skillCard({
          image: "images/dashicons_html.svg",
          alt: "html icon",
          title: "html",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem quis euismod lacus viverra.",
        })}
        {skillCard({
          image: "images/uil_java-script.svg",
          alt: "java script icon",
          title: "java script",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem quis euismod lacus viverra.",
        })}
        {skillCard({
          image: "images/akar-icons_react-fill.svg",
          alt: "react icon",
          title: "react",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem quis euismod lacus viverra.",
        })}
      </StyledSkillsContainer>
    </StyledSkills>
  );
}

export default Skills;
