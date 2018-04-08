import React from 'react';

import Header from '../commons/ui-kit/Header';
import Title from '../modules/PostList/ArticlePost/Title';
import PostMeta from '../modules/PostList/ArticlePost/PostMeta';
import Content from '../modules/PostList/ArticlePost/Content';

const Article = state => (
  <React.Fragment>
    <Header {...state} />
    <Title {...state} />
    <PostMeta {...state} />
    <Content {...state} />
  </React.Fragment>
);

export default Article;
