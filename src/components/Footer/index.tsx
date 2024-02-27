import Button from "../ui/Button";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Button>🔼</Button>
      <Button>🔽</Button>
    </footer>
  );
}
