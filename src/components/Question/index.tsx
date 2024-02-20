import { FormData } from "../../types/questions";
import {
  INPUT_TEXT,
  INPUT_NUMBER,
  INPUT_CHECKBOX,
  INPUT_RADIO,
  INPUT_RADIO_NUMBER,
  INPUT_RADIO_WITH_INPUT,
} from "../../constants/question";
import TextInput from "../ui/TextInput";
import NumberInput from "../ui/NumberInput";
import Button from "../ui/Button";
import RadioInput from "../ui/RadioInput";
import CheckboxInput from "../ui/CheckboxInput";
import RadioNumberInput from "../ui/RadioNumberInput";
export default function Question({ formData }: QuestionProps) {
  // based off the type of question, return the appropriate input component
  const { type, question } = formData;

  const INPUTS = {
    text: <TextInput />,
    number: <NumberInput />,
    radio: <RadioInput />,
    checkbox: <CheckboxInput />,
    radioNumber: <RadioNumberInput />,
    radioWithInput: <RadioInput />,
  };

  return (
    <div>
      <h2>{question}</h2>
      {INPUTS[type]}
      <Button type="submit">Next</Button>
    </div>
  );
}

type QuestionProps = {
  formData: FormData;
};
