import React, { createContext, useContext, useState } from "react";

const FormContext = createContext<ContextProps | {}>({});
const FormContextProvider = ({ children }: FormProviderProps) => {
  const [tab, setTab] = useState(0);

  const handleClickForward = () => {
    setTab(tab + 1);
  };

  return (
    <FormContext.Provider value={{ tab, setTab, handleClickForward }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
// FormContext에서 가져온 값을 ContextProps 타입으로 변환하여 반환하는 함수
export const useFormContext = () => useContext(FormContext) as ContextProps;

type FormProviderProps = {
  children: JSX.Element;
};
type ContextProps = {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  handleClickForward: () => void;
};
