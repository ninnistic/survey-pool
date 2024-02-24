import { useState } from "react";
import { ValidateRule } from "../types/questions";
import { InputType } from "../types/questions";

/**
 *
 * @param rules | 해당 input field에 대한 유효성 검증 규칙
 * @param inputType | input의 type
 * @param value | input의 value
 * @returns - 유효성 검증 결과 ( 유효하면 null 반환, 유효하지 않다면 에러 메세지 반환 )
 */
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

/**
 *
 * @param rule | 한개의 validate rule에 대한 검증 규칙
 * @param inputType | input의 type
 * @param value | input의 value
 * @returns
 */
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
  if (rule.type === "pattern" && typeof rule.target === "string") {
    const pattern = new RegExp(rule.target);
    if (!pattern.test(value)) {
      return rule.validateText;
    }
  }
  if (
    rule.type === "minMax" &&
    Array.isArray(rule.target) &&
    inputType === "number"
  ) {
    const [lower, upper] = rule.target;
    //only max
    if (lower === "-" && typeof upper === "number") {
      if (parseInt(value) > upper) {
        return rule.validateText;
      }
    }
    //only min
    if (upper === "-" && typeof lower === "number") {
      if (parseInt(value) < lower) {
        return rule.validateText;
      }
    }
    //min max both
    if (typeof lower === "number" && typeof upper === "number") {
      if (parseInt(value) < lower || parseInt(value) > upper) {
        return rule.validateText;
      }
    }
  }
  return null;
}
