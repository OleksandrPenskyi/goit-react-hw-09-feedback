import React from 'react';
import styles from './FeedbackOptions.module.css';
import { useDispatch } from 'react-redux';

import {
  setGoodFeedback,
  setNeutralFeedback,
  setBadFeedback,
} from '../../redux/feedback-actions';

export default function Feedback() {
  const dispatch = useDispatch();

  const options = [
    { name: 'Good', increment: () => dispatch(setGoodFeedback()) },
    { name: 'Neutral', increment: () => dispatch(setNeutralFeedback()) },
    { name: 'Bad', increment: () => dispatch(setBadFeedback()) },
  ];

  return (
    <div className={styles.Feedback__list}>
      {options.map(({ name, increment }) => (
        <button
          onClick={increment}
          type="button"
          className={styles.BtnItem}
          key={name}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
