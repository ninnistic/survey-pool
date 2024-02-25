import { FormData } from "../../types/questions";
import { ComponentProps } from "react";
import Question from "../Question";
import IntroPage from "../../pages/IntroPage";
export default function SurveyForm({
  questionList,
  ...formProps
}: SurveyFormProps) {
  const pages = [
    {
      number: 0,
      component: <IntroPage />,
    },
    {},
  ];
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
