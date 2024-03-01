import InputType from "../../../types/input";
import { useState, useEffect } from "react";
import useValidation from "../../../hooks/useValidation";
import styles from "./TextInput.module.css";

export default function TextInput({
  placeholder,
  name,
  rules,
  onValidation,
  inputRef,
}: TextInputProps) {
  const [value, setValue] = useState<string>("");

  const validationResult = useValidation(rules, "text", value);

  useEffect(() => {
    onValidation?.(validationResult);
  });

  return (
    <>
      <input
        type="text"
        placeholder={`${placeholder}`}
        name={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        ref={inputRef}
        className={styles.input}
      />
    </>
  );
}

type TextInputProps = InputType;
