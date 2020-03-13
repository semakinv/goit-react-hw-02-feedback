import React, { Component } from 'react';
import styled from 'styled-components';
import Section from './Section';
import Notification from './Notification';
import Statistics from './Statistics';
import PropTypes from 'prop-types';

const FeedbackButton = styled.button`
  margin: 5px;
  padding: 2px;
  border-radius: 5px;

  &::first-letter {
    text-transform: uppercase;
  }
`;
const FeedbackButtonLi = styled.li`
  list-style: none;
  display: inline;
`;

export default class FeedbackOptions extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    countPositiveFeedbackPercentage: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };
  render() {
    const {
      totalFeedback,
      onLeaveFeedback,
      countPositiveFeedbackPercentage,
    } = this.props;
    const { good, neutral, bad } = this.props;
    return (
      <>
        <Section title="Please leave feedback">
          <ul>
            {Object.keys(this.state).map(option => (
              <FeedbackButtonLi key={option}>
                <FeedbackButton
                  type="button"
                  name={option}
                  onClick={onLeaveFeedback}
                >
                  {option}
                </FeedbackButton>
              </FeedbackButtonLi>
            ))}
          </ul>
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
