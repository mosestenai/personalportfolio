import { createTheme } from "@mui/material";
import { dimtextcolor, lightprimaryColor, lightsecondaryColor, primaryColor, secondaryColor } from "./colors";


// Create theme with validated colors and fallbacks
const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
        lightprimary: {
            main: lightprimaryColor,
        },
        lightsecondary: {
            main: lightsecondaryColor,
        },
        dimcolor: {
            main: dimtextcolor,
        },
        whitecolor: {
            main: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: `lightfont`,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
});

export default theme;
