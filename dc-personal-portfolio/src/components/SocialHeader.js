import React from "react";
import IconNavigationSocial from "./IconNavigationSocial";
import IconNavigationOption from "./IconNavigationOption";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function SocialHeader({ position = "center" }) {
  return (
    <IconNavigationSocial position={position}>
      <IconNavigationOption Icon={EmailIcon} href="mailto:arkadiuszbiesiada@gmail.com" />
      <IconNavigationOption
        Icon={LinkedInIcon}
        href="https://www.linkedin.com/in/arkadiusz-biesiada-ab600722b/"
      />
      <IconNavigationOption
        Icon={GitHubIcon}
        href="https://github.com/abdevworks"
      />
    </IconNavigationSocial>
  );
}

export default SocialHeader;
