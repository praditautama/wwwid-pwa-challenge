import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

import logo from '../../images/indonesia.svg';
import backbutton from '../../images/arrow_back_black_96x96.png';

// FOR CRITICAL RENDERING DO NOT USE STYLED-COMPONENTS

const styleWrapper = {
  height: '55px',
};

const styleHeader = {
  position: 'fixed',
  width: '100%',
  background: '#fff',
  height: '55px',
  padding: '10px 15px',
  boxShadow: '0 0 8px 0 #ccc',
};

const styleImage = {
  height: '35px',
  marginTop: '-5px',
  marginRight: '15px',
};

const styleH4 = {
  display: 'inline-block',
};

const Header = ({ location, history }) => {
  const icon = location.pathname !== '/' ? backbutton : logo;

  return (
    <div style={styleWrapper}>
      <header style={styleHeader}>
        <img 
          style={styleImage}
          src={icon}
          alt="Logo"
          onClick={() => history.goBack()}
          onKeyPress={() => history.goBack()}
          role="presentation"
        />
        <h4 style={styleH4}>WWWID</h4>
      </header>
    </div>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Header);
