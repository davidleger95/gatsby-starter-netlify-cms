import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  background-color: ${props => props.theme.colors.lightGrey};
  padding: 1.5rem;
  font-family: 'Roboto Mono', monospace;
  text-align: center;
  p {
    margin: 0;
    opacity: 0.7;
    font-size: 0.75em;
  }
`;

const Footer = () => (
  <FooterStyles>
    <p>Designed & built by David Leger.</p>
  </FooterStyles>
);

export default Footer;