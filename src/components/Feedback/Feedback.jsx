import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = e => {
    // console.log('click');
    // console.log(this.state);

    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralFeedback = e => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBadFeedback = e => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.neutral + this.state.bad + this.state.good;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <div>
        <p>Please leave feedback</p>
        <div>
          <button type="button" onClick={this.handleGoodFeedback}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutralFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBadFeedback}>
            Bad
          </button>
        </div>
        <p>Statistics</p>
        <ul>
          <li>
            <span>Good: </span>
            <span>{this.state.good}</span>
          </li>
          <li>
            <span>Neutral: </span>
            <span>{this.state.neutral}</span>
          </li>
          <li>
            <span>Bad: </span>
            <span>{this.state.bad}</span>
          </li>
          <li>
            <span>Total: </span>
            <span>{this.countTotalFeedback()}</span>
          </li>
          <li>
            <span>Positive feedback: </span>
            <span>{this.countPositiveFeedbackPercentage()}%</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
