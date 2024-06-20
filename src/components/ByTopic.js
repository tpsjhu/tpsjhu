import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function ByTopic(props) {
    const { theme } = props;

    const topics = [
        "Most Popular",
        "Artificial Intelligence",
        "Intellectual Properties",
        "NLP",
        "Neuroscience",
        "Geoengineering",
        "Biotechnology",
    ]

    return (
        <ThemeProvider theme={theme}>
            <Container width="sm" sx={{mt: 5}}>
            <Typography variant="h4" color="white" sx={{fontWeight: 800, textAlign: "left"}}>By Topic</Typography>
            {topics.map((topic, index) => (
                <a href="/archive">
                    <Typography variant="body1" color="white" sx={{textAlign: "left"}} >{topic}</Typography>
                </a>
            ))}
            </Container>
        </ThemeProvider>
    );
}
export default ByTopic;
