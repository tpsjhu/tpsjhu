import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';


function Event({theme, title, date, location, link, type, image}) {

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{fontWeight: 200}}>
                        {location}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large" sx={{ ml: 2, fontWeight: 800, textTransform: 'capitalize'}} variant="contained">Register</Button>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}
export default Event;