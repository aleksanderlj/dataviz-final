import PersonPage from "../PersonPage";
import FeatureImportance from "../../images/plots/Percent_of_total_enrollment_that_are_White.png"
import BoxPlot from "../../images/plots/Boxplot_White.png"

function Caucasian(){
    return (
        <PersonPage
            map={"plots/map_white.html"}
            mapText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare eros id odio auctor, sed consectetur nunc bibendum. Sed tristique ex et tempus ultrices. In feugiat at lorem eget malesuada. Sed nec arcu a lectus malesuada eleifend non quis purus. Phasellus in eros a ex finibus luctus. Maecenas ac odio dictum, ultrices nunc vel, faucibus felis. Ut et urna nisl. Cras non molestie massa, sit amet aliquam nibh. Donec vel vestibulum orci, in placerat ipsum."}
            featureImportance={FeatureImportance}
            featureImportanceText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare eros id odio auctor, sed consectetur nunc bibendum. Sed tristique ex et tempus ultrices. In feugiat at lorem eget malesuada. Sed nec arcu a lectus malesuada eleifend non quis purus. Phasellus in eros a ex finibus luctus. Maecenas ac odio dictum, ultrices nunc vel, faucibus felis. Ut et urna nisl. Cras non molestie massa, sit amet aliquam nibh. Donec vel vestibulum orci, in placerat ipsum."}
            locationPerc={-25.1891710254391}
            privatePerc={-6.4117446482832}
            religiousPerc={5.92126361470026}
            degreePerc={-18.5198517349988}
            boxPlot={BoxPlot}
            boxPlotText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare eros id odio auctor, sed consectetur nunc bibendum. Sed tristique ex et tempus ultrices. In feugiat at lorem eget malesuada. Sed nec arcu a lectus malesuada eleifend non quis purus. Phasellus in eros a ex finibus luctus. Maecenas ac odio dictum, ultrices nunc vel, faucibus felis. Ut et urna nisl. Cras non molestie massa, sit amet aliquam nibh. Donec vel vestibulum orci, in placerat ipsum."}
        />
    )
}

export default Caucasian;