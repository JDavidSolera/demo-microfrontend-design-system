import { css, DefaultTheme } from "styled-components";
import type { ButtonVariant } from "../button.types";

const getVariant = ({
  variant = "primary",
  theme,
}: {
  variant?: ButtonVariant;
  theme: DefaultTheme;
}) =>
  ({
    primary: css`
      background: ${theme.colors.primary};
      color: white;

      &:hover {
        background: ${theme.colors["primary-dark"]};
      }

      &:disabled {
        background: ${theme.colors["primary-light"]};
      }
    `,
    secondary: css`
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};

      &:hover {
        border-color: ${theme.colors["primary-dark"]};
        color: ${theme.colors["primary-dark"]};
        background: ${theme.colors["gray-1"]};
      }

      &:disabled {
        border-color: ${theme.colors["primary-light"]};
        color: ${theme.colors["primary-light"]};
      }
    `,
    white: css`
      background: white;
      color: ${theme.colors.primary};

      &:hover {
        color: ${theme.colors["primary-dark"]};
        background: ${theme.colors["gray-1"]};
      }

      &:disabled {
        color: ${theme.colors["primary-light"]};
      }
    `,
    "dark-blue": css`
      background: ${theme.colors["secondary-dark"]};
      color: white;

      &:hover {
        background: ${theme.colors.secondary};
      }

      &:disabled {
        background: ${theme.colors["secondary-light"]};
      }
    `,
    success: css`
      background: ${theme.colors.success};
      color: white;

      &:hover {
        background: ${theme.colors["success-dark"]};
      }

      &:disabled {
        background: ${theme.colors["success-light"]};
      }
    `,
    "success-outlined": css`
      border: 1px solid ${theme.colors.success};
      color: ${theme.colors.success};

      &:hover {
        border-color: ${theme.colors["success-dark"]};
        color: ${theme.colors["success-dark"]};
        background: ${theme.colors["gray-1"]};
      }

      &:disabled {
        border-color: ${theme.colors["success-light"]};
        color: ${theme.colors["success-light"]};
      }
    `,
  }[variant]);

export default getVariant;
