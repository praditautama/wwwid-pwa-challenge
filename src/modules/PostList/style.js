import styled from 'styled-components';

const Loading = styled.p`
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-weight: bold;
`;

const Post = styled.article`
  padding: 15px;
  overflow: hidden;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h4`
  margin: 0;
  font-size: 16px;
  padding-right: 10px;
  color: #000;
  padding-bottom: 5px;
`;

const Image = styled.img`
  width: 100%;
  float: left;
`;

const Excerpt = styled.p`
  float: left;
  margin: 0;
  color: #000;
`;

const Author = styled.p`
  margin: 0;
  color: #000;
  font-size: 11px;
  font-weight: bold;
`;

const Time = styled.time`
  color: #999;
  display: block;
  font-size: 11px;
`;

export {
  Loading,
  Post,
  Title,
  Image,
  Excerpt,
  Author,
  Time,
};

