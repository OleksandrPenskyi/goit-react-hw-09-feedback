import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  setGoodFeedback,
  setNeutralFeedback,
  setBadFeedback,
} from './feedback-actions';

const INITIAL_VALUE = 0;

const goodFeedbackReducer = createReducer(INITIAL_VALUE, {
  [setGoodFeedback]: (state, _) => state + 1,
});

const neutralFeedbackReducer = createReducer(INITIAL_VALUE, {
  [setNeutralFeedback]: (state, _) => state + 1,
});

const badFeedbackReducer = createReducer(INITIAL_VALUE, {
  [setBadFeedback]: (state, _) => state + 1,
});

const feedbackreducer = combineReducers({
  good: goodFeedbackReducer,
  neutral: neutralFeedbackReducer,
  bad: badFeedbackReducer,
});

export default feedbackreducer;
