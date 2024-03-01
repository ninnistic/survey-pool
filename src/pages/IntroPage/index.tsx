import { useNavigate } from "react-router-dom";
export default function IntroPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/survey");
  };
  return (
    <div>
      IntroPage
      <button onClick={handleClick}>Start</button>
    </div>
  );
}
