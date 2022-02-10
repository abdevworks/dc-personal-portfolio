import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="footer-hero-design"
        width="686"
        height="550"
        viewBox="0 0 686 550"
      >
        <g id="blockdesign" transform="translate(-935 -289)">
          <rect
            data-name="Rectangle 2"
            width="172"
            height="172"
            rx="19"
            transform="translate(1107 289)"
            fill="#6e00ff"
          />
          <rect
            data-name="Rectangle 10"
            width="172"
            height="172"
            rx="86"
            transform="translate(1107 461)"
            fill="#ff64cb"
          />
          <rect
            data-name="Rectangle 8"
            width="172"
            height="172"
            rx="19"
            transform="translate(935 461)"
            fill="#e5d5fa"
          />
          <rect
            data-name="Rectangle 5"
            width="172"
            height="172"
            rx="19"
            transform="translate(1107 633)"
            fill="#6e00ff"
          />
          <rect
            data-name="Rectangle 3"
            width="172"
            height="172"
            rx="19"
            transform="translate(1280 461)"
            fill="#fff"
          />
          <rect
            data-name="Rectangle 9"
            width="172"
            height="172"
            rx="86"
            transform="translate(1280 633)"
            fill="#00f7ff"
          />
          <rect
            data-name="Rectangle 7"
            width="172"
            height="172"
            rx="19"
            transform="translate(1452 633)"
            fill="#fff"
            opacity="0.17"
          />
          <rect
            data-name="Rectangle 4"
            width="172"
            height="172"
            rx="19"
            transform="translate(1280 805)"
            fill="#fff"
          />
        </g>
      </svg>
      <div className="footer-nav-container">
        <a href="index.html" className="footer-logo">
          Arkadiusz Biesiada
        </a>

        <nav>
          <ul>
            <li>
              <a href="#portfolio">My work</a>
            </li>
            <li>
              <a href="#skills">My skills</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
