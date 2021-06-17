import React from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import { totalQuantity } from './redux/feedback-selectors';
import { useSelector } from 'react-redux';

export default function App() {
  const totalFeedbackQuantity = useSelector(totalQuantity);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions />
      </Section>
      <Section title="Statistics">
        {totalFeedbackQuantity ? <Statistics /> : <Notification />}
      </Section>
    </>
  );
}
