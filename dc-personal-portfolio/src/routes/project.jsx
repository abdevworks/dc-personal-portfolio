import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getProject } from "../content";
import { StyledSectionWrapper } from "../components/Featured";
import SectionSubtitle from "../components/SectionSubtitle";
import SectionTitle from "../components/SectionTitle";
import CallToAction from "../components/CallToAction";
import ProjectLinksNavigation from "../components/ProjectLinksNavigation";


const Project = () => {
  let params = useParams();
  let project = getProject(parseInt(params.projectId), 10);
  const { projectSubtitle, projectTitle, description, image: { src, alt }, links } = project;

  return (
    <StyledProject>
      <StyledProjectHeader>
        <SectionSubtitle>{projectSubtitle}</SectionSubtitle>
        <SectionTitle>{projectTitle}</SectionTitle>
      </StyledProjectHeader>
      <StyledProjectImage src={`../${src}`} alt={alt} />

      <StyledProjectDescription>
        {" "}
        <SectionSubtitle>PROJECT INFORMATION</SectionSubtitle>
        {description}
        <SectionSubtitle>PROJECT LINKS</SectionSubtitle>
        <ProjectLinksNavigation position="left" links={links} />
      </StyledProjectDescription>
      <CallToAction />
    </StyledProject>
  );
};

const StyledProject = styled.div`
  height: 85vh;
`;

const StyledProjectHeader = styled(StyledSectionWrapper)`
  padding-top: 6em;
  padding-bottom: 2em;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    text-align: left;
  }
`;

const StyledProjectDescription = styled.section`
  text-align: left;
  padding-top: 1em;
`;

const StyledProjectImage = styled.img`
  height: 30vh;
  object-fit: cover;
  margin-bottom: 2em;
`;

export default Project;
