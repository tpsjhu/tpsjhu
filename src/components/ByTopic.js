import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

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
                <a href="/archive">
                    <Typography variant="body1" color="primary" sx={{textAlign: "left"}} >{topic}</Typography>
                </a>
            ))}
        </ThemeProvider>
    );
}
export default ByTopic;
