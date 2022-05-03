import {Grid} from "@mui/material";
import RaceNav from "./RaceNav";
import {Route, Routes} from "react-router-dom"
import CaucasianMain from "./caucasian/CaucasianMain";
import {useRef} from "react";

function Main() {
    const bodyRef = useRef<any>(null)

    return (
        <Grid container justifyContent={"center"}>
            <RaceNav/>
            <Grid container item ref={bodyRef} justifyContent={"center"} xs={12}>
                <Routes>
                    <Route path={"/caucasian"} element={<CaucasianMain/>}/>
                    <Route path={"/africanamerican"} element={<></>}/>
                    <Route path={"/asian"} element={<></>}/>
                    <Route path={"/male"} element={<></>}/>
                    <Route path={"/female"} element={<></>}/>
                </Routes>
            </Grid>
        </Grid>
    )
}

export default Main