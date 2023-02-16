import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import EmailForm from './EmailForm';

function EmailCard(props) {
    const { theme } = props;

    return (
        <ThemeProvider theme={theme}>
            <Box component="form" noValidate autoComplete="off" >
            <Grid container spacing={0}>
            <Grid item xs={12}>
                <Typography variant="h5" sx={{ mt: 1, mb: 1, fontWeight: 800, textAlign: 'left' }} color="header.primary">Sign up for our mailing list </Typography>
            </Grid>
            <EmailForm />
            </Grid>
        </Box>
        </ThemeProvider>
    );
}
export default EmailCard;
