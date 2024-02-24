export type InputType =
  | "text"
  | "number"
  | "checkbox"
  | "radio"
  | "radioNumber"
  | "radioWithInput";

export type PlaceholderType =
  | number
  | boolean
  | string
  | { label: string; value: string; checked: boolean }[];

export type ValidateRule = {
  type: "not" | "minMax" | "sameAS" | "pattern" | "minMaxLength";
  target: number | ["-" | number, "-" | number] | string | `$name`;
  validateText: string;
};

export type FormData = {
  name: string;
  question: string;
  required: boolean;
  type: InputType;
  placeholder: PlaceholderType;
  validate: ValidateRule[];
};

export type EscapeValidateRule = {
  name: string;
  type: "not" | "minMax" | "sameAS" | "pattern" | "minMaxLength";
  target: number | [number, number | string] | string | `$name`;
};

export type QuestionsResponse = {
  status: number;
  data: {
    userId?: string; // userId는 typeID가 common인 특수한 경우에만 리턴된다.
    forms: FormData[];
    escapeValidate: EscapeValidateRule[];
  };
};
