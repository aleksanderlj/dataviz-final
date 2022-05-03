import {Button, Grid, Stack} from "@mui/material";
import {Face} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useTriggerScroll} from "../context/TriggerScrollContext";
import Image from "mui-image";
import White from "../images/white_person.png"
import Black from "../images/black_person.png"
import Asian from "../images/asian_person.png"

function RaceNav() {
    const buttonText = [
        {
            race: "Caucasian",
            image: White,
            path: "/caucasian",
            color: "primary"
        },
        {
            race: "African American",
            image: Black,
            path: "/africanamerican",
            color: "primary"
        },
        {
            race: "Asian",
            image: Asian,
            path: "/asian",
            color: "primary"
        },
        {
            race: "Female",
            image: "null",
            path: "/female",
            color: "primary"
        }
    ]

    const navigate = useNavigate()
    const {triggerScroll, setTriggerScroll} = useTriggerScroll()

    function handleClick(path: string) {
        navigate(path)
        setTriggerScroll(!triggerScroll)
    }

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} height={"100vh"}>
            <Grid container item xs={8} justifyContent={"center"} alignItems={"center"} sx={{
                height: "100%"
            }}>
                <Stack direction={"row"} spacing={6} height={"70%"}>
                {
                    buttonText.map((x) => (
                            <Image
                                src={x.image}
                                onClick={() => handleClick(x.path)}
                                fit={"contain"}
                                sx={{
                                    cursor: "pointer"
                                }}
                            />
                    ))
                }
                </Stack>
            </Grid>
        </Grid>
    )
}

export default RaceNav;