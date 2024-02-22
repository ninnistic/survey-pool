import { PlaceholderType } from "../../../types/questions";

import LabeledRadioButton from "../LabeledRadioButton";
import { useEffect, useState } from "react";

export default function RadioWithInput({
  placeholder,
  name,
}: RadioWithInputProps) {
  const [value, setValue] = useState<string | undefined>();
  // const [inputDisplay, setInputDisplay] = useState(false);
  // to find initially checked entry
  useEffect(() => {
    if (typeof placeholder !== "object") {
      return;
    }
    const value = placeholder.find((entry) => entry.checked)?.value;
    setValue(value);
  }, [placeholder]);

  if (typeof placeholder !== "object") {
    return null;
  }

  const buttons = placeholder.map((entry, index) => {
    // 만약 "기타 "버튼을 누르면 TextInput 이 display 되어야 한다.
    // 따라서 onClick 이벤트를 추가하여, "기타" 버튼을 누르면 TextInput 이 대신 display 되도록 한다.
    // 그리고 다른 radio 버튼들을 누른다면 TextInput은 사라지고 labeledRadioButton이 display 되도록 한다.

    return (
      <>
        <LabeledRadioButton
          key={index}
          name={name}
          value={entry.value}
          label={entry.label}
          checked={entry.value === value}
          onChange={() => setValue(entry.value)}
        />
      </>
    );
  });
  return <>{buttons}</>;
}
type RadioWithInputProps = {
  name: string;
  placeholder: PlaceholderType;
};
