import { styled } from "@mui/system";
import { accentColor2, appBarHeight, contentHorizontalPadding, secondaryColor } from "../theme";

const Section = styled("section")(({ variant }) => ({
    padding: `0rem ${contentHorizontalPadding} 1.25rem ${contentHorizontalPadding}`,
    margin: `${appBarHeight} 0rem 0rem 0rem`,
    ...(variant === "even" && {
        backgroundColor: accentColor2
    }),
    ...(variant === "odd" && {
        backgroundColor: secondaryColor
    })
}))

export default Section;
