import localFont from "@next/font/local";

export const TelefonicaFont = localFont({
  src: [
    {
      path: "../../../public/fonts/Telefonica-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Telefonica-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Telefonica-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Telefonica-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Telefonica-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Telefonica-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const fonts = {
  main: TelefonicaFont.style.fontFamily,
};

export default fonts;
