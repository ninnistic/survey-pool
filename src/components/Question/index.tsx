import { FormData } from "../../types/questions";

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
  const { handleClickForward } = useFormContext();
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

  return (
    <section className={styles.container} id={id}>
      <div className={styles.inner}>
        <h2>{question}</h2>
        {InputComponent && (
          <InputComponent
            {...formData}
            placeholder={placeholder}
            name={name}
            rules={validate}
          />
        )}
        <Button onClick={() => handleClickForward()}>Ok</Button>
      </div>
    </section>
  );
}

type QuestionProps = {
  formData: FormData;
  id: string;
};
