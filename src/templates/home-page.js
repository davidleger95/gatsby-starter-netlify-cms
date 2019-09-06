import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import SocialLinks from '../components/SocialLinks';
import Button from '../components/Button';
import Section from '../components/Section';
import Projects from '../components/Projects';

import favicon from '../img/favicon.png';
import headshot from '../img/headshot.jpg';

const Header = styled.header`
  display: grid;
  justify-content: center;
  background: #eee;
  border: 2em solid white;
  padding: 2em;
  margin-bottom: 20vh;
  min-height: 100vh;

  @media (max-width: 500px) {
    border-width: 1em;
    padding: 1em;
    grid-gap: 1em;
  }
`;

const HeaderContent = styled.div`
  display: grid;
  align-content: center;
  justify-items: start;
  grid-gap: 1.5em;
  max-width: ${props => props.theme.maxWidth};
`;

const SectionContent = styled.div`
  display: grid;
  grid-auto-flow: column;
  @media (max-width: 650px) {
    grid-auto-flow: row;
  }
  align-content: start;
  align-items: start;
  grid-gap: 1.5em;
  max-width: ${props => props.theme.sectionWidth};
  padding: 5vh 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: 2.25rem;
  opacity: 0.5;
  font-weight: 400;
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  align-self: start;
  justify-self: start;
  img {
    vertical-align: middle;
    max-height: 200px;
  }

  &::before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #003BFF;
    opacity: 0.3;
  }
  &::after {
    position: absolute;
    content: '';
    display: block;
    height: 1em;
    width: 1em;
    left: -0.5em;
    top: 0.5em;
    background: ${props => props.theme.colors.accent};
  }
`;

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export function HomePageTemplate ({ title, subTitle, description, email, aboutHTML, projects }) {
  return (
    <Layout>
      <Header>
        <HeaderContent>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <Description dangerouslySetInnerHTML={{ __html: description }} />
          <SocialLinks />
          <Button href={`mailto:${email}`}>Send me an email!</Button>
        </HeaderContent>
      </Header>
      <Section id="about">
        <SectionContent>
          <div className="main" dangerouslySetInnerHTML={{ __html: aboutHTML }} />
          <ImageWrapper><img src={headshot} alt="" /></ImageWrapper>
        </SectionContent>
      </Section>
      <Section id="projects">
        <SectionContent>
          <Projects projects={projects} />
        </SectionContent>
      </Section>
      <Section id="contact">
        <SectionContent>
        <div>
          <h2>Get in touch.</h2>
          <p>
            Have any questions about my work or just want to say hi? 
            Don't be shy, I'd love to hear from you! Just send me an email and I'll get back to you as soon as I can.
            </p>
            <br />
          <Button href={`mailto:${email}`}>Send me an email!</Button>
        </div>
        </SectionContent>
      </Section>
    </Layout>
  );
}

export default class HomePage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string.isRequired,
          subTitle: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          keywords: PropTypes.string.isRequired,
        }).isRequired
      }).isRequired,
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object.isRequired
      }).isRequired,
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            html: PropTypes.string
          })
        }))
      }).isRequired
    })
  }

  render() {
    const { site, markdownRemark, allMarkdownRemark, allProjectsYaml } = this.props.data;
    const { siteMetadata } = site;
    const [about] = allMarkdownRemark.edges;
    const projects = allProjectsYaml.edges.map(({ node }) => node);

    return (
      <div>
        <Helmet
          htmlAttributes={{ lang : 'en' }}
          title={`${siteMetadata.title} | ${siteMetadata.subTitle}`} 
          meta={[
              // TODO: refactor to loop over metadata and create a tag for each key/value pair.
              { name: 'description', content: siteMetadata.description },
              { name: 'keywords', content: siteMetadata.keywords }
          ]}
          link={[
              { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
          />
        <HomePageTemplate 
          {...markdownRemark.frontmatter} 
          aboutHTML={about.node.html}
          projects={projects}
        />
      </div>
    )
  }
}

export const homePageQuery = graphql`
  query homePageQuery($id: String!) {
    site {
      siteMetadata {
        title
        subTitle
        description
        keywords
      }
    }
    # header
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subTitle
        description
        email
      }
    }
    # about-me
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "content" }  }}) {
      edges {
        node {
          html
        }
      }
    }
    # Projects
    allProjectsYaml {
      edges {
        node {
          id
          title
          stack
          description
          links {
            demo
            repo
          }
        }
      }
    }
  }
`;
