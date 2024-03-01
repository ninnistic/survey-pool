import React, { createContext, useContext, useReducer } from "react";

const FormContext = createContext<ContextProps | {}>({});
const FormContextProvider = ({
  children,
  questionCount,
}: FormProviderProps) => {
  const [state, dispatch] = useReducer(reducer, {
    tab: 0,
    hasPrev: false,
    hasNext: true,
    questionCount,
  });
  console.log(state);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
// FormContext에서 가져온 값을 ContextProps 타입으로 변환하여 반환하는 함수
export const useFormContext = () => useContext(FormContext) as ContextProps;

function reducer(state: State, action: Action): State {
  switch (action) {
    case "next":
      return {
        ...state,
        tab: state.tab < state.questionCount - 1 ? state.tab + 1 : state.tab,
        hasNext: state.tab < state.questionCount - 1 ? true : false,
        hasPrev: state.tab > 0 ? true : false,
      };
    case "prev":
      return {
        ...state,
        tab: state.tab > 0 ? state.tab - 1 : state.tab,
        hasNext: state.tab < state.questionCount - 1 ? true : false,
        hasPrev: state.tab > 0 ? true : false,
      };
    default:
      return state;
  }
}

type FormProviderProps = {
  children: React.ReactNode;
  questionCount: number;
};
type ContextProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
type Action = "next" | "prev";
type State = {
  tab: number;
  hasPrev: boolean;
  hasNext: boolean;
  questionCount: number;
};
