import {Box, Grid} from "@mui/material";
import FoliumMap from "../components/FoliumMap";
import Image from "mui-image"
import featureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_White.png"
import {useEffect} from "react";

function CaucasianMain() {
    useEffect(() => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        })
    }, [])

    return (
        <Grid container justifyContent={"center"}>
            <Grid container item xs={8} justifyContent={"center"}>
                <Grid item xs={8}>
                    <FoliumMap src={"dataviz-final/plots/map_white.html"} />
                </Grid>
                <Grid item xs={8}>
                    <Image src={featureImportance} duration={100}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CaucasianMain;