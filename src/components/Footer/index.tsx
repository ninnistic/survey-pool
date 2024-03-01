import Button from "../ui/Button";
import styles from "./Footer.module.css";
import { useFormContext } from "../../context/FormContextProvider";

export default function Footer() {
  const { dispatch } = useFormContext();
  const handleClickPrev = () => {
    dispatch("prev");
  };

  const handleClickNext = () => {
    dispatch("next");
  };
  return (
    <footer className={styles.footer}>
      <Button onClick={handleClickPrev}>🔼</Button>
      <Button onClick={handleClickNext}>🔽</Button>
    </footer>
  );
}
