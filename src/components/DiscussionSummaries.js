import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function DiscussionSummaries(props) {
    const { theme } = props;
    const fakeSummaries = [{
        title: "Some fake discussion title",
        author: "Salal Humair",
        date: "12/31/2022",
    },
    {
        title: "Some fake discussion title",
        author: "Salal Humair",
        date: "12/31/2022",
    }, 
    {
        title: "Some fake discussion title",
        author: "Salal Humair",
        date: "12/31/2022",
    }]

    return (
        <ThemeProvider theme={theme}>
            <Box>
            <Grid container spacing={0}>
                <Grid item sx={12}>
                    <Typography variant="h5" color="header.primary" sx={{fontWeight: 800}}> Discussion Summaries</Typography>
                </Grid>
                {fakeSummaries.map((discussion, index) => (
                    <Grid item xs={12} sx={{mb:2}}>
                        <Typography variant="body1" sx={{textAlign: 'left'}} > {discussion.title}</Typography>
                        <Typography variant="subtitle1" sx={{textAlign: 'left'}} color="text.secondary"> {discussion.date + " " + discussion.author}</Typography>
                    </Grid>
                ))}
                <Grid item xs={12} >
                    <Divider variant="fullWidth" sx={{ borderBottomWidth: 5, bgcolor: "header.primary" }} />
                </Grid>
            </Grid>
        </Box>
        </ThemeProvider>
    );
}
export default DiscussionSummaries;
