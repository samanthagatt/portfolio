import React from "react";
import { Button } from "@mui/material";

const NavButtons = ({ sectionIds, onClick, sx = [] }) => sectionIds.map(id =>
    <Button onClick={() => onClick(id)} key={id} sx={sx}>
        {id.charAt(0).toUpperCase() + id.slice(1)}
    </Button>
);

export default NavButtons;
