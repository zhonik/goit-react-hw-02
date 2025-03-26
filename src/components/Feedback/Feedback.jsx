import s from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total }) => {
  return (
    total !== 0 && (
      <ul className={s.feedbackList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
    )
  );
};

export default Feedback;
