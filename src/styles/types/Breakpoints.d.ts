export type BreakpointsKeys = "xs" | "sm" | "md" | "lg" | "xl";

export type BreakPoints = {
  [breakpoint in BreakpointsKeys]: string;
};
