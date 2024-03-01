import { PlaceholderType } from "./questions";
import { ValidateRule } from "./questions";

type InputType = {
  name: string;
  placeholder: PlaceholderType;
  rules?: ValidateRule[];
  onValidation?: (result: string | null) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
};

export default InputType;
