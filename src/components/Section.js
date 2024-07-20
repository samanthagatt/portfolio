import { styled } from "@mui/system";
import { accentColor2, appBarHeightInRem, contentHorizontalPadding, contentHorizontalPaddingBlwSm, contentHorizontalPaddingBtwnSmMd, secondaryColor } from "../helpers/theme";

const Section = styled("section")(({ variant, theme }) => ({
    ...(variant === "even" && {
        backgroundColor: accentColor2
    }),
    ...(variant === "odd" && {
        backgroundColor: secondaryColor
    }),
    ...contentHorizontalPadding,
    [theme.breakpoints.up("md")]: {
        paddingBottom: "6rem",
        paddingTop: `${appBarHeightInRem + 3}rem`
    },
    [theme.breakpoints.between("sm", "md")]: {
        ...contentHorizontalPaddingBtwnSmMd,
        paddingBottom: "5rem",
        paddingTop: `${appBarHeightInRem + 3}rem`
    },
    [theme.breakpoints.down("sm")]: {
        ...contentHorizontalPaddingBlwSm,
        paddingBottom: "4rem",
        paddingTop: `${appBarHeightInRem + 2}rem`
    }
}))

export default Section;
