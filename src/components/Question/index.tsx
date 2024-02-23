import { FormData } from "../../types/questions";

import TextInput from "../ui/TextInput";
import NumberInput from "../ui/NumberInput";
import Button from "../ui/Button";
import RadioInput from "../ui/RadioInput";
import CheckboxInput from "../ui/CheckboxInput";
import RadioNumberInput from "../ui/RadioNumberInput";
import RadioWithInput from "../ui/RadioWithInput";

/**
 *
 * @param param0 | formData : form에 들어갈 데이터 ( 질문, input의 타입들 )
 * @returns | 질문과 input을 렌더링
 */
export default function Question({ formData }: QuestionProps) {
  // based off the type of question, return the appropriate input component
  const { question, type, placeholder, name, validate } = formData;

  const INPUT = {
    // text: <TextInput placeholder={placeholder} />,
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
    <div>
      <h2>{question}</h2>
      {InputComponent && (
        <InputComponent
          {...formData}
          placeholder={placeholder}
          name={name}
          rules={validate}
        />
      )}
      <Button type="submit">Next</Button>
    </div>
  );
}

type QuestionProps = {
  formData: FormData;
};
