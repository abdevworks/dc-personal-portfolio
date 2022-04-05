import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getProject } from "../content";
import { StyledSectionWrapper } from "../components/Featured";
import SectionSubtitle from "../components/SectionSubtitle";
import SectionTitle from "../components/SectionTitle";
import CallToAction from "../components/CallToAction";
import ProjectLinksNavigation from "../components/ProjectLinksNavigation";
import { gsap } from "gsap";
import parse from "html-react-parser";

const Project = () => {

  const projectHeaderRef = useRef();
  const projectImageRef = useRef();
  const projectDescriptionRef = useRef();

  useEffect(() => {
    gsap.from([projectHeaderRef.current, projectImageRef.current, projectDescriptionRef.current], {
      scrollTrigger: {
        trigger: [projectHeaderRef.current, projectImageRef.current, projectDescriptionRef.current],
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.4,
    });
  });

  let params = useParams();
  let project = getProject(parseInt(params.projectId), 10);
  const {
    projectSubtitle,
    projectTitle,
    description,
    image: { src, alt },
    links,
  } = project;

  return (
    <StyledProject>
      <StyledProjectHeader ref={projectHeaderRef}>
        <SectionSubtitle>{projectSubtitle}</SectionSubtitle>
        <SectionTitle>{projectTitle}</SectionTitle>
      </StyledProjectHeader>
      <StyledProjectImage src={`../${src}`} alt={alt} ref={projectImageRef}/>

      <StyledProjectDescription ref={projectDescriptionRef}>
        {" "}
        <SectionSubtitle>INFORMACJA O PROJEKCIE</SectionSubtitle>
        <span>{parse(description.full)}</span>
        <SectionSubtitle>LINKI DO PROJEKTU</SectionSubtitle>
        <ProjectLinksNavigation position="left" links={links} />
      </StyledProjectDescription>
      <CallToAction padding="5em"/>
    </StyledProject>
  );
};

const StyledProject = styled.div`
@media only screen and (min-width: ${({ theme }) => theme.large}) {
  padding-bottom: 100px;
  }

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
  padding-bottom: 1em;
`;

const StyledProjectImage = styled.img`
  opacity: 0.75;
  min-height: 100px;
  max-height: 500px;
  object-position: top;
  object-fit: cover;
  margin-bottom: 2em;
`;

export default Project;
