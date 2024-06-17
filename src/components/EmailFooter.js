import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import EmailForm from './EmailForm';

function EmailFooter(props) {
    const { theme } = props;

    return (
        <ThemeProvider theme={theme}>
            <Box component="div"  sx={{
                height: 150,
                backgroundColor: 'primary.main',
            }}>
                <Container >
                <Grid container spacing={4} sx={{mt:3}}>
                    <Grid item xs={6}>
                    <Typography variant="h4" color="white" sx={{fontWeight: 800}} >Stay up to date with TPS</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <EmailForm />
                    </Grid>
                </Grid>
                </Container>
            {/* <Grid container spacing={3}>
                <Grid item xs={8}>

                </Grid>
                <Grid item xs={4}>
                    <EmailForm />
                </Grid>
            </Grid> */}
        </Box>
        </ThemeProvider>
    );
}
export default EmailFooter;
