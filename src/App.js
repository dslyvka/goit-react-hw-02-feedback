import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Statistics/Notification';
import { Component, Fragment } from 'react';

let clicked = false;

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = e => {
    clicked = true;
    const btn = e.currentTarget.value;
    this.setState(prevState => {
      return { [btn]: prevState[btn] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const rating = (good / (good + bad + neutral)) * 100;
    const total = good + bad + neutral;

    return (
      <Fragment>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onBtnClick}
        />
        {!clicked && <Notification />}
        {clicked && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={rating}
          />
        )}
      </Fragment>
    );
  }
}

export default App;
