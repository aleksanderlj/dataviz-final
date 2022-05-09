import PersonPage from "../PersonPage";
import FeatureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_Black_or_African_American.png"
import BoxPlot from "../../images/plots/Boxplot_Black.png"
import af2MP3 from "../../audio/af2.mp3";
import af3MP3 from "../../audio/af3.mp3";
import af4MP3 from "../../audio/af4.mp3";

function Black(){
    return (
        <PersonPage
            target={"african-american people"}
            map={"plots/map_black.html"}
            mapSound={af2MP3}
            featureImportance={FeatureImportance}
            locationPerc={17.1706152145732}
            privatePerc={22.5799395460681}
            religiousPerc={21.4140290057339}
            degreePerc={3.27426177394979}
            fiSound={af3MP3}
            boxplot={BoxPlot}
            boxplotSound={af4MP3}
        />
    )
}

export default Black;