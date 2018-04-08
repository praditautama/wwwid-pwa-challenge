import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import requestPostList from './action';
import Component from './Component';


class Container extends React.Component {
  static propTypes = {
    postList: PropTypes.object.isRequired,
    requestPostList: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.requestPostList(1, 15);
  }
  
  render() {
    return (
      <Component postList={this.props.postList} />
    );
  }
}

const mapStateToProps = state => ({
  postList: state.postList,
});

export default connect(mapStateToProps, { requestPostList })(Container);
