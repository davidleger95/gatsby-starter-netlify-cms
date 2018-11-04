import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darken } from 'polished';

// import Navbar from '../components/Navbar';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:500|Roboto:400,400i,700,700i');

  html {
    box-sizing: border-box;
    font-family: 'Roboto', Helvetica, sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    color: ${props => props.theme.colors.primary};
  }

  a, button {
    color: ${props => darken(0.142, props.theme.colors.accent)};
    font-family: 'Roboto Mono', monospace;
    text-decoration: none;
  }
  p {
    font-size: 1.2rem;
  }
`;

const theme = {
  colors: {
    primary: '#18244C',
    accent: '#FF1C95',
    lightGrey: '#eee'
  },
  maxWidth: '720px'
}

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      {/* <Navbar /> */}
      <div>{children}</div>
    </div>
  </ThemeProvider>
)

export default TemplateWrapper
