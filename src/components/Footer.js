import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ByTopic from './ByTopic';
import ContactUs from './ContactUs';
import EmailFooter from './EmailFooter';
import FooterTitle from './FooterTitle';

function Footer(props) {
    const { theme } = props;

    return (
        <ThemeProvider theme={theme}>
            <EmailFooter />
            <Box component="div" noValidate autoComplete="off"       sx={{
                height: 400,
                background: "linear-gradient(to right, #5371FF, #031A82);"
                // backgroundColor: 'black',

            }}
            >
                <Container>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <FooterTitle theme={theme}/>
                    </Grid>
                    <Grid item xs={3}>
                        <ContactUs theme={theme}/>
                    </Grid>
                    {/*<Grid item xs={3} direction="row"*/}
                    {/*      justifyContent="flex-end"*/}
                    {/*      alignItems="center">*/}
                    {/*    <ByTopic theme={theme}/>*/}
                    {/*</Grid>*/}
                    <Grid item xs={1}>
                        
                    </Grid>


                </Grid>

                </Container>

            </Box>
        </ThemeProvider>
    );
}
export default Footer;
