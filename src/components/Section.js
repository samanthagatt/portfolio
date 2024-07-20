import { styled } from "@mui/system";
import { accentColor2, appBarHeight, contentHorizontalPadding, secondaryColor } from "../theme";

const Section = styled("section")(({ variant }) => ({
    paddingTop: appBarHeight,
    ...contentHorizontalPadding,
    paddingBottom: "6rem",
    ...(variant === "even" && {
        backgroundColor: accentColor2
    }),
    ...(variant === "odd" && {
        backgroundColor: secondaryColor
    })
}))

export default Section;
