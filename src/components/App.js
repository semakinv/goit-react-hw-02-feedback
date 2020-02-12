import React, { Component } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

export default class App extends Component {
  static propTypes = {
    state: PropTypes.objectOf(
      PropTypes.exact({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
      }),
    ),
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <Counter
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        ></Counter>
      </>
    );
  }
}
