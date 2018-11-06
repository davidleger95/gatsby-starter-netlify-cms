import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const Nav = styled.nav`
  ul {
    position: absolute;
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
          <Link to="#about">About</Link>
        </li>
        <li>
          <Link to="#work">Work</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
    </Nav>
  );
}

export default Navbar;
