import { FormData } from "../../types/questions";

import TextInput from "../ui/TextInput";
import NumberInput from "../ui/NumberInput";
import Button from "../ui/Button";
import RadioInput from "../ui/RadioInput";
import CheckboxInput from "../ui/CheckboxInput";
import RadioNumberInput from "../ui/RadioNumberInput";
import RadioWithInput from "../ui/RadioWithInput";
export default function Question({ formData }: QuestionProps) {
  // based off the type of question, return the appropriate input component
  const { question, type, placeholder, name } = formData;

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
        <InputComponent {...formData} placeholder={placeholder} name={name} />
      )}
      <Button type="submit">Next</Button>
    </div>
  );
}

type QuestionProps = {
  formData: FormData;
};
