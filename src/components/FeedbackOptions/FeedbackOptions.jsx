import React from 'react';
import PropTypes from 'prop-types';
import styles from './feedback.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <h2>Please leave feedback</h2>
    <button
      className={styles.btn}
      name="good"
      type="button"
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      className={styles.btn}
      name="neutral"
      type="button"
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      className={styles.btn}
      name="bad"
      type="button"
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
