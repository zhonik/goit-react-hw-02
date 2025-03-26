import clsx from 'clsx';
import s from './Options.module.css';

const Options = ({ update, reset, total }) => {
  return (
    <ul className={s.optionList}>
      <li>
        <button
          onClick={() => {
            update('good');
          }}
          className={s.optBtn}
        >
          Good
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            update('neutral');
          }}
          className={s.optBtn}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            update('bad');
          }}
          className={s.optBtn}
        >
          Bad
        </button>
      </li>
      {total !== 0 && (
        <li>
          <button onClick={reset} className={clsx(s.optBtn, s.resetBtn)}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
