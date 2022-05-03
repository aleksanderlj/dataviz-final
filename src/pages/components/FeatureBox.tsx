import {Grid, Tooltip, Typography, Box} from "@mui/material";
import Image from "mui-image"

interface FeatureBoxProps {
    percent: number;
    src: string;
    tooltip: string;
}

function FeatureBox(props: FeatureBoxProps){
    return (
        <Grid item xs={12}>
            <Tooltip title={props.tooltip}>
                <Box>
                    <Image src={props.src} fit={"contain"} duration={100}/>
                    <Typography sx={{
                        border: "1px solid",
                        mt: "1rem",
                        color: props.percent > 0 ? "green" : "red",
                        bgcolor: "grey.100",
                        borderRadius: 2,
                        borderColor: "grey.300",
                        fontWeight: "700"
                    }}>
                        {`${Math.round(props.percent)}%`}
                    </Typography>
                </Box>
            </Tooltip>
        </Grid>
    )
}

export default FeatureBox;