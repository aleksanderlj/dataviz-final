import PersonPage from "../PersonPage";
import FeatureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_Black_or_African_American.png"
import BoxPlot from "../../images/plots/Boxplot_Black.png"
import af2MP3 from "../../audio/af2.mp3";
import af3MP3 from "../../audio/af3.mp3";
import af4MP3 from "../../audio/af4.mp3";
import af2MP3_legacy from "../../audio/af2_legacy.mp3";
import af3MP3_legacy from "../../audio/af3_legacy.mp3";
import af4MP3_legacy from "../../audio/af4_legacy.mp3";
import {useLegacyContext} from "../../context/LegacyContext";
import {useEffect, useState} from "react";

function Black(){
    const {legacy} = useLegacyContext()
    const [af2, setAf2] = useState(new Audio(af2MP3))
    const [af3, setAf3] = useState(new Audio(af3MP3))
    const [af4, setAf4] = useState(new Audio(af4MP3))

    useEffect(() => {
        if (legacy) {
            setAf2(new Audio(af2MP3_legacy))
            setAf3(new Audio(af3MP3_legacy))
            setAf4(new Audio(af4MP3_legacy))
        } else {
            setAf2(new Audio(af2MP3))
            setAf3(new Audio(af3MP3))
            setAf4(new Audio(af4MP3))
        }
    }, [legacy])
    
    return (
        <PersonPage
            target={"african-american people"}
            map={"plots/map_black.html"}
            mapSound={af2}
            featureImportance={FeatureImportance}
            locationPerc={17.1706152145732}
            privatePerc={22.5799395460681}
            religiousPerc={21.4140290057339}
            degreePerc={3.27426177394979}
            fiSound={af3}
            boxplot={BoxPlot}
            boxplotSound={af4}
        />
    )
}

export default Black;