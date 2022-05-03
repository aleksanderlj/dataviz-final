import PersonPage from "../PersonPage";
import FeatureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_women.png"
import BoxPlot from "../../images/plots/Boxplot_Women.png"

function Asian(){
    return (
        <PersonPage
            target={"women"}
            map={"plots/map_woman.html"}
            featureImportance={FeatureImportance}
            locationPerc={22.9936517821492}
            privatePerc={-2.37709664671849}
            religiousPerc={10.9014471695799}
            degreePerc={26.3199605125101}
            boxPlot={BoxPlot}
        />
    )
}

export default Asian;