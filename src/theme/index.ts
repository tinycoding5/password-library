import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
  }

  interface PaletteOptions {
    black?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    black: {
      main: "#000000",
      light: "#999999",
      dark: "#666666",
      contrastText: "#F5F5F5",
    },
  },
});

export default theme;
