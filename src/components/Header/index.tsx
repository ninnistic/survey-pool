import { PropsWithChildren } from "react";
import styles from "./Header.module.css";

export default function Header({ children }: PropsWithChildren) {
  return (
    <header className={styles.header}>
      LOGO // Header
      <div>{children}</div>
    </header>
  );
}
