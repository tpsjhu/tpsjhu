import FeaturedBlogCard from './components/FeaturedBlogCard';
import BlogCard from './components/BlogCard';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import EmailCard from './components/EmailCard';
import {useState,useEffect} from "react";
import TPSDescriptor from "./components/TPSDescriptor";
import {Typography} from "@mui/material";
import Request from "./API/Request";
import Event from "./components/Event";
import Button from "@mui/material/Button";
import about_us from "./assets/about_us.png";
import ComponentLoader from "./common/Loader/ComponentLoader";
import MainEvent from "./components/MainEvent";
function Home({theme}) {
    const [blogs, setBlogs] = useState(null);
    const [blogLoading, setBlogLoading] = useState(true);
    const [events, setEvents] = useState(null);
    const Req = new Request();
    const styles = {
        summary: {
            maxWidth: 600,
            margin: 'auto',
            textAlign: 'center',
            marginBottom: theme.spacing(4),
        },
    };


    async function getBlogs() {
        setBlogLoading(true)
        const values = await Req.get('articles')
        let posts = []
        values.forEach((doc) => {
              posts.push(doc.data());
        });
        setBlogs(posts);
        setBlogLoading(false)
    }

    useEffect(() => {
        getBlogs();
        getEvents();
    }, []);


    async function getEvents() {
        const values = await Req.get('events')
        let events = []
        values.forEach((doc) => {
            events.push(doc.data());
        });
        setEvents(events);
    }

    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} sx={{mt: 1}}>
                <Grid item xs={7}>
                    {blogLoading ?
                    <ComponentLoader/> :
                        <>
                            {blogs && blogs.length > 0 &&
                                <FeaturedBlogCard theme={theme} />
                            }
                        </>
                    }

                </Grid>
                <Grid item xs={5} spacing={2}>
                    <MainEvent theme={theme}/>
                    <Divider sx={{ mb: 2, borderBottomWidth: 5, bgcolor: '#021882' }} />
                    <EmailCard theme={theme}/>
                    <Divider sx={{ mb: 2, borderBottomWidth: 5, bgcolor: '#021882' }} />
                    <TPSDescriptor theme={theme}/>
                </Grid>
                </Grid>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {blogs && blogs.slice(0,10)
                        .map((blog, index) => {
                            if (blog.uuid !== "qboLa9pXeZISC9rktHxA") {
                                return (
                                    <Grid item xs={2} sm={4} md={6} key={index}>
                                        <div>
                                            <Divider sx={{ borderBottomWidth: 5, bgcolor: '#021882' }} />
                                            <BlogCard theme={theme} blog={blog}/>
                                            {/*<Divider sx={{ borderBottomWidth: 5, bgcolor: '#021882' }} />*/}
                                        </div>
                                    </Grid>

                                )} else{
                                return null;
                            }

                        })}
                </Grid>

                <Grid item xs={7} sx={{mt: 10, mb: 10}}>
                    <Grid item xs={12}  align="center">
                        <Button variant="outlined"   color="primary" href="/archive" size="large" sx={{mt: 2, borderRadius: 28 }}>
                            Explore More Articles
                        </Button>
                    </Grid>
                </Grid>
                {/*<Grid item xs={7}>*/}
                {/*    <Typography variant="h3"  sx={{fontWeight: 800}} color="header.primary" align="center">*/}
                {/*        Upcoming Events*/}
                {/*    </Typography>*/}

                {/*    <Grid container spacing={4} sx={{mt: 1}}>*/}
                {/*        {events && events.slice(0,3).map((event, index) => {*/}
                {/*            return (*/}
                {/*                <Grid item xs={2} sm={4} md={4} key={index}>*/}
                {/*                    <Event theme={theme} title={event.title} date={event.date}*/}
                {/*                           location={event.location} link={null} type={event.type} image={event.image}/>*/}
                {/*                </Grid>*/}
                {/*            )*/}
                {/*        })}*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}

                {/*<Grid item xs={7} sx={{mt: 10, mb: 10}}>*/}
                {/*    <Grid item xs={12}  align="center" >*/}
                {/*        <Button variant="outlined"   color="primary" href="/events" size="large" sx={{mt: 2, borderRadius: 28}}>*/}
                {/*            Explore More Events*/}
                {/*        </Button>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}

                <Grid item xs={7}>

                <Typography variant="h3" gutterBottom sx={{fontWeight: 800}} color="header.primary" align="center">
                    About us
                </Typography>
                    <Grid container spacing={4} sx={{mt: 1}}>
                        <Grid item xs={12}  align="center">
                        <img src={about_us} alt="TPS"
                        width={705} height={281}/>
                        </Grid>
                <div style={{...styles.summary, marginTop: theme.spacing(4)}}>
                    <Typography variant="body1" color="textSecondary">
                        The Technology and Policy Society at Johns Hopkins (TPS) is the first student-run policy society on campus. It aims at uniting talents interested in technology and related government policies, philosophical and ethical discussions, and laws, for making an active social contribution in these fields. TPS will host regular social and academic events for its members as well as provide networking opportunities with distinguished individuals from various technology industries.
                    </Typography>
                </div>
                        </Grid>

                <Button variant="outlined"   color="primary" href="https://join.slack.com/t/tps2022/shared_invite/zt-2rgvh2kv9-gRcVXIs_dj~2scfU5UqJZQ" size="large" sx={{mt: 2, borderRadius: 28 }}>
                    Become a Member Today!
                </Button>
                </Grid>
            </Box>
        </Container>
        </ThemeProvider>
    );
}
export default Home;