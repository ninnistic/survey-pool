import { ComponentProps } from "react";
import styles from "./Button.module.css";
export default function Button({
  variant = "primary",
  children,
  ...buttonProps
}: ButtonProps) {
  let variantClass;
  switch (variant) {
    case "primary":
      variantClass = "primary";
      break;
    case "secondary":
      variantClass = "secondary";
      break;
  }
  return (
    <button {...buttonProps} className={`${styles.base} ${variantClass}`}>
      {children}
    </button>
  );
}

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: string;
} & ComponentProps<"button">;
