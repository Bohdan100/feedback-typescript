import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      indigo: string;
      indigoAccent: string;
      red: string;
      redAccent: string;
      green: string;
      black: string;
      white: string;
    };

    space: number[];
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };

    fontSizes: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };

    fontWeights: {
      normal: number;
      middle: number;
      bold: number;
    };

    lineHeights: {
      body: number;
      heading: number;
    };

    borders: {
      none: string;
      normal: string;
    };

    radius: {
      none: string;
      normal: string;
      round: string;
    };
  }
}
