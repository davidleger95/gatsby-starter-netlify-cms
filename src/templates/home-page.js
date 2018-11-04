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

export const HomePageTemplate = ({title, subTitle, description, email }) => (
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
)

export default class HomePage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object
      })
    })
  }

  render() {
    const { title, subTitle } = this.props.data.markdownRemark.frontmatter;
    
    return (
      <div>
        <Helmet
          htmlAttributes={{ lang : 'en' }}
          title={`${title} | ${subTitle}`} 
          meta={[
              { name: 'description', content: 'I’m a frontend web developer living in Fredericton, New Brunswick.' },
              { name: 'keywords', content: 'webdev, gatsbyjs, reactjs, redux, frontend, graphql, design, ux, user experience' },
          ]}
          link={[
              { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
          />
        <HomePageTemplate {...this.props.data.markdownRemark.frontmatter} />
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
