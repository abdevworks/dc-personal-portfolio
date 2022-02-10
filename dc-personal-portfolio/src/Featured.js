import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <section className="featured">
      <div className="left">
        <div className="inner transition2">
          <p className="subtitle">Featured Project</p>
          <a href="" className="featured-title">
            DesignCourse.com ReDesign
          </a>

          <p className="featured-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tortor a elit velit. Vel posuere lorem neque velit auctor ut gravida
            tellus. Vel quam mauris elementum fermentum mattis ante.
          </p>
        </div>
      </div>
      <img
        className="right transition2"
        src="images/project-one.png"
        alt="featured project"
      />
    </section>
  );
}

export default Featured;
