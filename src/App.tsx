import "./App.css";
import { useQuestion } from "./hooks/useQuestion";
import SurveyForm from "./components/SurveyForm";
import Footer from "./components/Footer";

function App() {
  const COMMON_QUESTION_URL = "api/question/common";
  const { questionList } = useQuestion(COMMON_QUESTION_URL);

  // 어떻게 하면 순서대로 input창을 보여줄지 생각하기
  return (
    <div className="App">
      <SurveyForm questionList={questionList} action="#" />
      <Footer />
    </div>
  );
}

export default App;
