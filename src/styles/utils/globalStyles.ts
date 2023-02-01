import * as styled from "styled-components";
import normalize from "./normalize";

const GlobalStyles = styled.createGlobalStyle`
  ${normalize}

  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.fonts.main}, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export default GlobalStyles;
