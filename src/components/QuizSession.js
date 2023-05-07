import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
import useCountDown from "react-countdown-hook";

export default function QuizSession() {
  const [quizzes, setQuizzes] = useState([]);
  const [answeredTotal, setAnsweredTotal] = useState(0);
  const [correctTotal, setCorrectTotal] = useState(0);
  const [temp, setTemp] = useState({});
  const [timeLeft, { start }] = useCountDown(60000, 1000);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => {
        setLoading(false);
        setQuizzes(res.data.results);
        setAnsweredTotal(0);
        setCorrectTotal(0);
        start();
      });
  }, [temp, start]);

  const score = correctTotal * 20;
  const handleRetry = () => {
    setTemp({});
  };

  const handleAnswer = useCallback(
    () => setAnsweredTotal((prev) => prev + 1),
    []
  );
  const handleCorrect = useCallback(
    () => setCorrectTotal((prev) => prev + 1),
    []
  );
  return (
    quizzes.length > 0 &&
    (answeredTotal < quizzes.length && timeLeft > 0 ? (
      <>
        <Quiz
          onClick={handleAnswer}
          onCorrect={handleCorrect}
          item={quizzes[answeredTotal]}
        />
        <div>
          Question {answeredTotal + 1} of {quizzes.length}
        </div>
        <div>Score: {score}</div>
        <div>Time Left: {timeLeft / 1000}</div>
      </>
    ) : (
      <Result
        score={score}
        correctTotal={correctTotal}
        wrongTotal={answeredTotal - correctTotal}
        onRetry={handleRetry}
        isLoading={loading}
      />
    ))
  );
}