import { DefaultTheme } from "styled-components";
import { ColorProps, LayoutProps, SpaceProps, TypographyProps } from "styled-system";

export type Titles = "H1" | "H2" | "H3" | "H4" | "H5" | "H6";

export type Subtitles = "Sub1" | "Sub2";

export type Bodies = "Body1" | "Body2" | "Body3" | "Body4" | "Alt" | "Tiny";

export type Captions = "Caption1";

export type TextProps = SpaceProps<DefaultTheme> &
  ColorProps<DefaultTheme> &
  TypographyProps<DefaultTheme> & LayoutProps<DefaultTheme> & {
    $size?: Titles | Subtitles | Captions | Bodies;
  };
