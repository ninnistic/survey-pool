import { useId, ComponentProps } from "react";

export default function LabeledRadioButton({
  label,
  ...other
}: LabeledRadioButtonProps) {
  const id = useId();

  return (
    <>
      <input type="radio" name="number" {...other} />
      <label htmlFor={id}>{label}</label>
    </>
  );
}
type LabeledRadioButtonProps = {
  label: string;
} & ComponentProps<"input">;
