import { FormData } from "../../types/questions";
import { ComponentProps } from "react";
import Question from "../Question";
import styles from "./SurveyForm.module.css";
import { useFormContext } from "../../context/FormContextProvider";
import { useEffect } from "react";

export default function SurveyForm({
  questionList,
  ...formProps
}: SurveyFormProps) {
  const { tab } = useFormContext();

  useEffect(() => {
    document.getElementById(`q${tab}`)?.scrollIntoView({ behavior: "smooth" });
  }, [tab]);

  return (
    <form {...formProps} className={styles.form}>
      {questionList.map((question, index) => {
        return <Question formData={question} id={`q${index}`} />;
      })}
    </form>
  );
}

type SurveyFormProps = {
  questionList: FormData[];
} & ComponentProps<"form">;
