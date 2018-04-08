import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { truncateString } from '../../../utils/stringUtils';

const ContentStyled = styled.div`
  padding: 0 20px;

  img {
    width: 100%;
    height: auto;
    margin: 15px 0 25px;
  }

  h3, h4, h5 {
    font-size: 20px;
  }

  ul {
    padding-left: 23px;
  }

  ul li {
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 26px;
  }

  p {
    font-size: 16px;
    line-height: 26px;
  }

  a { color: #bf0016; }

  /* CAPTION IMAGE */
  .wp-caption-text {
    color: #999;
    font-family: PT Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-style: italic;
  }

  /* READ ALSO */
  .read-also {
    margin: 25px auto;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  .read-also__image img {
    margin-top: 0;
    margin-bottom: 15px;
    border-radius: 3px;    
  }
  .read-also__copy {
    font-size: 14px;
    font-weight: 500;
    color: #777;
    margin-bottom: 5px;
  }
  .read-also__post-title {
    margin: 0;
  }

  /* MULTI APP */
  .multiapp-wrapper {
    margin: 25px 0;
    padding: 5px;
    border: 2px solid #f5f5f5;
    border-radius: 5px;
  }
  .multiapp-description {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 10px;

    > .row {
      overflow: hidden;
      margin: 0;
    }
  }
  .multiapp-description__image {
    float: left;
    height: auto;
    width: 30%;
    padding: 0 15px;
  }
  .multiapp-image img {
    border-radius: 20px;
    width: 150px;
    max-height: 150px;
  }
  .multiapp-description__detail {
    float: left;    
    width: 70%;
  }
  .multiapp-title {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: #333;
  }
  .multiapp-rating img {
    height: 16px;
    width: 16px;
  }
  .multiapp-meta,
  .multiapp-meta__size {
    font-size: 12px;
  }
  .multiapp-meta__downloader {
    margin-left: 15px;
  }
  .multiapp-description__price {
    display: none;
  }
  .multiapp-dl {
    text-align: center;
    font-size: 12px;
    font-weight: 600;
  }
  .multiapp-dl__wrapper {
    display: block;
    padding: 15px;
    background-color: #fafafa;
    box-shadow: inset 0 1px 3px 0 rgba(0,0,0,.04);
    text-align: center;

    span {
      display: block;
      padding: 0;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  .multiapp-dl__button {
    display: inline-block;
    margin-top: 10px;

    img {
      margin: 0;
      width: 135px;
    }
  }
`;

const Content = ({ location }) => (
  <ContentStyled dangerouslySetInnerHTML={{ __html: truncateString(location.state.content) }} />
);

Content.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Content;
