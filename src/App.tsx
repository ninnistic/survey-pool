import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PATH_NAME } from "./constants/route";
import IntroPage from "./pages/IntroPage";
import OutroPage from "./pages/OutroPage";
import NoTargetPage from "./pages/NoTargetPage";
import SurveyForm from "./components/SurveyForm";
import { useParams } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path={PATH_NAME.INTRO} element={<IntroPage />} />
      <Route
        path={PATH_NAME.SURVEY}
        element={<SurveyForm identifier="common" />}
      />
      <Route path={`/survey/:typeID`} element={<SurveyWithID />} />

      <Route path={PATH_NAME.NO_TARGET} element={<NoTargetPage />} />
      <Route path={PATH_NAME.OUTRO} element={<OutroPage />} />
    </Routes>
  );
}

function SurveyWithID() {
  const { typeID } = useParams();
  return <SurveyForm identifier={`${typeID}`} />;
}
export default App;
