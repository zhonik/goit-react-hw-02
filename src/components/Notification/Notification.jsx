import s from './Notification.module.css';

const Notification = ({ total, positive }) =>
  total === 0 ? (
    <p className={s.notification}>Not feedback yet</p>
  ) : (
    <p className={s.notification}>Positive: {positive}%</p>
  );
export default Notification;
