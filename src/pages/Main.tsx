import {Grid} from "@mui/material";
import RaceNav from "./RaceNav";
import {Route, Routes} from "react-router-dom"
import Caucasian from "./persons/Caucasian";
import ScrollToTop from "react-scroll-to-top";
import Black from "./persons/Black";
import Asian from "./persons/Asian";
import Woman from "./persons/Woman";
import IntroPage from "./IntroPage";
import LegacyButton from "./components/Legacy button";
import {useState} from "react";

function Main() {
    const [firstClick, setFirstClick] = useState(false)

    return (
        <Grid container justifyContent={"center"}>
            <IntroPage firstClick={firstClick} setFirstClick={setFirstClick}/>
            {firstClick ?
                <>
                    <RaceNav firstClick={firstClick}/>
                    <Grid container item justifyContent={"center"} xs={12}>
                        <Routes>
                            <Route path={"/caucasian"} element={<Caucasian/>}/>
                            <Route path={"/africanamerican"} element={<Black/>}/>
                            <Route path={"/asian"} element={<Asian/>}/>
                            <Route path={"/female"} element={<Woman/>}/>
                        </Routes>
                    </Grid>
                </> : null
            }
            <ScrollToTop smooth/>
            <LegacyButton/>
        </Grid>
    )
}

export default Main