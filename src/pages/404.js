import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  min-height: 100vh;

  .content {
    max-width: ${props => props.theme.maxWidth};
    padding: 1em;
  }
`;


const NotFoundPage = () => (
  <Layout>
    <Container>
      <div className="content">
        <h1>Page Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
        <Link to="/">Go to my homepage.</Link>
      </div>
    </Container>
  </Layout>
);

export default NotFoundPage;
