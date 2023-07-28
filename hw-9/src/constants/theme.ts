import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    inverted: true;
  }
}

export const THEME = createTheme({
  palette: {
    primary: {
      main: "#1565c0",
    },
  },
  typography: {
    fontFamily: `"Open sans", sans-serif`,
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          paddingLeft: "8px",
          paddingRight: "8px",
          fontWeight: 700,
        },
      },
      variants: [
        {
          props: { variant: "inverted" },
          style: {
            backgroundColor: `#fff`,
            color: "#1565c0",
            border: `1px solid #cfd7e2`,
          },
        },
      ],
    },
  },
});
