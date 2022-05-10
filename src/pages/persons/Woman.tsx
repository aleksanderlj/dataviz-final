import PersonPage from "../PersonPage";
import FeatureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_women.png"
import BoxPlot from "../../images/plots/Boxplot_Women.png"
import woman2MP3 from "../../audio/woman2.mp3";
import woman3MP3 from "../../audio/woman3.mp3";
import woman4MP3 from "../../audio/woman4.mp3";
import woman2MP3_legacy from "../../audio/woman2_legacy.mp3";
import woman3MP3_legacy from "../../audio/woman3_legacy.mp3";
import woman4MP3_legacy from "../../audio/woman4_legacy.mp3";
import {useLegacyContext} from "../../context/LegacyContext";
import {useEffect, useState} from "react";

function Woman(){
    const {legacy} = useLegacyContext()
    const [woman2, setWoman2] = useState(new Audio(woman2MP3))
    const [woman3, setWoman3] = useState(new Audio(woman3MP3))
    const [woman4, setWoman4] = useState(new Audio(woman4MP3))

    useEffect(() => {
        if (legacy) {
            setWoman2(new Audio(woman2MP3_legacy))
            setWoman3(new Audio(woman3MP3_legacy))
            setWoman4(new Audio(woman4MP3_legacy))
        } else {
            setWoman2(new Audio(woman2MP3))
            setWoman3(new Audio(woman3MP3))
            setWoman4(new Audio(woman4MP3))
        }
    }, [legacy])

    return (
        <PersonPage
            target={"women"}
            map={"plots/map_woman.html"}
            mapSound={woman2}
            featureImportance={FeatureImportance}
            locationPerc={22.9936517821492}
            privatePerc={-2.37709664671849}
            religiousPerc={10.9014471695799}
            degreePerc={26.3199605125101}
            fiSound={woman3}
            boxplot={BoxPlot}
            boxplotSound={woman4}
        />
    )
}

export default Woman;