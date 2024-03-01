import InputType from "../../../types/input";
import styles from "./NumberInput.module.css";
import useValidation from "../../../hooks/useValidation";
import { useEffect, useState } from "react";
export default function NumberInput({
  rules,
  placeholder,
  inputRef,
  onValidation,
}: NumberInputProps) {
  const [value, setValue] = useState<string>("");
  const validationResult = useValidation(rules, "number", value);

  useEffect(() => {
    onValidation?.(validationResult);
  });
  return (
    <>
      <input
        type="number"
        placeholder={`${placeholder}`}
        ref={inputRef}
        className={styles.input}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
    </>
  );
}

type NumberInputProps = InputType;
