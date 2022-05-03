import PersonPage from "../PersonPage";
import FeatureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_women.png"
import BoxPlot from "../../images/plots/Boxplot_Women.png"

function Asian(){
    return (
        <PersonPage
            map={"plots/map_woman.html"}
            mapText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare eros id odio auctor, sed consectetur nunc bibendum. Sed tristique ex et tempus ultrices. In feugiat at lorem eget malesuada. Sed nec arcu a lectus malesuada eleifend non quis purus. Phasellus in eros a ex finibus luctus. Maecenas ac odio dictum, ultrices nunc vel, faucibus felis. Ut et urna nisl. Cras non molestie massa, sit amet aliquam nibh. Donec vel vestibulum orci, in placerat ipsum."}
            featureImportance={FeatureImportance}
            featureImportanceText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare eros id odio auctor, sed consectetur nunc bibendum. Sed tristique ex et tempus ultrices. In feugiat at lorem eget malesuada. Sed nec arcu a lectus malesuada eleifend non quis purus. Phasellus in eros a ex finibus luctus. Maecenas ac odio dictum, ultrices nunc vel, faucibus felis. Ut et urna nisl. Cras non molestie massa, sit amet aliquam nibh. Donec vel vestibulum orci, in placerat ipsum."}
            locationPerc={22.9936517821492}
            privatePerc={-2.37709664671849}
            religiousPerc={10.9014471695799}
            degreePerc={26.3199605125101}
            boxPlot={BoxPlot}
            boxPlotText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare eros id odio auctor, sed consectetur nunc bibendum. Sed tristique ex et tempus ultrices. In feugiat at lorem eget malesuada. Sed nec arcu a lectus malesuada eleifend non quis purus. Phasellus in eros a ex finibus luctus. Maecenas ac odio dictum, ultrices nunc vel, faucibus felis. Ut et urna nisl. Cras non molestie massa, sit amet aliquam nibh. Donec vel vestibulum orci, in placerat ipsum."}
        />
    )
}

export default Asian;