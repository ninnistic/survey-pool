import InputType from "../../../types/input";

export default function NumberInput({ placeholder }: NumberInputProps) {
  return <input type="number" placeholder={`${placeholder}`} />;
}

type NumberInputProps = InputType;
