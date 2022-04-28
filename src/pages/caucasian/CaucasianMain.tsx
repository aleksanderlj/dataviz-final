import {Box, Grid} from "@mui/material";
import FoliumMap from "../components/FoliumMap";
//import {ReactComponent as FeatureImportance} from "../../images/plots/Percent_of_total_enrollment_that_are_White.svg"
import Image from "mui-image"

function CaucasianMain() {
    return (
        <Grid container justifyContent={"center"}>
            <Grid container item xs={8} justifyContent={"center"}>
                <Grid item xs={8}>
                    <FoliumMap src={"dataviz-final/plots/map_white.html"} />
                </Grid>
                <Grid item xs={8}>
                    //<FeatureImportance/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CaucasianMain;