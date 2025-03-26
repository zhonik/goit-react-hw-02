import s from './Notification.module.css';

const Notification = ({ total }) =>
  total === 0 && <p className={s.notification}>Not feedback yet</p>;

export default Notification;
