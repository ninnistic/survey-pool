import { PlaceholderType } from "../../../types/questions";
export default function TextInput({ placeholder, name }: TextInputProps) {
  return <input type="text" placeholder={`${placeholder}`} name={name} />;
}

type TextInputProps = {
  name: string;
  placeholder: PlaceholderType;
};
