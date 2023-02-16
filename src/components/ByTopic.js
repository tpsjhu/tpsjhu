import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

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
            <Typography variant="h5" color="white" sx={{textAlign: "left"}}>By Topic</Typography>
            {topics.map((topic, index) => (
                <Typography variant="body1" color="primary" sx={{textAlign: "left"}} onClick={()=> console.log('clicked: ', topic)}>{topic}</Typography>
            ))}
        </ThemeProvider>
    );
}
export default ByTopic;
