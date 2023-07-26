"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Roboto, Antonio, Kaushan_Script } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const antonio = Antonio({
  weight:["300", "400", "500", "700"],
  style:'normal',
  subsets:["latin"],
});

const kaushan = Kaushan_Script({
  weight:["400"],
  style:'normal',
  subsets:["latin"],
})

const { palette } = createTheme();
const theme = createTheme({
  palette: {
    primary: {
      main: "#3D00B7",
    },
    secondary: {
      main:"#5D6D7E",
    },
    info: {
      main: "#6563AE",
    },
    text: {
      primary: "#151D02",
      secondary: "#60615E",
      darkGray: "#424441",
      yellowGray: "#4A4A47",
    },
    light: palette.augmentColor({
      color: {
        main: "#F9F9F9",
      },
    }),
    lightYellow: palette.augmentColor({
      color: {
        main: "#FFE79E",
      },
    }),
    lightYellow2: palette.augmentColor({
      color: {
        main: "#FFEAD1",
      },
    }),
    lightBorder: palette.augmentColor({
      color: {
        main: "#F3F3F3",
      },
    }),
    lightGray: palette.augmentColor({
      color: {
        main: "#D7D7D7",
      },
    }),
    gray: palette.augmentColor({
      color: {
        main: "#717070",
      },
    }),
    mercury: palette.augmentColor({
      color: {
        main: "#E4E4E4",
      },
    }),
    ultraLight: palette.augmentColor({
      color: {
        main: "#F5F5F3",
      },
    }),
  },
  typography: {
   
    h1: {
      fontFamily: kaushan.style.fontFamily,
      fontWeight: 700,
      fontSize: 46,
      // lineHeight: 56
    },
    h2: {
      fontFamily: antonio.style.fontFamily,
      fontWeight: 600,
      fontSize: 33,
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: roboto.style.fontFamily,
      fontWeight: 600,
      fontSize: 23,
      // lineHeight: 33
    },
    h4: {
      fontFamily: antonio.style.fontFamily,
      fontWeight: 600,
      fontSize: 19,
      // lineHeight: 29
    },

    subtitle1: {
      fontWeight: 400,
      fontSize: 15,
      // lineHeight: 25
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.5,
      color: "#60615E",
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
      // lineHeight: 26
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.71,
      color: "#60615E",
    },
    button: {
      fontWeight: 500,
      fontSize: 14,
      // lineHeight: 14
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderColor: "#F3F3F3",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {},
    },
  },
  // shadows: ["none", "0px 6px 10px rgba(71, 70, 70, 0.05)", "0px 4px 4px rgba(0, 0, 0, 0.25)"]
});

export default function ThemeRegistry({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
