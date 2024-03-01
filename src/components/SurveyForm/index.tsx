import { ComponentProps } from "react";
import Question from "../Question";
import styles from "./SurveyForm.module.css";
import { useFormContext } from "../../context/FormContextProvider";
import { useEffect } from "react";
import FormContextProvider from "../../context/FormContextProvider";
import { useQuestion } from "../../hooks/useQuestion";
import ProgressBar from "../ProgressBar";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

export default function SurveyForm({
  identifier,
  ...formProps
}: SurveyFormProps) {
  const { questionList, submitAnswer } = useQuestion(identifier);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nextTypeId = await submitAnswer(formData);
    if (nextTypeId === "undfined") return;
    navigate(`/survey/${nextTypeId}`);
  };

  if (questionList.length <= 0) return null;

  return (
    <FormContextProvider questionCount={questionList.length}>
      <Header>
        <FormProgress />
      </Header>
      {/* FormContextProvider가 생성되기 전까지는 useFormContext를 사용할 수 없으므로, 위에 선언해도 runtime에러가 남 
      추후에 test 할 수 있도록 독립적으로 만들음*/}

      {/*ScrollManager은 render은 하지 않되, react의 render tree로써 useEffect를 활용해 mount될 때 역할함 */}
      <ScrollManager />
      <form {...formProps} className={styles.form} onSubmit={handleSubmit}>
        {questionList.map((question, index) => {
          return (
            <Question
              key={question.name}
              formData={question}
              id={`q${index}`}
              questionNumber={index}
            />
          );
        })}
      </form>
      <Footer />
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
  return <ProgressBar percentage={(tab / questionCount) * 100} />;
}
type SurveyFormProps = {
  identifier: "common" | string;
} & ComponentProps<"form">;
