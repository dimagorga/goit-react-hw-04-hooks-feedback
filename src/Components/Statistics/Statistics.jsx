import PropTypes from "prop-types";
import s from "./Statistics.module.css";
function Statistics({ good, neutral, bad, totalFeedback, positivePercentage }) {
  return (
    <section>
      <p className={s.options + " " + s.good}>
        Good: <span>{good}</span>
      </p>
      <p className={s.options + " " + s.neutral}>
        Neutral: <span>{neutral}</span>
      </p>
      <p className={s.options + " " + s.bad}>
        Bad: <span>{bad}</span>
      </p>
      <p className={s.options}>
        Total: <span>{totalFeedback}</span>
      </p>
      <p className={s.options + " " + s.positive}>
        Positive feedback:
        <span>{positivePercentage}%</span>
      </p>
    </section>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
