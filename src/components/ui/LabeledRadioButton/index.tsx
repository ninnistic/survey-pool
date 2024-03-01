import { useId, ComponentProps } from "react";
import styles from "./LabeledRadioButton.module.css";

export default function LabeledRadioButton({
  name,
  label,
  ...other
}: LabeledRadioButtonProps) {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="radio" name={name} {...other} className={styles.input} />
    </>
  );
}
type LabeledRadioButtonProps = {
  name: string;
  label: string;
} & ComponentProps<"input">;
