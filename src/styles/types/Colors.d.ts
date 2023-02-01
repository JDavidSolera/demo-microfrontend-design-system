export type ColorsKeys =
  | "white"
  | "black"
  | "primary"
  | "primary-light"
  | "primary-dark"
  | "secondary"
  | "secondary-light"
  | "secondary-dark"
  | "gray-1"
  | "gray-2"
  | "gray-3"
  | "gray-4"
  | "gray-5"
  | "gray-6"
  | "success"
  | "success-light"
  | "success-dark"
  | "warning"
  | "warning-light"
  | "warning-dark"
  | "danger"
  | "danger-light"
  | "danger-dark";

export type Colors = {
  [color in ColorsKeys]: string;
};
