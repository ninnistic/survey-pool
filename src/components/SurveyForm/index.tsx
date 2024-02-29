import { ComponentProps } from "react";
import Question from "../Question";
import styles from "./SurveyForm.module.css";
import { useFormContext } from "../../context/FormContextProvider";
import { useEffect } from "react";
import FormContextProvider from "../../context/FormContextProvider";
import { useQuestion } from "../../hooks/useQuestion";
import ProgressBar from "../ProgressBar";

export default function SurveyForm({
  questionURL,
  ...formProps
}: SurveyFormProps) {
  const { questionList, submitAnswer } = useQuestion(questionURL);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    submitAnswer(formData);
    console.log("submit", formData);
  };

  if (questionList.length <= 0) return null;

  return (
    <FormContextProvider questionCount={questionList.length}>
      {/* FormContextProvider가 생성되기 전까지는 useFormContext를 사용할 수 없으므로, 위에 선언해도 runtime에러가 남 
      추후에 test 할 수 있도록 독립적으로 만들음*/}
      <FormProgress />
      {/*ScrollManager은 render은 하지 않되, react의 render tree로써 useEffect를 활용해 mount될 때 역할함 */}
      <ScrollManager />
      <form {...formProps} className={styles.form} onSubmit={handleSubmit}>
        {questionList.map((question, index) => {
          return <Question key={index} formData={question} id={`q${index}`} />;
        })}
      </form>
    </FormContextProvider>
  );
}

function ScrollManager() {
  const { state } = useFormContext();
  const { tab } = state;

  useEffect(() => {
    document.getElementById(`q${tab}`)?.scrollIntoView({ behavior: "smooth" });
  }, [tab]);

  return null;
}

function FormProgress() {
  const { tab, questionCount } = useFormContext().state;
  return (
    <div className={styles.formProgress}>
      <ProgressBar percentage={(tab / questionCount) * 100} />
    </div>
  );
}
type SurveyFormProps = {
  questionURL: string;
} & ComponentProps<"form">;
