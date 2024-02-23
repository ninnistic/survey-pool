import { ValidateRule } from "../types/questions";
import { InputType } from "../types/questions";
export default function useValidation(
  rules: ValidateRule[] = [],
  inputType: InputType,
  value: string
): string | null {
  return (
    rules
      .map((rule) => validateRule(rule, inputType, value))
      .find((result) => typeof result === "string") ?? null
  );
}

function validateRule(
  rule: ValidateRule,
  inputType: InputType,
  value: string
): string | null {
  if (rule.type === "not" && typeof rule.target === "string") {
    if (value === rule.target) {
      return rule.validateText;
    }
  }

  return null;
}
