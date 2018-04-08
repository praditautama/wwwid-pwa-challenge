import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Author, Time, Image } from './style';

const TitleStyled = styled.h1`
  font-family: "Helvetica Neue", Helvetica;
  padding: 0;
  margin: 0 20px;
  font-size: 28px;
  line-height: 35px;
`;

const PostMeta = ({ location }) => (
  <React.Fragment>
    <TitleStyled dangerouslySetInnerHTML={{ __html: location.state.title }} />
    <Author>
      Oleh {location.state.author}
    </Author>
    <Time>
      {location.state.pubDate}
    </Time>
    <Image src={location.state.thumbnail} />
  </React.Fragment>
);

PostMeta.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PostMeta;
