import PersonPage from "../PersonPage";
import FeatureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_women.png"
import BoxPlot from "../../images/plots/Boxplot_Women.png"
import woman2MP3 from "../../audio/woman2.mp3";
import woman3MP3 from "../../audio/woman3.mp3";
import woman4MP3 from "../../audio/woman4.mp3";

function Woman(){
    return (
        <PersonPage
            target={"women"}
            map={"plots/map_woman.html"}
            mapSound={woman2MP3}
            featureImportance={FeatureImportance}
            locationPerc={22.9936517821492}
            privatePerc={-2.37709664671849}
            religiousPerc={10.9014471695799}
            degreePerc={26.3199605125101}
            fiSound={woman3MP3}
            boxplot={BoxPlot}
            boxplotSound={woman4MP3}
        />
    )
}

export default Woman;