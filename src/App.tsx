import "./App.css";
import { useCommonQuestion } from "./hooks/useCommonQuetion";
import SurveyForm from "./components/SurveyForm";
function App() {
  const { commmonQuestionList } = useCommonQuestion();

  // 어떻게 하면 순서대로 input창을 보여줄지 생각하기
  return (
    <div className="App">
      <SurveyForm questionList={commmonQuestionList} action="#" />
    </div>
  );
}

export default App;
