import { mediaQueries } from "@styles/utils";
import { css } from "styled-components";
import type { Bodies, Captions, Subtitles, Titles } from "./text.types";

const mediaDevice = mediaQueries.Laptop;

const getVariant = (title: Titles | Subtitles | Bodies | Captions) =>
  ({
    H1: css`
      font-size: 32px;
      line-height: 40px;

      ${mediaDevice} {
        font-size: 40px;
        line-height: 48px;
      }
    `,
    H2: css`
      font-size: 28px;
      line-height: 32px;

      ${mediaDevice} {
        font-size: 38px;
        line-height: 46px;
      }
    `,
    H3: css`
      font-size: 24px;
      line-height: 32px;

      ${mediaDevice} {
        font-size: 32px;
        line-height: 40px;
      }
    `,
    H4: css`
      font-size: 22px;
      line-height: 24px;

      ${mediaDevice} {
        font-size: 28px;
        line-height: 32px;
      }
    `,
    H5: css`
      font-size: 18px;
      line-height: 24px;

      ${mediaDevice} {
        font-size: 20px;
        line-height: 28px;
      }
    `,
    H6: css`
      font-size: 12px;
      line-height: 16px;

      ${mediaDevice} {
        font-size: 14px;
        line-height: 20px;
      }
    `,
    Sub1: css`
      font-size: 16px;
      line-height: 24px;

      ${mediaDevice} {
        font-size: 18px;
        line-height: 24px;
      }
    `,
    Sub2: css`
      font-size: 14px;
      line-height: 20px;

      ${mediaDevice} {
        font-size: 16px;
        line-height: 24px;
      }
    `,
    Body1: css`
      font-size: 18px;
      line-height: 24px;

      ${mediaDevice} {
        font-size: 20px;
        line-height: 28px;
      }
    `,
    Body2: css`
      font-size: 16px;
      line-height: 24px;

      ${mediaDevice} {
        font-size: 18px;
        line-height: 24px;
      }
    `,
    Body3: css`
      font-size: 14px;
      line-height: 20px;

      ${mediaDevice} {
        font-size: 16px;
        line-height: 24px;
      }
    `,
    Body4: css`
      font-size: 12px;
      line-height: 16px;

      ${mediaDevice} {
        font-size: 14px;
        line-height: 20px;
      }
    `,
    Alt: css`
      font-size: 10px;
      line-height: 20px;
      letter-spacing: 0.1em;
      text-transform: uppercase;

      ${mediaDevice} {
        font-size: 10px;
        line-height: 20px;
      }
    `,
    Tiny: css`
      font-size: 10px;
      line-height: 16px;

      ${mediaDevice} {
        font-size: 10px;
        line-height: 16px;
      }
    `,
    Caption1: css`
      font-size: 12px;
      line-height: 16px;

      ${mediaDevice} {
        font-size: 14px;
        line-height: 20px;
      }
    `,
  }[title]);

export default getVariant;
