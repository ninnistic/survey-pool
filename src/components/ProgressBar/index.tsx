import styles from "./ProgressBar.module.css";

export default function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className={styles.outer}>
      <div className={styles.bar} style={{ width: `${percentage}%` }} />
    </div>
  );
}
type ProgressBarProps = {
  readonly percentage: number;
};
