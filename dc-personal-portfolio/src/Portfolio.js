import React from "react";
import "./Portfolio.scss";

function Portfolio() {
  const project = ({
    projectSubtitle,
    projectName,
    description,
    image,
    alt,
  }) => (
    <div className="portfolio-container transition3">
      <div className="portfolio-left">
        <div className="inner">
          <p className="subtitle">{projectSubtitle}</p>
          <p className="featured-title">{projectName}</p>
          <p className="featured-desc">{description}</p>
        </div>
      </div>
      <a href="#">
        <img src={image} alt={alt} />
      </a>
    </div>
  );

  return (
    <section className="portfolio" id="portfolio">
      {project({
        projectSubtitle: "guitar app",
        projectName: "Fretastic.com",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor a elit velit. Vel posuere lorem neque velit auctor ut gravida tellus. Vel quam mauris elementum fermentum mattis ante.",
        image: "images/project-two.png",
        alt: "fretastic",
      })}
      {project({
        projectSubtitle: "guitar app",
        projectName: "Fretastic.com",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor a elit velit. Vel posuere lorem neque velit auctor ut gravida tellus. Vel quam mauris elementum fermentum mattis ante.",
        image: "images/project-two.png",
        alt: "fretastic",
      })}
      {project({
        projectSubtitle: "guitar app",
        projectName: "Fretastic.com",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor a elit velit. Vel posuere lorem neque velit auctor ut gravida tellus. Vel quam mauris elementum fermentum mattis ante.",
        image: "images/project-two.png",
        alt: "fretastic",
      })}
    </section>
  );
}

export default Portfolio;
