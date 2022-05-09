import PersonPage from "../PersonPage";
import FeatureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_White.png"
import BoxPlot from "../../images/plots/Boxplot_White.png"
import white2MP3 from "../../audio/white2.mp3";
import white3MP3 from "../../audio/white3.mp3";
import white4MP3 from "../../audio/white4.mp3";


function Caucasian(){
    return (
        <PersonPage
            target={"caucasian people"}
            map={"plots/map_white.html"}
            mapSound={white2MP3}
            featureImportance={FeatureImportance}
            locationPerc={-25.1891710254391}
            privatePerc={-6.4117446482832}
            religiousPerc={5.92126361470026}
            degreePerc={-18.5198517349988}
            fiSound={white3MP3}
            boxplot={BoxPlot}
            boxplotSound={white4MP3}
        />
    )
}

export default Caucasian;