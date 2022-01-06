import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Statistics/Notification';
import { Component, Fragment } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = value => {
    const btn = value;
    this.setState(prevState => {
      return { [btn]: prevState[btn] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const rating = (good / (good + bad + neutral)) * 100;
    const total = good + bad + neutral;
    const options = Object.keys(this.state);

    return (
      <Fragment>
        <FeedbackOptions options={options} onLeaveFeedback={this.onBtnClick} />
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={rating}
          />
        ) : (
          <Notification />
        )}
      </Fragment>
    );
  }
}

export default App;
