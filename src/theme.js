import { createBreakpoints } from "@mui/system";

export const primaryColor = "rgb(0, 0, 0)";
export const secondaryColor = "rgb(255, 255, 255)";
export const accentColor1 = "rgb(158, 158, 158)";
export const accentColor2 = "rgb(249, 249, 242)";

export const appBarHeight = "4rem";
export const contentHorizontalPadding = "130px";

const breakpoints = createBreakpoints({});

export const theme = {
    breakpoints: breakpoints,
    typography: {
        fontFamily: "Montserrat, Roboto, Helvetica, Arial, sans-serif",
        h1: {
            fontSize: "4rem",
            fontWeight: "400",
            [breakpoints.between("sm", "lg")]: {
                fontSize: "3rem",
                fontWeight: "450"
            },
            [breakpoints.down("sm")]: {
                fontSize: "2rem",
                fontWeight: "475"
            }
        },
        h2: {
            fontSize: "1.75rem",
            fontWeight: "500",
            lineHeight: "3.25rem",
            [breakpoints.between("sm", "lg")]: {
                fontSize: "1.5rem",
                lineHeight: "3rem"
            },
            [breakpoints.down("sm")]: {
                fontSize: "1.25rem",
                lineHeight: "2.5rem"
            }
        },
        h3: {
            fontSize: "1rem",
            fontWeight: "500",
            lineHeight: "2rem",
            color: accentColor1
        }
    },
    palette: {
        primary: {
            main: primaryColor
        },
        secondary: {
            main: secondaryColor
        },
        accent1: {
            main: accentColor1
        },
        accent2: {
            main: accentColor2
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    color: primaryColor,
                    paddingLeft: contentHorizontalPadding,
                    paddingRight: contentHorizontalPadding,
                    backgroundColor: secondaryColor,
                    boxShadow: "none",
                    height: "4rem",
                    justifyContent: "center"
                }
            }
        },
        MuiToolbar: {
            defaultProps: {
                disableGutters: true
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: "0"
                }
            },
            defaultProps: {
                disableRipple: true,
            }
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    minWidth: "0",
                    minHeight: "0",
                    fontSize: "1rem",
                    fontWeight: "400",
                    boxShadow: "none",
                    textTransform: "none",
                    borderRadius: "0.6rem",
                    "&:hover": {
                        boxShadow: "none"
                    }
                },
                text: {
                    padding: "0rem",
                    borderRadius: "0rem",
                    "&:hover": {
                        color: accentColor1,
                        backgroundColor: secondaryColor
                    }
                },
                contained: {
                    "&:hover": {
                        backgroundColor: accentColor1
                    }
                },
                outlined: {
                    borderWidth: "0.1rem",
                    "&:hover": {
                        backgroundColor: secondaryColor,
                        borderWidth: "0.1rem",
                        borderColor: accentColor1,
                        color: accentColor1
                    }
                }
            }
        }
    }
};
