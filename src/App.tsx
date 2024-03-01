import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PATH_NAME } from "./constants/route";
import IntroPage from "./pages/IntroPage";
import OutroPage from "./pages/OutroPage";
import NoTargetPage from "./pages/NoTargetPage";
import SurveyForm from "./components/SurveyForm";

function App() {
  const COMMON_QUESTION_URL = "api/question/common";
  return (
    <Routes>
      <Route path={PATH_NAME.INTRO} element={<IntroPage />} />
      <Route
        path={PATH_NAME.SURVEY}
        element={<SurveyForm questionURL={COMMON_QUESTION_URL} />}
      />
      <Route path={PATH_NAME.NO_TARGET} element={<NoTargetPage />} />
      <Route path={PATH_NAME.OUTRO} element={<OutroPage />} />
    </Routes>
  );
}

export default App;
