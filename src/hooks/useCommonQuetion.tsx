import { useState, useEffect } from "react";
import { FormData } from "../types/questions";
import { EscapeValidateRule } from "../types/questions";

export const useCommonQuestion = () => {
  const [commmonQuestionList, setCommmonQuestionList] = useState<FormData[]>(
    []
  );
  const [commonEscapeValidate, setCommonEscapeValidate] =
    useState<EscapeValidateRule>();

  const fetchQuestionList = async () => {
    const response = await fetch(`/api/question/common`);
    const initialData = await response.json();
    const forms = initialData.data.forms;
    const escapeValidate = initialData.data.escapeValidate;
    setCommmonQuestionList(forms);
    setCommonEscapeValidate(escapeValidate);
  };

  useEffect(() => {
    fetchQuestionList();
  }, []);

  return { commmonQuestionList, commonEscapeValidate };
};
