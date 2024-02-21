import { PlaceholderType } from "../../../types/questions";
export default function TextInput({ placeholder }: TextInputProps) {
  return <input type="text" placeholder={`${placeholder}`} />;
}

type TextInputProps = {
  placeholder: PlaceholderType;
};
