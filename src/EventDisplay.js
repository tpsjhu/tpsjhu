import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Typography} from "@mui/material";
import {useEffect, useState} from "react";
import ComponentLoader from "./common/Loader/ComponentLoader";
import Request from "./API/Request";
function  EventDisplay({theme}) {
    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState(null)
    const Req = new Request();

    useEffect(() => {
        getEvent();
    },[]);

    async function getEvent() {
        setLoading(true)
        Req.getFile("sponsorship_packet", "SponsorshipDeck.pdf").then((url) => {
                setContent(url);
            });
        setLoading(false)
    }

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h3" gutterBottom sx={{fontWeight: 800}} color="header.primary">
                        TPS Policython at Pennsylvania 555
                    </Typography>
                    {loading && <ComponentLoader/>}
                    {!loading &&
                    <iframe src={content}
                            width="100%"
                            height="800px"
                            frameborder="0"
                            style={{
                                border: "none",
                                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                                borderRadius: "10px",
                                overflow: "hidden",
                                transition: "all 0.3s ease"
                            }}
                    />
                    }


                </Box>
            </Container>
        </ThemeProvider>
    )

}

export default EventDisplay;