import { useNavigate } from "react-router-dom";
import styles from "./IntroPage.module.css";
import Button from "../../components/ui/Button";
export default function IntroPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/survey");
  };
  return (
    <div className={styles.intro}>
      다음은 여러분의 음주 성향을 알아보기 위한 설문입니다.
      <Button onClick={handleClick}>Start</Button>
    </div>
  );
}
