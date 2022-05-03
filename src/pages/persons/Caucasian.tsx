import PersonPage from "../PersonPage";
import FeatureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_White.png"
import BoxPlot from "../../images/plots/Boxplot_White.png"

function Caucasian(){
    return (
        <PersonPage
            target={"caucasian people"}
            map={"plots/map_white.html"}
            featureImportance={FeatureImportance}
            locationPerc={-25.1891710254391}
            privatePerc={-6.4117446482832}
            religiousPerc={5.92126361470026}
            degreePerc={-18.5198517349988}
            boxPlot={BoxPlot}
        />
    )
}

export default Caucasian;