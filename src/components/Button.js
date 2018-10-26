import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.a`
  position: relative;
  border: none;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lightGrey};
  font-size: 1em;
  padding: 0.75em 1em;
  box-shadow: 0 0.75em 2em rgba(0,0,0,0.3);
  transition: all 100ms ease-in-out;

  &::before {
    position:absolute;
    content: '';
    display: block;
    height: 1em;
    width: 1em;
    left: -0.5em;
    top: 0.5em;
    background: ${props => props.theme.colors.accent};
  }

  &:hover {
    box-shadow: 0 0.75em 2em -0.2em rgba(0,0,0,0.3);
    transform: scale(0.975);
  }
`;

const Button = props => (
    <ButtonStyle {...props}>
      {props.children}
    </ButtonStyle>
);

export default Button;