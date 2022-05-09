import {Grid, Typography} from "@mui/material";

export interface TextWithAudioProps {
    text?: string;
    xs?: number
}

function TextBody(props: TextWithAudioProps){
    return (
            <Grid container item xs={props.xs ? props.xs : 11} justifyContent={"center"}>
                <Typography sx={{ whiteSpace: "pre-line" }} align={"center"}>
                    {props.text}
                </Typography>
            </Grid>
    )
}

export default TextBody;