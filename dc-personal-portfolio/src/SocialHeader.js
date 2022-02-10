import React from "react";
import "./SocialHeader.scss";

function SocialHeader() {
  return (
    <div className="social-header">
      <ul>
        <li>
          <a href="#">
            <img src="images/bytesize_mail.svg" alt="email" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/akar-icons_twitter-fill.svg" alt="twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/akar-icons_github-fill.svg" alt="github" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialHeader;
