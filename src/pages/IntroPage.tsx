import {Grid, Typography, Button} from "@mui/material";
import {ArrowDownward} from "@mui/icons-material";

function IntroPage(props: any) {
    const bgcolor = "black"
    const fgcolor = "grey.300"

    function handleClick(){
        if(props.firstClick) {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            })
        }
        props.setFirstClick(true)
    }

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} height={"100vh"} sx={{bgcolor: bgcolor}}>
            <Grid container item xs={8} spacing={5} justifyContent={"center"}>
                <Grid item xs={12}>
                    <Typography variant={"h3"} sx={{ color: fgcolor }}>
                        {"Equality in American Universities"}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"h5"} sx={{ whiteSpace: "pre-line", color: fgcolor }}>
                        {
                            "Below we'll be looking at equality in universities all across America.\n\n" +
                            "Hover over each character to hear what they have to say, and then choose one to see how they are represented in the universities around America.\n\n" +
                            "Press the audio buttons throughout the page to gain insight into their perspective.\n\n" +
                            "When you're done exploring a character, you can try clicking on another to see how they might be represented differently."
                        }
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{color: fgcolor}}>
                    <Typography>
                        {"Audio is an important part of the experience, so please make sure your volume is turned up before proceeding."}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant={"contained"}
                        startIcon={<ArrowDownward/>}
                        onClick={handleClick}
                    >
                        {"Explore"}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default IntroPage;