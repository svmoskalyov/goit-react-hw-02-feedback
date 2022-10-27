import React, { Component } from 'react';
import style from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  good = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  neutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  bad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <div className={style.container}>
        <h1 className={style.title}>Please leave feedback</h1>
        <div className={style.btnsWrapper}>
          <button className={style.btn} onClick={this.good} type="button">
            Good
          </button>
          <button className={style.btn} onClick={this.neutral} type="button">
            Neutral
          </button>
          <button className={style.btn} onClick={this.bad} type="button">
            Bad
          </button>
        </div>

        <h2 className={style.title}>Statistics</h2>
        <p className={style.text}>Good: {this.state.good}</p>
        <p className={style.text}>Neutral: {this.state.neutral}</p>
        <p className={style.text}>Bad: {this.state.bad}</p>
        <p className={style.text}>Total: {this.countTotalFeedback()}</p>
        <p className={style.text}>
          Percentage feedback:{' '}
          {this.countTotalFeedback() === 0
            ? '100'
            : this.countPositiveFeedbackPercentage()}
          %
        </p>
      </div>
    );
  }
}

export default Feedback;
