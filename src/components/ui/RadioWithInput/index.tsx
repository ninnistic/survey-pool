import TextInput from "../TextInput";
import LabeledRadioButton from "../LabeledRadioButton";
import { useEffect, useState } from "react";
import styles from "./RadioWithInput.module.css";

import InputType from "../../../types/input";

export default function RadioWithInput({
  placeholder,
  name,
  inputRef,
  rules,
  onValidation,
}: RadioWithInputProps) {
  const [value, setValue] = useState<string>();
  const [inputDisplay, setInputDisplay] = useState(false);

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
      <>
        <LabeledRadioButton
          key={entry.value}
          name={name}
          value={entry.value}
          label={entry.label}
          checked={entry.value === value}
          onChange={() => setValue(entry.value)}
          onClick={
            entry.label === "기타"
              ? () => setInputDisplay(true)
              : () => setInputDisplay(false)
          }
          className={styles.input}
          ref={inputRef}
        />
      </>
    );
  });

  const inputComponent = inputDisplay && (
    <TextInput placeholder="" name={name} />
  );
  return (
    <>
      {buttons}
      {inputComponent}
    </>
  );
}
type RadioWithInputProps = InputType;
