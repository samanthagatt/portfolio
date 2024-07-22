import { createTheme } from "@mui/system";

export const primaryColor = "rgb(0, 0, 0)";
export const secondaryColor = "rgb(255, 255, 255)";
export const accentColor1 = "rgb(158, 158, 158)";
export const accentColor2 = "rgb(245, 245, 240)";

export const appBarHeightInRem = 4;

export const baseTheme = createTheme({
    breakpoints: {
        values: {
            xxs: 0,
            xs: 350,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          }
    },
    typography: {
        fontFamily: "Montserrat, Roboto, Helvetica, Arial, sans-serif",
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
    }
});

export const contentHorizontalPaddingAbvLg = {
    paddingLeft: 130 + "px",
    paddingRight: 130 + "px"
};
export const contentHorizontalPaddingBtwnMdLg = {
    paddingLeft: 100 + "px",
    paddingRight: 100 + "px"
};
export const contentHorizontalPaddingBtwnSmMd = {
    paddingLeft: 60 + "px",
    paddingRight: 60 + "px"
};
export const contentHorizontalPaddingBlwSm = {
    paddingLeft: 40 + "px",
    paddingRight: 40 + "px"
};
export const contentHorizontalPadding = {
    [baseTheme.breakpoints.up("lg")]: contentHorizontalPaddingAbvLg,
    [baseTheme.breakpoints.between("md", "lg")]: contentHorizontalPaddingBtwnMdLg,
    [baseTheme.breakpoints.between("sm", "md")]: contentHorizontalPaddingBtwnSmMd,
    [baseTheme.breakpoints.down("sm")]: contentHorizontalPaddingBlwSm
};
export const sectionPadding = {
    ...contentHorizontalPadding,
    [baseTheme.breakpoints.up("md")]: {
        paddingBottom: "6rem",
        paddingTop: `${appBarHeightInRem + 3}rem`
    },
    [baseTheme.breakpoints.between("sm", "md")]: {
        ...contentHorizontalPaddingBtwnSmMd,
        paddingBottom: "5rem",
        paddingTop: `${appBarHeightInRem + 3}rem`
    },
    [baseTheme.breakpoints.down("sm")]: {
        ...contentHorizontalPaddingBlwSm,
        paddingBottom: "4rem",
        paddingTop: `${appBarHeightInRem + 2}rem`
    }
};

export const theme = {
    typography: {
        h1: {
            fontSize: "4rem",
            fontWeight: "400",
            [baseTheme.breakpoints.between("sm", "lg")]: {
                fontSize: "3rem",
                fontWeight: "450"
            },
            [baseTheme.breakpoints.down("sm")]: {
                fontSize: "2rem",
                fontWeight: "475"
            }
        },
        h2: {
            fontSize: "1.75rem",
            fontWeight: "500",
            lineHeight: "3.25rem",
            [baseTheme.breakpoints.between("sm", "lg")]: {
                fontSize: "1.5rem",
                lineHeight: "3rem"
            },
            [baseTheme.breakpoints.down("sm")]: {
                fontSize: "1.25rem",
                lineHeight: "2.5rem"
            }
        },
        h3: {
            fontSize: "1rem",
            fontWeight: "500",
            lineHeight: "2rem"
        },
        h4: {
            fontSize: "1.75rem",
            fontWeight: "450",
            [baseTheme.breakpoints.between("sm", "lg")]: {
                fontSize: "1.5rem"
            },
            [baseTheme.breakpoints.down("sm")]: {
                fontSize: "1.4rem"
            }
        },
        body1: {
            fontWeight: 350
        },
        body2: {
            fontWeight: 300
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    color: primaryColor,
                    backgroundColor: secondaryColor,
                    boxShadow: "none",
                    height: appBarHeightInRem + "rem",
                    justifyContent: "center",
                    ...contentHorizontalPadding
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
                    fontWeight: 400,
                    color: "inherit",
                    padding: "0rem",
                    borderRadius: "0rem",
                    "&:hover": {
                        color: accentColor1,
                        backgroundColor: "transparent"
                    }
                },
                contained: {
                    "&:hover": {
                        backgroundColor: accentColor1
                    }
                },
                outlined: {
                    borderWidth: "0.1rem",
                    borderColor: primaryColor,
                    "&:hover": {
                        backgroundColor: "transparent",
                        borderWidth: "0.1rem",
                        borderColor: accentColor1,
                        color: accentColor1
                    }
                }
            }
        },
        MuiListItem: {
            defaultProps: {
                disableGutters: true
            }
        }
    }
};
