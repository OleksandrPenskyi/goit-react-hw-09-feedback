/* eslint-disable no-unused-vars */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import feedbackreducer from './feedback-reducer';

const middleware = [...getDefaultMiddleware({}), logger];

const store = configureStore({
  reducer: feedbackreducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
