import { useState, useEffect } from "react";
import { FormField } from "../types/questions";
import { EscapeValidateRule } from "../types/questions";
import { Answers } from "../types/answers";
export const useQuestion = (identifier: "common" | string) => {
  const BASE_QUESTION_URL = "/api/question";
  const [isLoading, setIsLoading] = useState(false);
  const [questionList, setQuestionList] = useState<FormField[]>([]);
  const [escapeValidateRule, setEscapeValidateRule] =
    useState<EscapeValidateRule>();

  useEffect(() => {
    const fetchQuestionList = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_QUESTION_URL}/${identifier}`, {
          method: "GET",
        });
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
  }, [identifier]);

  const submitAnswer = async (answers: FormData) => {
    try {
      const BASE_ANSWER_URL = "/api/answers";
      setIsLoading(true);
      const response = await fetch(`${BASE_ANSWER_URL}/${identifier}`, {
        method: "POST",
        body: answers,
      });
      const data = (await response.json()) as Answers;

      return data.nextTypeId;
    } catch (error) {
      setIsLoading(false);
    }
  };

  return { isLoading, questionList, escapeValidateRule, submitAnswer };
};
