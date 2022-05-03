import {Grid} from "@mui/material";
import RaceNav from "./RaceNav";
import {Route, Routes} from "react-router-dom"
import Caucasian from "./persons/Caucasian";
import ScrollToTop from "react-scroll-to-top";

function Main() {
    return (
        <Grid container justifyContent={"center"}>
            <RaceNav/>
            <ScrollToTop smooth/>
            <Grid container item justifyContent={"center"} xs={12}>
                <Routes>
                    <Route path={"/caucasian"} element={<Caucasian/>}/>
                    <Route path={"/africanamerican"} element={<></>}/>
                    <Route path={"/asian"} element={<></>}/>
                    <Route path={"/female"} element={<></>}/>
                </Routes>
            </Grid>
        </Grid>
    )
}

export default Main