import { BreakPoints } from "@styles/types/Breakpoints";

export enum BreakpointsEnum {
  Mobile = 576,
  Tablet = 768,
  Laptop = 992,
  Desktop = 1200,
}

export const mediaQueries = {
  Mobile: `@media screen and (min-width: ${BreakpointsEnum.Mobile}px)`,
  Tablet: `@media screen and (min-width: ${BreakpointsEnum.Tablet}px)`,
  Laptop: `@media screen and (min-width: ${BreakpointsEnum.Laptop}px)`,
  Desktop: `@media screen and (min-width: ${BreakpointsEnum.Desktop}px)`,
};

export const breakpoints: BreakPoints = {
  xs: `${0}px`,
  sm: `${BreakpointsEnum.Mobile}px`,
  md: `${BreakpointsEnum.Tablet}px`,
  lg: `${BreakpointsEnum.Laptop}px`,
  xl: `${BreakpointsEnum.Desktop}px`,
};
