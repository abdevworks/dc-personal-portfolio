import React from "react";
import IconNavigation from "./IconNavigation";
import IconNavigationOption from "./IconNavigationOption";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const ProjectLinksNavigation = ({
  position = "center",
  links: { website, design, github },
}) => {
  return (
    <IconNavigation position={position}>
      {website && <IconNavigationOption Icon={LanguageIcon} href={website} />}
      {design && <IconNavigationOption Icon={ViewQuiltIcon} href={design} />}
      {github && <IconNavigationOption Icon={GitHubIcon} href={github} />}
    </IconNavigation>
  );
};

export default ProjectLinksNavigation;
