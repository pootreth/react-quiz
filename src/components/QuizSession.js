import axios from "axios";
import { useEffect, useState } from "react";
import Quiz from "./Quiz";

export default function QuizSession() {
  const [quizzes, setQuizzes] = useState([]);
  const [answeredTotal, setAnsweredTotal] = useState(0);
  const [correctTotal, setCorrectTotal] = useState(0);

  console.log(correctTotal, answeredTotal);
  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => setQuizzes(res.data.results));
  }, []);

  return (
    quizzes.length > 0 && (
      <>
        <Quiz
          onClick={() => setAnsweredTotal((prev) => prev + 1)}
          onCorrect={() => setCorrectTotal((prev) => prev + 1)}
          item={quizzes[answeredTotal]}
          key={crypto.randomUUID()}
        />
        <div>
          Question {answeredTotal + 1} of {quizzes.length}
        </div>
        <div>Score: {correctTotal * 20}</div>
      </>
    )
  );
}
