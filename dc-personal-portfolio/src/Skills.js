import React from "react";
import "./Skills.scss";

function Skills() {
  const skillCard = ({ image, alt, title, description }) => (
    <li className="transition2">
      <div className="icon-container one">
        <img src={image} alt={alt} />
      </div>
      <p className="skill-title">{title}</p>
      <p className="featured-desc skill-desc">{description}</p>
    </li>
  );

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <ul>
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
        </ul>
      </div>
    </section>
  );
}

export default Skills;
