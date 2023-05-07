import { memo } from "react";
import { clean } from "../utils";

const Quiz = ({ item, onClick, onCorrect }) => {
  const answers = [item.correct_answer, ...item.incorrect_answers].sort(
    () => 0.5 - Math.random()
  );

  console.log("Quiz Rerender");
  const handleClick = (answer) => {
    onClick();
    if (answer === item.correct_answer) {
      onCorrect();
    }
  };
  return (
    <>
      <div>{clean(item.question)}</div>
      {answers.map((answer) => (
        <button
          className="btn btn-light"
          onClick={() => handleClick(answer)}
          key={crypto.randomUUID()}>
          {clean(answer)}
        </button>
      ))}
    </>
  );
};

export default memo(Quiz);
