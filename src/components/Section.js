import styled from 'styled-components';

const Section = styled.section`
  display: grid;
  ${'' /* justify-content: stretch; */}
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  padding: 2rem;

  h2 {
    margin-top: 0;
    font-family: 'Roboto Mono', monospace;
    &::before {
      content: '> ';
      color: ${props => props.theme.colors.accent};
    }
  }

  &#about {
    ul {
      list-style: none;
      padding-left: 1em;
      li::before {
        content: '>';
        padding-right: 0.5em;
        color: ${props => props.theme.colors.accent};
      }
    }
  }
`;

export default Section;