import { useState } from "react";
import QuizSession from "./components/QuizSession";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <QuizSession />
  ) : (
    <Login onLogin={() => setIsLoggedIn(true)} />
  );
}

export default App;
