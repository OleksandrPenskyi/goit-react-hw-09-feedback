import React from 'react';
import styles from './Statistics.module.css';
import { useSelector } from 'react-redux';

import {
  getGoodFeedback,
  getNeutralFeedback,
  getBadFeedback,
  totalQuantity,
  positivePercentageQuantity,
} from '../../redux/feedback-selectors';

export default function Statistics() {
  const good = useSelector(getGoodFeedback);
  const neutral = useSelector(getNeutralFeedback);
  const bad = useSelector(getBadFeedback);
  const total = useSelector(totalQuantity);
  const positivePercentage = useSelector(positivePercentageQuantity);

  const statList = [
    { itemName: 'Good', itemValue: good },
    { itemName: 'Neutral', itemValue: neutral },
    { itemName: 'Bad', itemValue: bad },
    { itemName: 'Total', itemValue: total },
    { itemName: 'Positive feedback', itemValue: positivePercentage },
  ];

  return (
    <div className={styles.Statistics}>
      <ul className={styles.Stat__List}>
        {statList.map(({ itemName, itemValue }) => (
          <li className={styles.Stat__Item} key={itemName}>
            {itemName}:<span> {itemValue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
