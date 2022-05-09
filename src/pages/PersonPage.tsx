import {Box, Grid, Stack, Tooltip, Typography} from "@mui/material";
import FoliumMap from "./components/FoliumMap";
import Image from "mui-image"
import {useEffect, useState} from "react";
import TextBody from "./components/TextBody";
import FeatureBox from "./components/FeatureBox";
import Location from "../images/cityscape.png"
import Religion from "../images/bible.png"
import Degree from "../images/degree.png"
import Private from "../images/private.png"
import {useTriggerScroll} from "../context/TriggerScrollContext";
import AudioButton from "./components/AudioButton";
import {useAudioContext} from "../context/AudioContext";

export interface PersonPageProps {
    target: string;
    map: string; // eg. plots/map_white.html
    mapSound: string;
    featureImportance: string;
    locationPerc: number;
    privatePerc: number;
    religiousPerc: number;
    degreePerc: number;
    fiSound: string
    boxplot: string;
    boxplotSound: string
}

function PersonPage(props: PersonPageProps) {
    const {triggerScroll} = useTriggerScroll()
    const [tooltipOpen, setTooltipOpen] = useState(true)
    const {stopAudio} = useAudioContext()

    useEffect(() => {
        window.scrollTo({
            top: window.innerHeight * 2,
            behavior: "smooth"
        })
    }, [triggerScroll])

    function replaceTarget(str: string){
        return str.replaceAll("{target}", props.target)
    }

    function capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function handleTooltipHover(){
        setTooltipOpen(false)
    }

    return (
        <Grid container justifyContent={"center"}>
            <Grid container item xs={8} justifyContent={"center"} rowSpacing={4}>
                <Grid item xs={12} sx={{ mt: "2rem" }}>
                    <Typography variant={"h4"}>
                        {`${capitalizeFirstLetter(props.target)} in American Universities`}
                    </Typography>
                </Grid>

                <Grid container item xs={2} alignItems={"center"}>
                    <Tooltip
                        arrow
                        title={"Click me!"}
                        open={tooltipOpen}
                        placement={"left"}
                    >
                        <Box justifyContent={"center"} onMouseEnter={handleTooltipHover}>
                            <AudioButton id={5} audio={props.mapSound} />
                        </Box>
                    </Tooltip>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant={"h6"}>
                        {"Under- and overrepresentation in each state"}
                    </Typography>
                    {window.location.hostname === "localhost" ?
                        <FoliumMap src={`dataviz-final/${props.map}`}/> :
                        <FoliumMap src={props.map}/>
                    }
                </Grid>
                <Grid item xs={2}/>

                <TextBody text={replaceTarget("This map shows how {target} are represented by university enrollment in regard to how many {target} live in the given state.\n" +
                    "The red areas represent states where the average enrollment ratio of {target} is less than the ratio of {target} in that state's population. " +
                    "This means {target} are underrepresented in those states.\n" +
                    "The green areas represent the opposite, meaning an overrepresentation.")}/>


                <Grid item xs={8}>
                    <Image src={props.featureImportance} duration={100}/>
                </Grid>
                <Grid container item xs={3} alignItems={"center"}>
                    <Grid container item xs={8} justifyContent={"right"} alignItems={"center"}>
                        <AudioButton id={6} audio={props.fiSound} />
                    </Grid>
                </Grid>

                <Grid item xs={6}>
                    <Stack direction={"row"} spacing={6}>
                        <FeatureBox percent={props.locationPerc} src={Location} tooltip={"University in high-population area"}/>
                        <FeatureBox percent={props.privatePerc} src={Private} tooltip={"Private institution"}/>
                        <FeatureBox percent={props.religiousPerc} src={Religion} tooltip={"Religious affiliation"}/>
                        <FeatureBox percent={props.degreePerc} src={Degree} tooltip={"Highest degree offered"}/>
                    </Stack>
                </Grid>

                <TextBody text={replaceTarget("The above graph shows what features are most important in deciding the enrollment of {target} in universities,\n and in which direction.\n" +
                    "Below the graph we've also highlighted some interesting features that seem to be of importance for all races and genders\n(try to hover over them!).")}/>

                <Grid item xs={12}>
                    <Image src={props.boxplot} duration={100}/>
                </Grid>

                <Grid container item xs={2} alignItems={"center"}>
                    <AudioButton id={7} audio={props.boxplotSound} />
                </Grid>

                <TextBody xs={9} text={replaceTarget("The boxplot tells us a little about how the ratio of enrolled {target} are affected by cost of tuition.")}/>

                <Grid item xs={12} sx={{ mt: "4rem" }}>
                    <Typography variant={"h6"}>
                        {"Scroll to the top of the page and hear what one of the other characters have to say!"}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PersonPage;