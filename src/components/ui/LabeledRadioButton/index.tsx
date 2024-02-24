import { useId, ComponentProps } from "react";

export default function LabeledRadioButton({
  name,
  label,
  ...other
}: LabeledRadioButtonProps) {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="radio" name={name} {...other} />
    </>
  );
}
type LabeledRadioButtonProps = {
  name: string;
  label: string;
} & ComponentProps<"input">;
