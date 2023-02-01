import { ButtonHTMLAttributes } from "react";
import { DefaultTheme } from "styled-components";
import { LayoutProps, SpaceProps, TypographyProps } from "styled-system";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "white"
  | "dark-blue"
  | "success"
  | "success-outlined";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonStyledProps = SpaceProps<DefaultTheme> &
  LayoutProps<DefaultTheme> & TypographyProps<DefaultTheme> & {
    $size?: ButtonSize;
    $variant?: ButtonVariant;
  };

export type ButtonCommonProps = ButtonStyledProps & {
  label: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};

export type ButtonProps = ButtonCommonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
