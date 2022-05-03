import {Grid, Typography, Button} from "@mui/material";
import {ArrowDownward} from "@mui/icons-material";

function IntroPage() {
    function handleClick(){
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        })
    }

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} height={"100vh"}>
            <Grid container item xs={8} spacing={5} justifyContent={"center"}>
                <Grid item xs={12}>
                    <Typography variant={"h3"}>
                        {"Equality in American Universities"}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"h5"} sx={{ whiteSpace: "pre-line" }}>
                        {
                            "Below we'll be looking at equality in universities all across America.\n\n" +
                            "Hover over each character to hear what they have to say, and then choose one to see how they are represented in the universities around America.\n\n" +
                            "When you're done exploring a character, you can try clicking on another to see how they might be represented differently."
                        }
                    </Typography>
                </Grid>
                <Grid item xs={12}>
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