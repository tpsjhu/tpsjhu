import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function EmailForm(props) {
    const { theme } = props;

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={0}>

            <Grid item xs={9}>
                <TextField
                hiddenLabel
                fullWidth
                id="filled-hidden-label-normal"
                defaultValue=""
                variant="filled"
                />
            </Grid>
            <Grid item xs={3}>
                <Button  sx={{ m: 0, fontWeight: 800, width: '100%', height: '100%', textTransform: 'lowercase'}} variant="contained">sign up</Button>
            </Grid>
            <Grid item xs={12} sx={{mb:1}} >
                <Typography variant="subtitle1" textAlign="left">Disclaimer placeholder</Typography>
            </Grid>
            </Grid>
        </ThemeProvider>
    );
}
export default EmailForm;
