import {Button, Grid} from "@mui/material";
import {Face} from "@mui/icons-material";
import {Navigate, useNavigate} from "react-router-dom";
import {useTriggerScroll} from "../context/TriggerScrollContext";

function RaceNav() {
    const buttonText = [
        {
            race: "Caucasian",
            path: "/caucasian",
            color: "primary"
        },
        {
            race: "African American",
            path: "/africanamerican",
            color: "primary"
        },
        {
            race: "Asian",
            path: "/asian",
            color: "primary"
        },
        {
            race: "Male",
            path: "/male",
            color: "primary"
        },
        {
            race: "Female",
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
            {
                buttonText.map((x) => (
                    <Grid item xs={2}>
                        <Button
                            variant={"contained"}
                            startIcon={<Face/>}
                            sx={{ width: "90%"}}
                            onClick={() => handleClick(x.path)}
                        >
                            {x.race}
                        </Button>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default RaceNav;