import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";

function ContactUs(props) {
    const { theme } = props;

    const address = "Technology & Policy Society \b XX Building, XX Street,\b Baltimore, MD 21218 \b someone@jhu.edu"

    return (
        <ThemeProvider theme={theme}>
            <Container width="sm" sx={{mt: 5}}>
            <Typography variant="h4" color="white" sx={{fontWeight: 800, textAlign: "left"}}>Contact Us</Typography>
            <Typography variant="body1" color="white" sx={{textAlign: "left", mb: 1}}>{address}</Typography>
            </Container>
        </ThemeProvider>
    );
}
export default ContactUs;
