import { PlaceholderType } from "../../../types/questions";

export default function NumberInput({ placeholder }: NumberInputProps) {
  return <input type="number" placeholder={`${placeholder}`} />;
}

type NumberInputProps = {
  placeholder: PlaceholderType;
};
