import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#9fb1bc",
    },
    secondary: {
      main: "#e2c044",
    },
    background: {
      default: "#6e8898",
      paper: "#2e5266",
    },
  },
};

export const muiTheme = responsiveFontSizes(createTheme(themeOptions));
