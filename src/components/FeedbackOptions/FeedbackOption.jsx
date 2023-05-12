import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css';

export const FeedbackOption = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.boxBtn}>
      {options.map(option => (
        <button
          className={css.btn}
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
