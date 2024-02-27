import { useState, useEffect } from "react";
import { FormData } from "../types/questions";
import { EscapeValidateRule } from "../types/questions";

export const useQuestion = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [questionList, setQuestionList] = useState<FormData[]>([]);
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

  const submitAnswer = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return { isLoading, questionList, escapeValidateRule, submitAnswer };
};
