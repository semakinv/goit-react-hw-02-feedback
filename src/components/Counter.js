import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export default class Counter extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleIncrement = evt => {
    const cangedRate = evt.target.textContent;
    this.setState(prevState => {
      return {
        [cangedRate]: prevState[cangedRate] + 1,
      };
    });
  };

  countTotalFeedback = state => {
    return state.good + state.neutral + state.bad;
  };

  countPositiveFeedbackPercentage = state => {
    return Math.round(
      (state.good * 100) / (state.good + state.neutral + state.bad),
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback(this.state) > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state,
              )}
            ></Statistics>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
