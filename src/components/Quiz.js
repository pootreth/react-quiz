import { clean } from "../utils";

export default function Quiz({ item, onClick, onCorrect }) {
  const answers = [item.correct_answer, ...item.incorrect_answers].sort(
    (a, b) => 0.5 - Math.random()
  );
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
}
