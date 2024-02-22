import { PlaceholderType } from "../../../types/questions";
import LabeledRadioButton from "../LabeledRadioButton";
import { useEffect, useState } from "react";

// TODO : sperate the logic as custom hooks
export default function RadioInput({ placeholder }: RadioInputProps) {
  const [value, setValue] = useState<string | undefined>();

  // to find initially checked entry
  useEffect(() => {
    if (typeof placeholder !== "object") {
      return;
    }
    const value = placeholder.find((entry) => entry.checked)?.value;
    setValue(value);
  }, [placeholder]);

  if (typeof placeholder !== "object") {
    return null;
  }

  const buttons = placeholder.map((entry, index) => {
    return (
      <LabeledRadioButton
        key={index}
        value={entry.value}
        label={entry.label}
        checked={entry.value === value}
        onChange={() => setValue(entry.value)}
      />
    );
  });
  return <>{buttons}</>;
}
type RadioInputProps = {
  placeholder: PlaceholderType;
};
