import {ThemeProvider} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useContext} from "react";
import {StateContext} from "./Provider/StateProvider";
import genericBlogPost from "./assets/genericBlogPost.jpg"
import genericEvents from "./assets/genericEvents.jpg"



function AdminDashboard({theme}) {
    const nav = useNavigate();
    const {loggedIn} = useContext(StateContext);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            nav('/signIn')
        }
    }, []);

    const styles = {
        container: {
            padding: theme.spacing(8, 0),
        },
    };
  return(
      <ThemeProvider theme={theme}>
        <section style={styles.container}>
            <Grid container spacing={4} sx={{mt: 1}}>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={genericBlogPost}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Create a Blog Post
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large" sx={{ ml: 2, fontWeight: 800, textTransform: 'capitalize'}} variant="contained" onClick={(e)=> nav('/newPost')}>New Post</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={genericEvents}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Create an Event
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large" sx={{ ml: 2, fontWeight: 800, textTransform: 'capitalize'}} variant="contained" onClick={(e)=>nav('/newEvent')}>New Event</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </section>
    </ThemeProvider>
  )
}

export default AdminDashboard;