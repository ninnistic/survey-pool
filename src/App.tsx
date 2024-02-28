import "./App.css";
import { useQuestion } from "./hooks/useQuestion";
import SurveyForm from "./components/SurveyForm";
import Footer from "./components/Footer";

function App() {
  // 어떻게 하면 순서대로 input창을 보여줄지 생각하기
  const COMMON_QUESTION_URL = "api/question/common";
  return (
    <div className="App">
      <SurveyForm questionURL={COMMON_QUESTION_URL} action="#" />
      <Footer />
    </div>
  );
}

export default App;
