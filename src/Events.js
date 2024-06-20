import {ThemeProvider, Typography} from "@mui/material";
import {db} from "./App";
import {useEffect, useState} from "react";
import {get, ref} from "firebase/database";
import Event from "./components/Event";
import Grid from "@mui/material/Grid";
import Request from "./API/Request";
function Events({theme}) {
    const [events, setEvents] = useState(null);
    const Req = new Request();
    async function getEvents() {
        const values = await Req.get('events')
        let events = []
        values.forEach((doc) => {
            events.push(doc.data());
        });
        setEvents(events);
    }

    useEffect(() => {
        getEvents();
    }, []);



    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h3" gutterBottom sx={{fontWeight: 800}} color="header.secondary" align="center">
                Events
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {events && events.map((event, index) => {
                return (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                    <Event theme={theme} title={event.title} date={event.date}
                           location={event.location} link={null} type={event.type} image={event.image}/>
                    </Grid>
                )
            })}
                </Grid>

        </ThemeProvider>
    );
}

export default Events;