import { PlaceholderType } from "./questions";
import { ValidateRule } from "./questions";

type InputType = {
  name: string;
  placeholder: PlaceholderType;
  rules?: ValidateRule[];
  onValidation?: (result: string | null) => void;
};

export default InputType;
