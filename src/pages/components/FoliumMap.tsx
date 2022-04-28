import {Box} from "@mui/material";

export interface FoliumMapProps {
    src: string;
}

function FoliumMap(props: FoliumMapProps) {
    return (
        <Box sx={{
            width: "100%",
            height: 0,
            pb:"60%",
            position: "relative"
        }}>
            <Box component={"iframe"} src={props.src} sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                border: "none !important"
            }}/>
        </Box>
    )
}

export default FoliumMap;