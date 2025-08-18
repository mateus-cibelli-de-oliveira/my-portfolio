import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: '#000d0c'
    },
    secondary: {
      main: '#3f7784'
    }
  },
  typography: {
    fontFamily: "Helvetica Neue"
  }
});

theme = responsiveFontSizes(theme);

export default theme;