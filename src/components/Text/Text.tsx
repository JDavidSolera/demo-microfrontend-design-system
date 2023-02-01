import styled from "styled-components";
import { space, typography, color, layout } from "styled-system";
import type { TextProps } from "./text.types";
import getVariant from "./getVariant";

const Text = styled.p<TextProps>`
  // base
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: 400;

  // variants
  ${({ $size }) => $size && getVariant($size)}

  // add ons
  ${space}
  ${typography}
  ${color}
  ${layout}
`;

export default Text;
