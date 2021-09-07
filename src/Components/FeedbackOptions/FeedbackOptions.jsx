import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";
function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.buttonList}>
      {options.map((name, index) => (
        <li key={index}>
          <button
            className={s.button}
            type="button"
            name={name}
            onClick={onLeaveFeedback}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
