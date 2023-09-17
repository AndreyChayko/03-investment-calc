import styles from "./Form.module.css";
import { useState } from "react";

const initialState = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};
const Form = ({ onSubmit }) => {
  const [userInput, setUserInput] = useState(initialState);

  const changeHandler = (input, value) => {
    setUserInput((prevState) => ({
      ...prevState,
      [input]: +value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit(userInput);
  };

  const resetHandler = () => {
    setUserInput((prevState) => ({ ...prevState, ...initialState }));
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["current-savings"]}
            onChange={({ target }) =>
              changeHandler("current-savings", target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={({ target }) =>
              changeHandler("yearly-contribution", target.value)
            }
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={({ target }) =>
              changeHandler("expected-return", target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={({ target }) => changeHandler("duration", target.value)}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
