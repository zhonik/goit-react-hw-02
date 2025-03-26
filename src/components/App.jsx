import { useState } from 'react';
import { useEffect } from 'react';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

const App = () => {
  const [obj, setObj] = useState(() => {
    const savedFeedback = window.localStorage.getItem('saved-feedback');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = feedbackType => {
    setObj({
      ...obj,
      [feedbackType]: obj[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setObj({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    const savedFeedback = JSON.stringify(obj);
    window.localStorage.setItem('saved-feedback', savedFeedback);
  }, [obj]);

  const totalFeedback = obj.good + obj.neutral + obj.bad;
  const positiveFeedback = Math.round((obj.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options update={updateFeedback} reset={resetFeedback} total={totalFeedback} />
      <Feedback {...obj} total={totalFeedback} positive={positiveFeedback} />
      <Notification total={totalFeedback} />
    </div>
  );
};

export default App;
