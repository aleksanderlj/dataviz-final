import {Grid} from "@mui/material";
import RaceNav from "./RaceNav";
import {Route, Routes} from "react-router-dom"
import CaucasianMain from "./caucasian/CaucasianMain";

function Main() {
    const buttonText = [
        "White",
        "Black",
        "Asian",
        "2+ races",
        "Native American",
        "Pacific Islander"
    ]

    return (
        <Grid container justifyContent={"center"}>
            <RaceNav/>
            <Routes>
                <Route path={"/caucasian"} element={<CaucasianMain/>}/>
                <Route path={"/africanamerican"} element={<></>}/>
                <Route path={"/asian"} element={<></>}/>
                <Route path={"/twoplusraces"} element={<></>}/>
                <Route path={"/nativeamerican"} element={<></>}/>
                <Route path={"/pacificislander"} element={<></>}/>
            </Routes>
        </Grid>
    )
}

export default Main