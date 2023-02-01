import { css } from "styled-components";
import type { ButtonSize } from "../button.types";

const getSize = ({ size = "md" }: { size?: ButtonSize }) =>
  ({
    sm: css`
      padding: 6px 24px 6px 24px;
      //styleName: Mobile/Sub 2 - Bold;
      font-size: 14px;
      line-height: 20px;
    `,
    md: css`
      padding: 8px 32px 8px 32px;
      //styleName: Desktop/Sub 2 - Bold;
      font-size: 16px;
      line-height: 24px;
    `,
    lg: css`
      padding: 16px 64px 16px 64px;
      //styleName: Desktop/Sub 1 - Bold;
      font-size: 18px;
      line-height: 24px;
    `,
  }[size]);

export default getSize;
