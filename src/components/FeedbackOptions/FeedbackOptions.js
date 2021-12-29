import { Fragment } from 'react';
import {ListStyled} from './FeedbackOptions.styled'

function FeedbackOptions({ options, onLeaveFeedback }) {
  const btns = Object.keys(options);
  return (
    <Fragment>
      <h1 style={{ "textAlign": 'center'}}>Please leave feedback</h1>
      <section>
        <ListStyled>
          {btns.map(btn => {
            return (
              <li key={btn}>
                <button value={btn} onClick={onLeaveFeedback}>
                  {btn}
                </button>
              </li>
            );
          })}
        </ListStyled>
      </section>
    </Fragment>
  );
}

export default FeedbackOptions;
