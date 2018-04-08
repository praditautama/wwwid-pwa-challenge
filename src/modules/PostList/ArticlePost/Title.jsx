import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CategoryContainer = styled.div`
  display: inline-block;
  font-size: 12px;
  margin: 20px;
`;

const Category = styled.a`
  padding-right: 5px;
  color: #000;
`;

const TitleStyled = styled.h1`
  font-family: "Helvetica Neue", Helvetica;
  padding: 0;
  margin: 0 20px;
  font-size: 28px;
  line-height: 35px;
`;

const Title = ({ location }) => (
  <React.Fragment>
    <CategoryContainer>
      {
        location.state.categories.map(category => (
          <Category key={category}>#{category}</Category>
        ))
      }
    </CategoryContainer>
    <TitleStyled dangerouslySetInnerHTML={{ __html: location.state.title }} />
  </React.Fragment>
);

Title.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Title;
