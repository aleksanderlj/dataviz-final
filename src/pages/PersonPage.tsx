import {Box, Grid, Stack, Typography} from "@mui/material";
import FoliumMap from "./components/FoliumMap";
import Image from "mui-image"
import {useEffect} from "react";
import TextWithAudio from "./components/TextWithAudio";
import FeatureBox from "./components/FeatureBox";
import Location from "../images/cityscape.png"
import Religion from "../images/bible.png"
import Degree from "../images/degree.png"
import Private from "../images/private.png"
import {useTriggerScroll} from "../context/TriggerScrollContext";

export interface PersonPageProps {
    map: string; // eg. plots/map_white.html
    mapText: string;
    featureImportance: string;
    featureImportanceText: string;
    locationPerc: number;
    privatePerc: number;
    religiousPerc: number;
    degreePerc: number;
    boxPlot: string;
    boxPlotText: string;
}

function PersonPage(props: PersonPageProps) {
    const {triggerScroll} = useTriggerScroll()

    useEffect(() => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        })
    }, [triggerScroll])

    return (
        <Grid container justifyContent={"center"}>
            <Grid container item xs={8} justifyContent={"center"} rowSpacing={4}>
                <Grid item xs={8}>
                    <Typography variant={"h6"}>
                        {"Under- and overrepresentation in each state"}
                    </Typography>
                    {window.location.hostname === "localhost" ?
                        <FoliumMap src={`dataviz-final/${props.map}`}/> :
                        <FoliumMap src={props.map}/>
                    }
                </Grid>

                <TextWithAudio text={props.mapText}/>

                <Grid item xs={8}>
                    <Image src={props.featureImportance} duration={100}/>
                </Grid>
                <Box width={"100%"}/>

                <Grid item xs={6}>
                    <Stack direction={"row"} spacing={6}>
                        <FeatureBox percent={props.locationPerc} src={Location} tooltip={"University in high-population area"}/>
                        <FeatureBox percent={props.privatePerc} src={Private} tooltip={"Private institution"}/>
                        <FeatureBox percent={props.religiousPerc} src={Religion} tooltip={"Religious affiliation"}/>
                        <FeatureBox percent={props.degreePerc} src={Degree} tooltip={"Highest degree offered"}/>
                    </Stack>
                </Grid>

                <TextWithAudio text={props.featureImportanceText}/>

                <Grid item xs={12}>
                    <Image src={props.boxPlot} duration={100}/>
                </Grid>
                <Box width={"100%"}/>

                <TextWithAudio text={props.boxPlotText}/>
            </Grid>
        </Grid>
    )
}

export default PersonPage;