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
        const response = await fetch(url);
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

  return { isLoading, questionList, escapeValidateRule };
};
