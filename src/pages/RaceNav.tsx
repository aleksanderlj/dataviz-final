import {Grid, Stack, Tooltip, Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useTriggerScroll} from "../context/TriggerScrollContext";
import Image from "mui-image";
import White from "../images/white_person.png"
import Black from "../images/black_person.png"
import Asian from "../images/asian_person.png"
import Woman from "../images/woman_person.png"
import af1MP3 from "../audio/af1.mp3"
import asian1MP3 from "../audio/asian1.mp3"
import white1MP3 from "../audio/white1.mp3"
import woman1MP3 from "../audio/woman1.mp3"
import af1MP3_legacy from "../audio/af1_legacy.mp3"
import white1MP3_legacy from "../audio/white1_legacy.mp3"
import woman1MP3_legacy from "../audio/woman1_legacy.mp3"
import {useEffect, useState} from "react";
import {useAudioContext} from "../context/AudioContext";
import {useLegacyContext} from "../context/LegacyContext";

function RaceNav() {
    const bgcolor = "salmon"
    const {legacy} = useLegacyContext()

    const [white1, setWhite1] = useState<HTMLAudioElement>(new Audio(white1MP3))
    const [af1, setAf1] = useState<HTMLAudioElement>(new Audio(af1MP3))
    const [asian1, setAsian1] = useState<HTMLAudioElement>(new Audio(asian1MP3))
    const [woman1, setWoman1] = useState<HTMLAudioElement>(new Audio(woman1MP3))

    useEffect(() => {
        if(legacy){
            setWhite1(new Audio(white1MP3_legacy))
            setAf1(new Audio(af1MP3_legacy))
            setWoman1(new Audio(woman1MP3_legacy))
        } else {
            setWhite1(new Audio(white1MP3))
            setAf1(new Audio(af1MP3))
            setWoman1(new Audio(woman1MP3))
        }
    }, [legacy])

    const personInfo = [
        {
            id: 1,
            race: "Caucasian",
            image: White,
            audio: white1,
            path: "/caucasian"
        },
        {
            id: 2,
            race: "African American",
            image: Black,
            audio: af1,
            path: "/africanamerican"
        },
        {
            id: 3,
            race: "Asian",
            image: Asian,
            audio: asian1,
            path: "/asian"
        },
        {
            id: 4,
            race: "Female",
            image: Woman,
            audio: woman1,
            path: "/female"
        }
    ]

    const navigate = useNavigate()
    const {triggerScroll, setTriggerScroll} = useTriggerScroll()
    const {playAudio, stopAudio} = useAudioContext()

    function handleClick(path: string) {
        navigate(path)
        setTriggerScroll(!triggerScroll)
        stopAudio()
    }

    function handleHover(sound: HTMLAudioElement, id: number) {
        playAudio(sound, id)
    }

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} height={"100vh"} sx={{ bgcolor: bgcolor }}>
            <Grid container item xs={8} justifyContent={"center"} alignItems={"center"} sx={{
                height: "100%"
            }}>
                <Stack direction={"row"} spacing={6} height={"70%"}>
                    {
                        personInfo.map((x) => (
                            <Tooltip key={x.race} title={"Hover over me!"} placement={"top"} arrow open>
                                <Box>
                                <Image
                                    src={x.image}
                                    onClick={() => handleClick(x.path)}
                                    onMouseEnter={() => handleHover(x.audio, x.id)}
                                    fit={"contain"}
                                    sx={{
                                        cursor: "pointer"
                                    }}
                                />
                                </Box>
                            </Tooltip>
                        ))
                    }
                </Stack>
            </Grid>
        </Grid>
    )
}

export default RaceNav;