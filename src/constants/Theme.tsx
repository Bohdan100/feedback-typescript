import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    indigo: "#3f51b5",
    indigoAccent: "#303f9f",
    lightblue: "#61dafb ",
    darkgreen: "#112931",
    blue: "#007acc",
    yellow: "#f7e018",
    black: "#2a2a2a",
    white: "#ffffff",
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },

  fontSizes: {
    s: "14px",
    xs: "18px",
    m: "22px",
    l: "28px",
    xl: "34px",
    xxl: "40px",
  },

  fontWeights: {
    normal: 400,
    middle: 500,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  borders: {
    none: "none",
    normal: "1px solid",
  },

  radius: {
    none: "0",
    normal: "12px",
    round: "50%",
  },
};

export { theme };
