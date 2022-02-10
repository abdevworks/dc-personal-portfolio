import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1 className="stagger1">Beutifuly Crafted Web Experiences</h1>
        <div className="meet stagger1">
          <img src="images/cil_hand-point-down.svg" alt="point down" />
          <p>Meet Arkadiusz Biesiada</p>
        </div>
        <svg className="scroll stagger1" width="40" height="77" viewBox="0 0 40 77">
          <g id="scroll" transform="translate(-253 -787)">
            <g
              id="Rectangle_12"
              data-name="Rectangle 12"
              transform="translate(253 787)"
              fill="none"
              stroke="#fff"
              stroke-width="4"
            >
              <rect width="40" height="77" rx="20" stroke="none" />
              <rect x="2" y="2" width="36" height="73" rx="18" fill="none" />
            </g>
            <circle
              className="circle"
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx="11"
              cy="11"
              r="11"
              transform="translate(262 798)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="hero-design"
        width="686"
        height="688"
        viewBox="0 0 686 688"
      >
        <g id="blockdesign" transform="translate(-935 -289)">
          <rect
            className="square-anim"
            data-name="Rectangle 2"
            width="172"
            height="172"
            rx="19"
            transform="translate(1277 289)"
            fill="#6e00ff"
          />
          <rect
            className="square-anim"
            data-name="Rectangle 10"
            width="172"
            height="172"
            rx="86"
            transform="translate(1277 461)"
            fill="#ff64cb"
          />
          <rect
            className="square-anim"
            data-name="Rectangle 8"
            width="172"
            height="172"
            rx="19"
            transform="translate(1449 461)"
            fill="#e5d5fa"
          />
          <rect
            className="square-anim"
            data-name="Rectangle 5"
            width="172"
            height="172"
            rx="19"
            transform="translate(1277 633)"
            fill="#6e00ff"
          />
          <rect
            className="square-anim"
            data-name="Rectangle 3"
            width="172"
            height="172"
            rx="19"
            transform="translate(1107 461)"
            fill="#fff"
          />
          <rect
            className="square-anim"
            data-name="Rectangle 9"
            width="172"
            height="172"
            rx="86"
            transform="translate(1107 633)"
            fill="#00f7ff"
          />
          <rect
            className="square-anim"
            data-name="Rectangle 7"
            width="172"
            height="172"
            rx="19"
            transform="translate(935 633)"
            fill="#fff"
            opacity="0.17"
          />
          <rect
            className="square-anim"
            data-name="Rectangle 4"
            width="172"
            height="172"
            rx="19"
            transform="translate(1107 805)"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
}

export default Hero;
