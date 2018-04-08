import React from 'react';
import styled from 'styled-components';

const Loading = styled.p`
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-weight: bold;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <Loading>Something went wrong.</Loading>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
