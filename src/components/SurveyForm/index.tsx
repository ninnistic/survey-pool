import { FormData } from "../../types/questions";
import { ComponentProps } from "react";
import Question from "../Question";
import styles from "./SurveyForm.module.css";
import { useFormContext } from "../../context/FormContextProvider";
import { useEffect } from "react";
import FormContextProvider from "../../context/FormContextProvider";
export default function SurveyForm({
  questionList,
  ...formProps
}: SurveyFormProps) {
  /*아직 fetch 되지 않았을 경우 (0인 경우에 reducer가 동작하지 않으므로) 0보다 작거나 같다면 null을 return 한다. */

  if (questionList.length <= 0) return null;
  return (
    <FormContextProvider questionCount={questionList.length}>
      {/*ScrollManager은 render은 하지 않되, react의 render tree로써 useEffect를 활용해 mount될 때 역할함 */}
      <ScrollManager />
      <form {...formProps} className={styles.form}>
        {questionList.map((question, index) => {
          return <Question formData={question} id={`q${index}`} />;
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

type SurveyFormProps = {
  questionList: FormData[];
} & ComponentProps<"form">;
