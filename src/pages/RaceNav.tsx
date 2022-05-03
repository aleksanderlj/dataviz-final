import {Grid, Stack, Tooltip, Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useTriggerScroll} from "../context/TriggerScrollContext";
import Image from "mui-image";
import White from "../images/white_person.png"
import Black from "../images/black_person.png"
import Asian from "../images/asian_person.png"
import Woman from "../images/woman_person.png"
import GongMP3 from "../audio/gong.mp3"
import SongMP3 from "../audio/song.mp3"
import {useState} from "react";

function RaceNav() {
    const [song, setSong] = useState(new Audio(SongMP3))
    const [gong, setGong] = useState(new Audio(GongMP3))

    const personInfo = [
        {
            race: "Caucasian",
            image: White,
            audio: song,
            path: "/caucasian"
        },
        {
            race: "African American",
            image: Black,
            audio: gong,
            path: "/africanamerican"
        },
        {
            race: "Asian",
            image: Asian,
            audio: gong,
            path: "/asian"
        },
        {
            race: "Female",
            image: Woman,
            audio: gong,
            path: "/female"
        }
    ]

    const navigate = useNavigate()
    const {triggerScroll, setTriggerScroll} = useTriggerScroll()


    function handleClick(path: string) {
        navigate(path)
        setTriggerScroll(!triggerScroll)
    }

    function handleHover(sound: HTMLAudioElement) {
        personInfo.map((x) => {
            x.audio.pause();
            x.audio.currentTime = 0;
        })
        sound.play()
    }

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} height={"100vh"}>
            <Grid container item xs={8} justifyContent={"center"} alignItems={"center"} sx={{
                height: "100%"
            }}>
                <Stack direction={"row"} spacing={6} height={"70%"}>
                    {
                        personInfo.map((x) => (
                            <Tooltip title={"Click me!"} placement={"top"} arrow open>
                                <Box>
                                <Image
                                    src={x.image}
                                    onClick={() => handleClick(x.path)}
                                    onMouseEnter={() => handleHover(x.audio)}
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