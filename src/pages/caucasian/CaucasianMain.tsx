import {Box, Grid, Stack, Typography} from "@mui/material";
import FoliumMap from "../components/FoliumMap";
import Image from "mui-image"
import FeatureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_White.png"
import BoxPlot from "../../images/plots/Boxplot_White.png"
import {useEffect} from "react";
import TextWithAudio from "../components/TextWithAudio";
import FeatureBox from "../components/FeatureBox";
import Location from "../../images/cityscape.png"
import Religion from "../../images/bible.png"
import Degree from "../../images/degree.png"
import Private from "../../images/private.png"
import {useTriggerScroll} from "../../context/TriggerScrollContext";

function CaucasianMain() {
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
                        <FoliumMap src={"dataviz-final/plots/map_white.html"} /> :
                        <FoliumMap src={"plots/map_white.html"} />
                    }
                </Grid>

                <TextWithAudio text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare eros id odio auctor, sed consectetur nunc bibendum. Sed tristique ex et tempus ultrices. In feugiat at lorem eget malesuada. Sed nec arcu a lectus malesuada eleifend non quis purus. Phasellus in eros a ex finibus luctus. Maecenas ac odio dictum, ultrices nunc vel, faucibus felis. Ut et urna nisl. Cras non molestie massa, sit amet aliquam nibh. Donec vel vestibulum orci, in placerat ipsum."}/>

                <Grid item xs={8}>
                    <Image src={FeatureImportance} duration={100}/>
                </Grid>
                <Box width={"100%"}/>

                <Grid item xs={6}>
                    <Stack direction={"row"} spacing={6}>
                        <FeatureBox text={"100%"} src={Location} tooltip={"University in high-population area"}/>
                        <FeatureBox text={"100%"} src={Private} tooltip={"Private institution"}/>
                        <FeatureBox text={"100%"} src={Religion} tooltip={"Religious affiliation"}/>
                        <FeatureBox text={"100%"} src={Degree} tooltip={"Highest degree offered"}/>
                    </Stack>
                </Grid>

                <TextWithAudio text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare eros id odio auctor, sed consectetur nunc bibendum. Sed tristique ex et tempus ultrices. In feugiat at lorem eget malesuada. Sed nec arcu a lectus malesuada eleifend non quis purus. Phasellus in eros a ex finibus luctus. Maecenas ac odio dictum, ultrices nunc vel, faucibus felis. Ut et urna nisl. Cras non molestie massa, sit amet aliquam nibh. Donec vel vestibulum orci, in placerat ipsum."}/>

                <Grid item xs={12}>
                    <Image src={BoxPlot} duration={100}/>
                </Grid>
                <Box width={"100%"}/>

                <TextWithAudio text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare eros id odio auctor, sed consectetur nunc bibendum. Sed tristique ex et tempus ultrices. In feugiat at lorem eget malesuada. Sed nec arcu a lectus malesuada eleifend non quis purus. Phasellus in eros a ex finibus luctus. Maecenas ac odio dictum, ultrices nunc vel, faucibus felis. Ut et urna nisl. Cras non molestie massa, sit amet aliquam nibh. Donec vel vestibulum orci, in placerat ipsum."}/>
            </Grid>
        </Grid>
    )
}

export default CaucasianMain;