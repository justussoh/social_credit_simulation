import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: {
      main: "#33ff33",
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
