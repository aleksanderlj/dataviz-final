import PersonPage from "../PersonPage";
import FeatureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_Black_or_African_American.png"
import BoxPlot from "../../images/plots/Boxplot_Black.png"

function Black(){
    return (
        <PersonPage
            map={"plots/map_black.html"}
            mapText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare eros id odio auctor, sed consectetur nunc bibendum. Sed tristique ex et tempus ultrices. In feugiat at lorem eget malesuada. Sed nec arcu a lectus malesuada eleifend non quis purus. Phasellus in eros a ex finibus luctus. Maecenas ac odio dictum, ultrices nunc vel, faucibus felis. Ut et urna nisl. Cras non molestie massa, sit amet aliquam nibh. Donec vel vestibulum orci, in placerat ipsum."}
            featureImportance={FeatureImportance}
            featureImportanceText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare eros id odio auctor, sed consectetur nunc bibendum. Sed tristique ex et tempus ultrices. In feugiat at lorem eget malesuada. Sed nec arcu a lectus malesuada eleifend non quis purus. Phasellus in eros a ex finibus luctus. Maecenas ac odio dictum, ultrices nunc vel, faucibus felis. Ut et urna nisl. Cras non molestie massa, sit amet aliquam nibh. Donec vel vestibulum orci, in placerat ipsum."}
            locationPerc={17.1706152145732}
            privatePerc={22.5799395460681}
            religiousPerc={21.4140290057339}
            degreePerc={3.27426177394979}
            boxPlot={BoxPlot}
            boxPlotText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare eros id odio auctor, sed consectetur nunc bibendum. Sed tristique ex et tempus ultrices. In feugiat at lorem eget malesuada. Sed nec arcu a lectus malesuada eleifend non quis purus. Phasellus in eros a ex finibus luctus. Maecenas ac odio dictum, ultrices nunc vel, faucibus felis. Ut et urna nisl. Cras non molestie massa, sit amet aliquam nibh. Donec vel vestibulum orci, in placerat ipsum."}
        />
    )
}

export default Black;