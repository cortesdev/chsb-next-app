import { colors, createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    background: {
      color: string;
    };
    status: {
      danger: string;
    };
    colors: {
      text: string;
      background: string;
      primary: string;
      primaryShade1: string;
      primaryShade2: string;
      primaryTint8: string;
      primaryTint9: string;
      light: string;
      lighten: string;
      white: string;
      neutralBase: string;
      dark: string;
      blue: string;
      purple: string;
      red: string;
      orange: string;
      aqua: string;
      blueTint8: string;
      purpleTint8: string;
      redTint9: string;
      orangeTint9: string;
      aquaTint8: string;
      white10: string;
      white20: string;
      white30: string;
      dark20: string;
      dark50: string;
      dark80: string;
      neutral50: string;
      blue10: string;
      blue20: string;
      blue30: string;
      purple10: string;
      red10: string;
      orange10: string;
      primaryGradient: string;
      secondaryGradient: string;
      darkGradient: string;
      purpleGradient: string;
      orangeGradient: string;
      blueGradient: string;
    };
    fonts: {
      body: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      bodyBold: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      h1: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      h2: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      h3: {
        fontSize: string;
        lineHeight: string;
      };
      h4: {
        fontSize: string;
        lineHeight: string;
      };
      h5: {
        fontSize: string;
        lineHeight: string;
      };
      h6: {
        fontSize: string;
        lineHeight: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    background: {
      color?: string;
    };
    status?: {
      danger?: any;
    };
    colors?: {
      text?: string;
      background?: string;
      primary?: string;
      primaryShade1?: string;
      primaryShade2?: string;
      primaryTint8?: string;
      primaryTint9?: string;
      light?: string;
      lighten?: string;
      white?: string;
      neutralBase?: string;
      dark?: string;
      blue?: string;
      purple?: string;
      red?: string;
      orange?: string;
      aqua?: string;
      blueTint8?: string;
      purpleTint8?: string;
      redTint9?: string;
      orangeTint9?: string;
      aquaTint8?: string;
      white10?: string;
      white20?: string;
      white30?: string;
      dark20?: string;
      dark50?: string;
      dark80?: string;
      neutral50?: string;
      blue10?: string;
      blue20?: string;
      blue30?: string;
      purple10?: string;
      red10?: string;
      orange10?: string;
      primaryGradient?: string;
      secondaryGradient?: string;
      darkGradient?: string;
      purpleGradient?: string;
      orangeGradient?: string;
      blueGradient?: string;
    };
    fonts: {
      body: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      bodyBold: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      h1: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      h2: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      h3: {
        fontSize: string;
        lineHeight: string;
      };
      h4: {
        fontSize: string;
        lineHeight: string;
      };
      h5: {
        fontSize: string;
        lineHeight: string;
      };
      h6: {
        fontSize: string;
        lineHeight: string;
      };
    };
  }
}

export const theme = createTheme({
  background: {
    color: "#141414",
  },
  status: {
    danger: colors.red,
  },
  colors: {
    // Brand Primary
    text: "#111",
    background: "#fff",
    primary: "#03c38d",
    primaryShade1: "#06b07f",
    primaryShade2: "#009c71",
    primaryTint8: "#ccf3e8",
    primaryTint9: "#e7f9f4",
    light: "#edeff1",
    lighten: "#f9fafa",
    // Neutral
    white: "#fff",
    neutralBase: "#8f96a1",
    dark: "#232936",
    // Accent Base
    blue: "#2c95ff",
    purple: "#5a3fff",
    red: "#ff274b",
    orange: "#ff8d00",
    aqua: "#10e5bf",
    // Accent
    blueTint8: "#d5eaff",
    purpleTint8: "#ded9ff",
    redTint9: "#ffe9ed",
    orangeTint9: "#ffe8cc",
    aquaTint8: "#d7faf2",
    // alphas
    white10: "rgba(255,255,255, .1)",
    white20: "rgba(255,255,255, .2)",
    white30: "rgba(255,255,255, .3)",
    dark20: "rgba(35,41,54, .2)",
    dark50: "rgba(35,41,54, .5)",
    dark80: "rgba(35,41,54, .8)",
    neutral50: "rgba(143,150,161, .5)",
    blue10: "rgba(44,149,255, .1)",
    blue20: "rgba(44,149,255, .2)",
    blue30: "rgba(44,149,255, .3)",
    purple10: "rgba(90,63,255, .1)",
    red10: "rgba(255,39,75, .1)",
    orange10: "rgba(255,141,0, .1)",
    // gradients
    primaryGradient: "linear-gradient(to top, #08c692 0%, #14e4be 100%)",
    secondaryGradient: "linear-gradient(to right, #181e29 0%, #0f9379 95.87%)",
    darkGradient: "linear-gradient(to top, #1a1f2a 0%, #353f52 100%)",
    purpleGradient: "linear-gradient(to right, #5b40ff 0%, #9171ff 100%)",
    orangeGradient: "linear-gradient(to right, #ff9103 0%, #febf33 100%)",
    blueGradient: "linear-gradient(to right, #2c95ff 0%, #77bbff 100%)",
  },
  fonts: {
    body: {
      fontFamily: "chsb",
      fontSize: "1.8rem",
      lineHeight: "3.2rem",
    },
    bodyBold: {
      fontFamily: "chsb-bold",
      fontSize: "2.2rem",
      lineHeight: "3.2rem",
    },
    h1: {
      fontFamily: "chsb-bold",
      fontSize: "4rem",
      lineHeight: "1.1em",
    },
    h2: {
      fontFamily: "chsb-bold",
      fontSize: "3.6rem",
      lineHeight: "1.25em",
    },
    h3: {
      fontSize: "2.4rem",
      lineHeight: "3rem",
    },
    h4: {
      fontSize: "1.4rem",
      lineHeight: "2rem",
    },
    h5: {
      fontSize: "1.4rem",
      lineHeight: "2rem",
    },
    h6: {
      fontSize: ".9rem",
      lineHeight: "1rem",
    },
  },
});
