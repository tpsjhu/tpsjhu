import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

function ContactUs(props) {
    const { theme } = props;

    const address = "Technology & Policy Society \b XX Building, XX Street,\b Baltimore, MD 21218 \b someone@jhu.edu"

    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h5" color="white" sx={{textAlign: "left"}}>Contact Us</Typography>
            <Typography variant="body1" color="primary" sx={{textAlign: "left", mb: 1}}>{address}</Typography>
        </ThemeProvider>
    );
}
export default ContactUs;
