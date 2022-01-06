import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { ListStyled } from './Statistics.styled';

// import Notification from './Notification';
class Statistics extends Component {
  render() {
    // if (this.props.good || this.props.neutral || this.props.bad) {
      return (
        <Fragment>
          <section>
            <h2 style={{ textAlign: 'center' }}>Statistics</h2>
            <ListStyled>
              <li>Good: {this.props.good}</li>
              <li>Neutral: {this.props.neutral}</li>
              <li>Bad: {this.props.bad}</li>
              <li>Total: {this.props.total} reviews</li>
              <li>
                Positive feedback:{' '}
                {isNaN(Math.round(this.props.positivePercentage))
                  ? 0
                  : Math.round(this.props.positivePercentage)}
                %
              </li>
            </ListStyled>
          </section>
          {}
        </Fragment>
      );
    // } else {
    //   return <Notification />;
    // }
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
