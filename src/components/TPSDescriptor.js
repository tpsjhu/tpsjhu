import {ThemeProvider} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";


const description = "TPS is a student run club at Johns Hopkins University that aims to provide a platform for students to learn about and discuss technology policy. We host events, workshops, and discussions on a variety of topics related to technology policy, including privacy, cybersecurity, and internet governance.";

function TPSDescriptor(props){
    const { theme } = props;
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Grid container spacing={0}>
                    <Grid item sx={12}>
                        <Typography variant="h5" color="header.primary" sx={{fontWeight: 800}}>What is TPS?</Typography>
                    </Grid>
                    <Typography variant="body1" sx={{textAlign: 'left'}} color="text.secondary" > {description}</Typography>
                    {/*<Grid item xs={12} >*/}
                    {/*    <Divider variant="fullWidth" sx={{ borderBottomWidth: 5, bgcolor: "header.primary" }} />*/}
                    {/*</Grid>*/}
                </Grid>
            </Box>
            </ThemeProvider>
    );
}

export default TPSDescriptor;