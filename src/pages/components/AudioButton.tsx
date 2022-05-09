import {Box} from "@mui/material";
import Image from "mui-image";
import AudioIcon from "../../images/audio_icon.png";
import React from "react";

function AudioButton() {
    return (
        <Box width={"50%"}>
            <Image src={AudioIcon} duration={100} fit={"contain"} sx={{
                cursor: "pointer"
            }}/>
        </Box>
    )
}

export default AudioButton;