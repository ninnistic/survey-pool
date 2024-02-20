import { FormData } from "../../types/questions";
import { ComponentProps } from "react";
import Question from "../Question";
export default function SurveyForm({
  questionList,
  ...formProps
}: SurveyFormProps) {
  return (
    <form {...formProps}>
      {questionList.map((question) => {
        return <Question formData={question} />;
      })}
    </form>
  );
}

type SurveyFormProps = {
  questionList: FormData[];
} & ComponentProps<"form">;
