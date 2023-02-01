import { cloneElement } from "react";
import S from "./button.styled";
import type { ButtonProps } from "./button.types";

function Button({
  label,
  iconLeft,
  iconRight,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <S.Container {...props}>
      {iconLeft && cloneElement(iconLeft, { style: { fontSize: "1.2em" } })}
      {label}
      {iconRight && cloneElement(iconRight, { style: { fontSize: "1.2em" } })}
    </S.Container>
  );
}

export default Button;
