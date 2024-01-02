import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className="progress w-full">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p className="text-xl text-black">
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p className="text-xl text-black">
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;