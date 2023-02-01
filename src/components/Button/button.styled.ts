import buttonMixin from "@styles/mixins/buttonMixin";
import styled from "styled-components";
import { layout, space, typography } from "styled-system";
import type { ButtonStyledProps } from "./button.types";
import buttonCommonStyles from "./utils/commonStyles";
import getSize from "./utils/getSize";
import getVariant from "./utils/getVariant";

const Container = styled.button<ButtonStyledProps>`
  // base styles
  ${buttonMixin}
  ${buttonCommonStyles}
  
  // sizes
  ${({ $size }) => getSize({ size: $size })}
  // variants
  ${({ $variant, theme }) => getVariant({ variant: $variant, theme })}

  // add ons
  ${space}
  ${layout}
  ${typography}
`;

const ButtonStyled = {
  Container
}

export default ButtonStyled