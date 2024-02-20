import { ComponentProps } from "react";

export default function Button({
  variant = "primary",
  ...buttonProps
}: ButtonProps) {
  return <button {...buttonProps} />;
}

type ButtonProps = {
  variant?: "primary" | "secondary";
} & ComponentProps<"button">;
