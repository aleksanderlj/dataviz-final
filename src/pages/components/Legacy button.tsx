import {Box} from "@mui/material";
import {useLegacyContext} from "../../context/LegacyContext";

function LegacyButton() {
    const {legacy, setLegacy} = useLegacyContext()

    function handleClick() {
        legacy ? console.log("Legacy mode deactivated...") : console.log("Legacy mode activated! Enjoy the old audio.")
        setLegacy(!legacy)
    }

    return (
        <Box
            onClick={handleClick}
            sx={{
                position: "absolute",
                bottom: "10px",
                left: "0px",
                cursor: "help",
                color: legacy ? "pink" : "black"
            }}
        >{"legacy"}</Box>
    )
}

export default LegacyButton;