import PersonPage from "../PersonPage";
import FeatureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_Black_or_African_American.png"
import BoxPlot from "../../images/plots/Boxplot_Black.png"

function Black(){
    return (
        <PersonPage
            target={"african-american people"}
            map={"plots/map_black.html"}
            featureImportance={FeatureImportance}
            locationPerc={17.1706152145732}
            privatePerc={22.5799395460681}
            religiousPerc={21.4140290057339}
            degreePerc={3.27426177394979}
            boxPlot={BoxPlot}
        />
    )
}

export default Black;