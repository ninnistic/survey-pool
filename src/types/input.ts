import { PlaceholderType } from "./questions";
import { ValidateRule } from "./questions";

type InputType = {
  name: string;
  placeholder: PlaceholderType;
  rules?: ValidateRule[];
};

export default InputType;
