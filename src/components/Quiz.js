import axios from "axios";
import { useEffect, useState } from "react";

export default function Quiz() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => setQuizzes(res.data.results));
  }, []);

  return (
    <>
      {quizzes.map((quiz) => (
        <div key={crypto.randomUUID()}>{quiz.question}</div>
      ))}
    </>
  );
}
