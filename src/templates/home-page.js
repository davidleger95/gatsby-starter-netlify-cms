import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import SocialLinks from '../components/SocialLinks';
import Button from '../components/Button';
import favicon from '../img/favicon.png';

const Header = styled.header`
  display: grid;
  justify-content: center;
  background: #eee;
  border: 2em solid white;
  padding: 2em;
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

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export function HomePageTemplate ({ title, subTitle, description, email }) {
  return (
    <Layout>
      <Header>
        <HeaderContent>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <Description dangerouslySetInnerHTML={{ __html: description }} />
          <SocialLinks />
          <Button href={`mailto:${email}`}>Send Me an Email!</Button>
        </HeaderContent>
      </Header>
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
      }).isRequired
    })
  }

  render() {
    const { site, markdownRemark } = this.props.data;
    const { siteMetadata } = site;
    
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
        <HomePageTemplate {...markdownRemark.frontmatter} />
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
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subTitle
        description
        email
      }
    }
  }
`;
