import {Button, Grid} from "@mui/material";
import {Face} from "@mui/icons-material";
import {Navigate, useNavigate} from "react-router-dom";

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
            race: "2+ races",
            path: "/twoplusraces",
            color: "primary"
        },
        {
            race: "Native American",
            path: "/nativeamerican",
            color: "primary"
        },
        {
            race: "Pacific Islander",
            path: "/pacificislander",
            color: "primary"
        }
    ]

    const navigate = useNavigate()

    function handleClick(path: string) {
        navigate(path)
    }

    return (
        <Grid container justifyContent={"center"}>
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