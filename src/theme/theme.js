import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#282c34",
    },
    secondary: {
      main: "#fefefe",
    },
  },
  typography: {
    fontFamily: "ZXX",
    color: "#fefefe",
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});
