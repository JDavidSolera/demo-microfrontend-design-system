import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "@styles/theme/defaultTheme";
import { GlobalStyles } from "@styles/utils";

function StyleProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default StyleProvider;
