import React, { Component } from 'react';
import styled from 'styled-components';
import logos from './logos';

const data = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    username: 'davidleger95',
    logo: logos.twitter
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@',
    username: 'davidleger95',
    logo: logos.medium
  },
  {
    name: 'Dev',
    url: 'https://dev.to/',
    username: 'davidleger95',
    logo: logos.dev
  },
  {
    name: 'Github',
    url: 'https://github.com/',
    username: 'davidleger95',
    logo: logos.github
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/',
    username: 'davidleger95',
    logo: logos.instagram
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/',
    username: 'davidleger95',
    logo: logos.linkedIn
  }
];

const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;

  .social-icon {
    height: 1.25em;
    fill: ${props => props.theme.colors.primary};
    opacity: 0.5;

    @media (max-width: 500px) {
      height: 1.5em;
      margin: 0.5em 0;
    }

    &:hover {
      opacity: 1;
      fill: ${props => props.theme.colors.accent};
    }
  }
`;

class SocialLinks extends Component {
  render() {
    return (
      <Links>
        {data.map(({ name, url, username, logo}) => (
          <li key={name}>
            <a target="_blank" rel="noopener noreferrer" href={`${url}${username}`}>
              <div dangerouslySetInnerHTML={{ __html: logo }} />
            </a>
          </li>
        ))}
      </Links>
    );
  }
}

export default SocialLinks;
