import { FormField } from "../../types/questions";
import { useState, useRef, useEffect } from "react";
import TextInput from "../ui/TextInput";
import NumberInput from "../ui/NumberInput";
import Button from "../ui/Button";
import RadioInput from "../ui/RadioInput";
import CheckboxInput from "../ui/CheckboxInput";
import RadioNumberInput from "../ui/RadioNumberInput";
import RadioWithInput from "../ui/RadioWithInput";
import styles from "./Question.module.css";
import { useFormContext } from "../../context/FormContextProvider";

/**
 *
 * @param param0 | formData : form에 들어갈 데이터 ( 질문, input의 타입들 )
 * @returns | 질문과 input을 렌더링
 */
export default function Question({
  formData,
  id,
  questionNumber,
}: QuestionProps) {
  // based off the type of question, return the appropriate input component
  const { question, type, placeholder, name, validate } = formData;
  const { state, dispatch } = useFormContext();
  const { hasNext, tab } = state;

  const [validationResult, setValidationResult] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const INPUT = {
    text: TextInput,
    number: NumberInput,
    radio: RadioInput,
    checkbox: CheckboxInput,
    radioNumber: RadioNumberInput,
    radioWithInput: RadioWithInput,
  };
  // dynamically selected by string type
  const InputComponent = INPUT[type];
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (hasNext) {
      e.preventDefault();
    }
    dispatch("next");
  };

  useEffect(() => {
    if (tab === questionNumber) {
      inputRef.current?.focus({ preventScroll: true });
    }
  }, [questionNumber, tab]);

  return (
    <section className={styles.container} id={id}>
      <div className={styles.inner}>
        <h2 className={styles.header}>
          Q{questionNumber + 1}.{question}
        </h2>
        {InputComponent && (
          <InputComponent
            {...formData}
            placeholder={placeholder}
            name={name}
            rules={validate}
            onValidation={(result) => setValidationResult(result)}
            inputRef={inputRef}
          />
        )}
        <Button onClick={handleClick} disabled={validationResult !== null}>
          {hasNext ? "Next" : "Submit"}
        </Button>
      </div>
    </section>
  );
}

type QuestionProps = {
  formData: FormField;
  id: string;
  questionNumber: number;
};
