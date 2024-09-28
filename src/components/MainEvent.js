import {ThemeProvider} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import penn_picture from "../images/penn_555.jpg"

const description = "Come and join us at the TPS Policython in DC! We will be discussing a variety of topics related to technology policy, including privacy, cybersecurity, and internet governance.";

function MainEvent(props){
    const { theme } = props;
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{mb:1}}>

                <Grid container spacing={2}>
                    <Grid item sx={12}>
                        <Typography variant="h5" color="header.primary" sx={{fontWeight: 800}}>FIRST TPS EVENT: Policython!</Typography>
                    </Grid>
                    <Grid container spacing={2} sx={{mt:0.25}}>
                        <Grid item xs={6}>
                            <img src={penn_picture} alt="TPS" width={200} height={200}/>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography variant="body1" sx={{textAlign: 'left'}} color="text.secondary" > {description}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default MainEvent;