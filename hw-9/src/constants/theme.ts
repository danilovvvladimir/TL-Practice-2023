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
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: "0px",
          borderRadius: "4px",
          color: "#364963",
          border: `1px solid #9FAFC6`,
          backgroundColor: `#EFF2F5`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
      defaultProps: {
        inputProps: {
          style: {
            padding: "8px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "36px",
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
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#364963",
          padding: "14px 16px 14px 22px",
          fontSize: "14px",
          lineHeight: "20px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: 8,
        },
      },
    },
  },
});
