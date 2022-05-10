import PersonPage from "../PersonPage";
import FeatureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_Asian.png"
import BoxPlot from "../../images/plots/Boxplot_Asian.png"
import asian2MP3 from "../../audio/asian2.mp3"
import asian3MP3 from "../../audio/asian3.mp3"
import asian4MP3 from "../../audio/asian4.mp3"
import {useState} from "react";

function Asian(){
    const [asian2, setAsian2] = useState(new Audio(asian2MP3))
    const [asian3, setAsian3] = useState(new Audio(asian3MP3))
    const [asian4, setAsian4] = useState(new Audio(asian4MP3))

    return (
        <PersonPage
            target={"asian people"}
            map={"plots/map_asian.html"}
            mapSound={asian2}
            featureImportance={FeatureImportance}
            locationPerc={17.7929168291232}
            privatePerc={-45.3116687172973}
            religiousPerc={-5.0635218016771}
            degreePerc={2.40456848306442}
            fiSound={asian3}
            boxplot={BoxPlot}
            boxplotSound={asian4}
        />
    )
}

export default Asian;