import { styled } from "@mui/system";

import { accentColor2, secondaryColor, sectionPadding } from "../helpers/theme";

const Section = styled("section")(({ variant }) => ({
    ...(variant === "even" && {
        backgroundColor: accentColor2
    }),
    ...(variant === "odd" && {
        backgroundColor: secondaryColor
    }),
    ...sectionPadding
}))

export default Section;
