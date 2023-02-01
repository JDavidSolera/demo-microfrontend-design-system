import { DefaultTheme } from "styled-components";
import {
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  space,
  zIndex,
  transitions,
} from "@styles/utils";

const defaultTheme: DefaultTheme = {
  mode: "default",
  colors: {
    white: "#FFF",
    black: "#000",
    primary: "#019DF4",
    "primary-light": "#80CEF9",
    "primary-dark": "#008EDD",
    secondary: "#0B2739",
    "secondary-light": "#A3ADB4",
    "secondary-dark": "#062E48",
    "gray-1": "#F6F6F6",
    "gray-2": "#D3D4D3",
    "gray-3": "#B6B7B7",
    "gray-4": "#86888C",
    "gray-5": "#50535A",
    "gray-6": "#313235",
    "success-light": "#ADDA8A",
    success: "#5CB615",
    "success-dark": "#499110",
    "warning-light": "#F8D2B3",
    warning: "#F28D15",
    "warning-dark": "#9F591F",
    "danger-light": "",
    danger: "#FF374A",
    "danger-dark": "",
  },
  space,
  fonts,
  fontSizes,
  fontWeights,
  breakpoints,
  zIndex,
  transitions,
};

export default defaultTheme;
