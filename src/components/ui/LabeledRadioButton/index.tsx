import { useId, ComponentProps } from "react";

export default function LabeledRadioButton({
  name,
  label,
  ...other
}: LabeledRadioButtonProps) {
  const id = useId();

  return (
    <>
      <input type="radio" name={name} {...other} />
      <label htmlFor={id}>{label}</label>
    </>
  );
}
type LabeledRadioButtonProps = {
  name: string;
  label: string;
} & ComponentProps<"input">;
