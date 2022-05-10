import PersonPage from "../PersonPage";
import FeatureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_White.png"
import BoxPlot from "../../images/plots/Boxplot_White.png"
import white2MP3 from "../../audio/white2.mp3";
import white3MP3 from "../../audio/white3.mp3";
import white4MP3 from "../../audio/white4.mp3";
import white2MP3_legacy from "../../audio/white2_legacy.mp3";
import white3MP3_legacy from "../../audio/white3_legacy.mp3";
import white4MP3_legacy from "../../audio/white4_legacy.mp3";
import {useLegacyContext} from "../../context/LegacyContext";
import {useEffect, useState} from "react";

function Caucasian(){
    const {legacy} = useLegacyContext()
    const [white2, setWhite2] = useState(new Audio(white2MP3))
    const [white3, setWhite3] = useState(new Audio(white3MP3))
    const [white4, setWhite4] = useState(new Audio(white4MP3))

    useEffect(() => {
        if (legacy) {
            setWhite2(new Audio(white2MP3_legacy))
            setWhite3(new Audio(white3MP3_legacy))
            setWhite4(new Audio(white4MP3_legacy))
        } else {
            setWhite2(new Audio(white2MP3))
            setWhite3(new Audio(white3MP3))
            setWhite4(new Audio(white4MP3))
        }
    }, [legacy])
    
    return (
        <PersonPage
            target={"caucasian people"}
            map={"plots/map_white.html"}
            mapSound={white2}
            featureImportance={FeatureImportance}
            locationPerc={-25.1891710254391}
            privatePerc={-6.4117446482832}
            religiousPerc={5.92126361470026}
            degreePerc={-18.5198517349988}
            fiSound={white3}
            boxplot={BoxPlot}
            boxplotSound={white4}
        />
    )
}

export default Caucasian;