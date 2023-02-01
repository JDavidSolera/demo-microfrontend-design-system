import { css } from "styled-components";

const commonStyles = css`
  background: transparent;
  border-radius: 60px;
  letter-spacing: 0em;
  font-weight: 700;
  text-decoration: none;
  transition: background ${({ theme }) => theme.transitions.default};

  &:disabled {
    pointer-events: none;
  }
`;

export default commonStyles;
