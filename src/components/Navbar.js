import React from 'react';

import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Nav = styled.nav`
  ul {
    position: fixed;
    z-index: 999;
    right: 0;
    top: 1em;
    list-style: none;
    margin: 0;
    padding: 0;
    padding-right: 2em;
    display: flex;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.lightGrey};
    box-shadow: 0 0.75em 2em rgba(0,0,0,0.3);

    &::before {
      content: '';
      display: block;
      height: 1em;
      width: 1em;
      margin-left: -0.5em;
      margin-top: 0.5em;
      background: ${props => props.theme.colors.accent};
    }
  }

  a {
    font-size: 0.8em;
    color: inherit;
    text-decoration: none;
    display: block;
    padding: 1em;
  }

  a::before {
    content: '> ';
    color: ${props => props.theme.colors.accent};
  }
`;

function Navbar() {
  return (
    <Nav>
      <ul>
        <li>
          <AnchorLink href="#about">About</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#projects">Projects</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul>
    </Nav>
  );
}

export default Navbar;
