import { FormField } from "../../types/questions";
import { useState } from "react";
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
export default function Question({ formData, id }: QuestionProps) {
  // based off the type of question, return the appropriate input component
  const { question, type, placeholder, name, validate } = formData;
  const { state, dispatch } = useFormContext();
  const { hasNext, tab } = state;
  const QUESTION_NUMBER = tab + 1;
  const [validationResult, setValidationResult] = useState<string | null>(null);
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
  return (
    <section className={styles.container} id={id}>
      <div className={styles.inner}>
        <h2>
          Q{QUESTION_NUMBER}.{question}
        </h2>
        {InputComponent && (
          <InputComponent
            {...formData}
            placeholder={placeholder}
            name={name}
            rules={validate}
            onValidation={(result) => setValidationResult(result)}
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
};
