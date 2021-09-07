import { useState } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import s from "./Feedback.module.css";

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (e) => {
    const option = e.target.name;
    // eslint-disable-next-line default-case
    switch (option) {
      case "good":
        setGood((prevState) => prevState + 1);

        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);

        break;
      case "bad":
        setBad((prevState) => prevState + 1);

        break;
    }
  };

  const variables = { good, neutral, bad };

  const countTotalFeedback = () => {
    return Object.values(variables).reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
  };

  const countPositiveFeedbackPercentage = () => {
    const arr = Object.values(variables);
    const Percentage = arr.map((value) => {
      return (value * 100) / countTotalFeedback();
    });
    return Math.round(Percentage[0]);
  };

  const key = Object.keys(variables);

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleClick} options={key} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback()}
            positivePercentage={
              Number(countPositiveFeedbackPercentage())
                ? countPositiveFeedbackPercentage()
                : 0
            }
          />
        )}
      </Section>
    </div>
  );
}

export default Feedback;
