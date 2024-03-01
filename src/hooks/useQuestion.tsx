import { useState, useEffect } from "react";
import { FormField } from "../types/questions";
import { EscapeValidateRule } from "../types/questions";

export const useQuestion = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [questionList, setQuestionList] = useState<FormField[]>([]);
  const [escapeValidateRule, setEscapeValidateRule] =
    useState<EscapeValidateRule>();

  useEffect(() => {
    const fetchQuestionList = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, { method: "GET" });
        const initialData = await response.json();
        const forms = initialData.data.forms;
        const escapeValidate = initialData.data.escapeValidate;
        setQuestionList(forms);
        setEscapeValidateRule(escapeValidate);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchQuestionList();
  }, [url]);

  const submitAnswer = async (answers: FormData) => {
    try {
      setIsLoading(true);
      const postURL = url.replace("/question/", "/answers/");
      const response = await fetch(postURL, {
        method: "POST",
        body: answers,
      });
      const data = await response.json();
      //TODO: type 지정하기
      return data.data.nextTypeId;
    } catch (error) {
      setIsLoading(false);
    }
  };

  return { isLoading, questionList, escapeValidateRule, submitAnswer };
};
