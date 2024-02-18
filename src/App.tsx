import "./App.css";
import { useEffect } from "react";

function App() {
  const todos = async () => {
    const response = await fetch(`/no`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    todos();
  }, []);

  return <div className="App"> Hello World</div>;
}

export default App;
