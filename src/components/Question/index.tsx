import { FormData } from "../../types/questions";

export default function Question({ formData }: QuestionProps) {
  // based off the type of question, return the appropriate input component
  return <div>{formData.name}</div>;
}

type QuestionProps = {
  formData: FormData;
};
