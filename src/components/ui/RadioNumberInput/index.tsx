import { PlaceholderType } from "../../../types/questions";
import { useId, useState, ComponentProps } from "react";

export default function RadioNumberInput({
  placeholder,
}: RadioNumberInputProps) {
  const [value, setValue] = useState(
    typeof placeholder === "number" ? placeholder : 0
  );

  // dynamically generate radio buttons
  const buttons = Array(7)
    .fill(0)
    .map((_, i) => (
      <LabeledRadioButton
        key={i}
        value={i + 1}
        label={`${i + 1}`}
        checked={i + 1 === value}
        onChange={() => setValue(i + 1)}
      />
    ));

  return <>{buttons}</>;
  // return (
  //   <>
  //     <CustomRadioButton value="1" label="1" />
  //     <CustomRadioButton value="2" label="2" />
  //     <CustomRadioButton value="3" label="3" />
  //     <CustomRadioButton value="4" label="4" />
  //     <CustomRadioButton value="5" label="5" />
  //     <CustomRadioButton value="6" label="6" />
  //     <CustomRadioButton value="7" label="7" />
  //   </>
  // );
}

type RadioNumberInputProps = {
  placeholder: PlaceholderType;
};

export function LabeledRadioButton({
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
  placeholder?: PlaceholderType;
} & ComponentProps<"input">;
