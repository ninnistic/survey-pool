import InputType from "../../../types/input";
import { useState } from "react";
import useValidation from "../../../hooks/useValidation";
export default function TextInput({
  placeholder,
  name,
  rules,
}: TextInputProps) {
  const [value, setValue] = useState<string>("");
  const validationResult = useValidation(rules, "text", value);
  return (
    <>
      {validationResult && <span>{validationResult}</span>}
      <input
        type="text"
        placeholder={`${placeholder}`}
        name={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
}

type TextInputProps = InputType;
