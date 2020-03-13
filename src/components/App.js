import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = evt => {
    const cangedRate = evt.target.name;
    this.setState(prevState => {
      return {
        [cangedRate]: prevState[cangedRate] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    const totalFeedback = this.countTotalFeedback(this.state);
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage(
      this.state,
    );
    return (
      <section className={styles.shell}>
        <FeedbackOptions
          totalFeedback={totalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          onLeaveFeedback={this.handleIncrement}
        ></FeedbackOptions>
      </section>
    );
  }
}
