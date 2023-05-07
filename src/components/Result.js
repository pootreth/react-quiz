export default function Result({
  score,
  correctTotal,
  wrongTotal,
  onRetry,
  isLoading,
}) {
  return (
    <>
      <h3>Your score:</h3>
      <h1>{score}</h1>
      <p>Correct answer: {correctTotal}</p>
      <p>Wrong answer: {wrongTotal}</p>
      <button
        className="btn btn-primary"
        onClick={onRetry}
        disabled={isLoading}>
        {isLoading ? "Loading..." : "Play again"}
      </button>
    </>
  );
}
