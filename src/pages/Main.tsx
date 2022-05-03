import {Grid} from "@mui/material";
import RaceNav from "./RaceNav";
import {Route, Routes} from "react-router-dom"
import Caucasian from "./persons/Caucasian";
import ScrollToTop from "react-scroll-to-top";
import Black from "./persons/Black";
import Asian from "./persons/Asian";

function Main() {
    return (
        <Grid container justifyContent={"center"}>
            <RaceNav/>
            <ScrollToTop smooth/>
            <Grid container item justifyContent={"center"} xs={12}>
                <Routes>
                    <Route path={"/caucasian"} element={<Caucasian/>}/>
                    <Route path={"/africanamerican"} element={<Black/>}/>
                    <Route path={"/asian"} element={<Asian/>}/>
                    <Route path={"/female"} element={<></>}/>
                </Routes>
            </Grid>
        </Grid>
    )
}

export default Main