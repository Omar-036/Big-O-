import FinishScreen from "../components/FinishScreen";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NextButton from "../components/NextButton";
import Progress from "../components/Progress";
import Question from "../components/Question";
import Timer from "../components/Timer";
import { useQuiz } from "../contexts/QuizContext";

function QuizApp() {
  const { status } = useQuiz();

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center p-12 w-full md:w-[40rem] mx-auto">
        {status === "ready" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </div>
    </div>
  );
}

export default QuizApp;
