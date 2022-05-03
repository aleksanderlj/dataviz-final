import {Box, Grid, Typography} from "@mui/material";
import Image from "mui-image";
import AudioIcon from "../../images/audio_icon.png";

export interface TextWithAudioProps {
    text?: string;
}

function TextWithAudio(props: TextWithAudioProps){
    return (
        <Grid container item xs={12}>
            <Grid container item xs={1} alignItems={"center"}>
                <Box width={"50%"}>
                    <Image src={AudioIcon} duration={100} fit={"contain"} sx={{
                        cursor: "pointer"
                    }}/>
                </Box>
            </Grid>
            <Grid item xs={11}>
                <Typography sx={{ whiteSpace: "pre-line" }}>
                    {props.text}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default TextWithAudio;