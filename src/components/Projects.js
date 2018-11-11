import React from 'react';
import styled from 'styled-components';

const ProjectStyle = styled.li`
  display: grid;
  grid-gap: 1em;
  & > * {
    padding: 0;
    margin: 0;
  }

  h3, .stack {
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
  }

  .stack {
    font-size: 0.8em;
    opacity: 0.7;
  }

  .links {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    grid-gap: 1em;
    font-size: 0.8em;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    font-weight: 600;
  }

  a::before {
    content: '> ';
  }
  a:hover, a::before {
    color: ${props => props.theme.colors.accent};
  }
`;

const Project = ({ title, stack, description, links: { demo, repo} }) => (
  <ProjectStyle>
    <h3>{title}</h3>
    <p className="stack">{stack}</p>
    <p>{description}</p>
    <div className="links">
      {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Check it out!</a>}
      {repo && <a href={repo} target="_blank" rel="noopener noreferrer">Repo</a>}
    </div>
  </ProjectStyle>
);

const ProjectsStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  grid-gap: 2.5rem;
`;

const Projects = ({ projects }) => (
  <div>
    <h2>Some of my projects.</h2>
    <ProjectsStyle>
      {projects.map(project => <Project key={project.id} {...project} />)}
    </ProjectsStyle>
  </div>
);

export default Projects;