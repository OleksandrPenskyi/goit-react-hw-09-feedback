import { createSelector } from 'reselect';

export const getGoodFeedback = state => state.good;
export const getNeutralFeedback = state => state.neutral;
export const getBadFeedback = state => state.bad;

export const totalQuantity = createSelector(
  [getGoodFeedback, getNeutralFeedback, getBadFeedback],
  (goodQt, neutralQt, badQt) => {
    return goodQt + neutralQt + badQt;
  },
);

export const positivePercentageQuantity = createSelector(
  [getGoodFeedback, totalQuantity],
  (goodQt, totalQt) => {
    let averagePercent = Math.round((goodQt / totalQt) * 100);

    if (isNaN(averagePercent)) {
      return (averagePercent = 0);
    }

    return averagePercent + '%';
  },
);
