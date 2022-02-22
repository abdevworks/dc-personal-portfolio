import styled from "styled-components";
import { StyledSectionDescriptionWrapper as StyledSectionDescription } from "../SectionDescription";

export const StyledSkills = styled.section`
  background-color: ${({ theme }) => theme.colors.skills};
`;

export const StyledSkillsContainer = styled.ul`
  & li {
    background-color: white;
    padding: 4em 2em;
    border-radius: 1em;
    margin-bottom: 1em;
  }

  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 1em;
  }

  @media only screen and (min-width: ${({ theme }) => theme.medium}) {
    margin-top: -5em;
    margin-bottom: -7em;
    padding-top: 7em;
  }
`;

export const StyledIconContainer = styled.div`
  height: 100px;
  display: grid;
  place-content: center;
  margin: 0 auto;

  img {
    width: 80px;
  }
`;

export const StyledSkillTitle = styled.p`
  font-weight: bold;
  text-transform: uppercase;
`;

export const StyledSkillDescription = styled(StyledSectionDescription)`
  margin-bottom: 2em;
`;
