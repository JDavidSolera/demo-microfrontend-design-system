import "styled-components";
import { BreakPoints } from "./Breakpoints";
import { Colors } from "./Colors";
import { FontWeights } from "./FontWeights";
import { ZIndex } from "./ZIndex";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: "default" | "light" | "dark";
    colors: Colors;
    zIndex: ZIndex;
    space: number[];
    fonts: { main: string; secondary?: string };
    fontSizes: number[];
    fontWeights: FontWeights;
    breakpoints: BreakPoints;
    transitions: { default: string };
  }
}
