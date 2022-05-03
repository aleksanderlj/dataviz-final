import PersonPage from "../PersonPage";
import FeatureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_Asian.png"
import BoxPlot from "../../images/plots/Boxplot_Asian.png"

function Asian(){
    return (
        <PersonPage
            target={"asian people"}
            map={"plots/map_asian.html"}
            featureImportance={FeatureImportance}
            locationPerc={17.7929168291232}
            privatePerc={-45.3116687172973}
            religiousPerc={-5.0635218016771}
            degreePerc={2.40456848306442}
            boxPlot={BoxPlot}
        />
    )
}

export default Asian;