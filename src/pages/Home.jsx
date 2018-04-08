import React from 'react';

import Header from '../commons/ui-kit/Header';
import PostList from '../modules/PostList/Container';
import ErrorBoundary from '../commons/errors/ErrorBoundary';

const Home = state => (
  <React.Fragment>
    <Header />
    <ErrorBoundary>
      <PostList />
    </ErrorBoundary>
  </React.Fragment>
);


export default Home;
