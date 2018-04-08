import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import { Loading, Post, Title, Image, Excerpt, Author, Time } from './style';

const getFirstParagraph = (html) => {
  return html.match(/<p>(.*?)<\/p>/g).map((val) => {
    return val.replace(/<\/?b>/g,'');
  })[0];
};

const Component = ({ postList }) => (
  <React.Fragment>
    {
      postList.items === null
        ? <Loading>Loading ...</Loading>
        : postList.items.map(list => (
          <LazyLoad once key={list.guid} height={500} offset={10}>
            <Link
              key={list.id}
              to={{
                pathname: `/${list.link.replace('https://medium.com/wwwid/', '')}`,
                state: {
                  title: list.title,
                  author: list.author,
                  content: list.content,
                  pubDate: list.pubDate,
                  thumbnail: list.thumbnail,
                  categories: list.categories,
                },
              }}
            >
              <Post>
                <Title>
                  {list.title}
                </Title>
                <Author>
                  Oleh {list.author}
                </Author>
                <Time>
                  {list.pubDate}
                </Time>
                <Image src={list.thumbnail} />
                <Excerpt
                  dangerouslySetInnerHTML={{ __html: getFirstParagraph(list.description) }}
                />
              </Post>
            </Link>
          </LazyLoad>
        ))
    }
  </React.Fragment>
);

Component.propTypes = {
  postList: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};




export default Component;
