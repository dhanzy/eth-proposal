import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      common: {
        white: "#fff",
      },
    },
  })
);

export default theme;
