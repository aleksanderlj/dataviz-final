import {Grid} from "@mui/material";
import RaceNav from "./RaceNav";
import {Route, Routes} from "react-router-dom"
import Caucasian from "./persons/Caucasian";
import ScrollToTop from "react-scroll-to-top";
import Black from "./persons/Black";
import Asian from "./persons/Asian";
import Woman from "./persons/Woman";
import IntroPage from "./IntroPage";

function Main() {
    return (
        <Grid container justifyContent={"center"} sx={{ pb: "2rem"}}>
            <IntroPage/>
            <RaceNav/>
            <ScrollToTop smooth/>
            <Grid container item justifyContent={"center"} xs={12}>
                <Routes>
                    <Route path={"/caucasian"} element={<Caucasian/>}/>
                    <Route path={"/africanamerican"} element={<Black/>}/>
                    <Route path={"/asian"} element={<Asian/>}/>
                    <Route path={"/female"} element={<Woman/>}/>
                </Routes>
            </Grid>
        </Grid>
    )
}

export default Main