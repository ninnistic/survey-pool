import { PlaceholderType } from "../../../types/questions";
import { useState } from "react";
import LabeledRadioButton from "../LabeledRadioButton";

export default function RadioNumberInput({
  placeholder,
  name,
}: RadioNumberInputProps) {
  const [value, setValue] = useState(
    typeof placeholder === "number" ? placeholder : 0
  );

  // dynamically generate radio buttons
  const buttons = Array(7)
    .fill(0)
    .map((_, i) => (
      <LabeledRadioButton
        name={name}
        key={i}
        value={i + 1}
        label={`${i + 1}`}
        checked={i + 1 === value}
        onChange={() => setValue(i + 1)}
      />
    ));

  return <>{buttons}</>;
}

type RadioNumberInputProps = {
  name: string;
  placeholder: PlaceholderType;
};
