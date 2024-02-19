import "./App.css";
import { useEffect } from "react";

function App() {
  const commonQuestionList = async () => {
    const response = await fetch(`/api/question/common`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    commonQuestionList();
  }, []);

  return <div className="App"> Hello World</div>;
}

export default App;
