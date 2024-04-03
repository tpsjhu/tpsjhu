import FeaturedBlogCard from './components/FeaturedBlogCard';
import BlogCard from './components/BlogCard';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';

import DiscussionSummaries from './components/DiscussionSummaries';
import EmailCard from './components/EmailCard';
import {initializeApp} from "firebase/app";
import {get, getDatabase, ref} from "firebase/database";
import {useState,useEffect} from "react";
  
function Home({theme}) {
    const [blogs, setBlogs] = useState(null);

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_APIKEY,
        authDomain: process.env.REACT_APP_AUTHDOMAIN,
        projectId: process.env.REACT_APP_PROJECTID,
        storageBucket: process.env.REACT_APP_STORAGEBUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
        appId: process.env.REACT_APP_APPID,
        measurementId: process.env.REACT_APP_MEASUREMENTID
    };



    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    async function getBlogs() {
        const fourPlaceCarts = ref(db, 'Posts');
        const snapshot = await get(fourPlaceCarts);
        if (snapshot.exists()) {
            let posts = []
            Object.entries(snapshot.val()).forEach(([key,value]) => {
                posts.push(value);
            });
            setBlogs(posts)
            //  console.log(snapshot.val());
        }
        else {
            //  console.log("No data available");
        }
    }

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} sx={{mt: 1}}>
                <Grid item xs={7}>
                    {blogs && blogs.length > 0 &&
                    <FeaturedBlogCard theme={theme} blog={blogs[0]}/>
                    }
                    {blogs && blogs
                        .map((blog, index) => {
                            if (index !== 0) {
                            return ( <div>
                            <BlogCard theme={theme} blog={blog}/>
                            <Divider sx={{ borderBottomWidth: 5, bgcolor: '#021882' }} />
                            </div>

                        )}})}
                </Grid>
                <Grid item xs={5}>
                    <Divider sx={{ mb: 2, borderBottomWidth: 5, bgcolor: '#021882' }} />
                    <EmailCard theme={theme}/>
                    <Divider sx={{ mb: 2, borderBottomWidth: 5, bgcolor: '#021882' }} />
                    <DiscussionSummaries /> 
                </Grid>
                </Grid>
                </Box>
        </Container>
        </ThemeProvider>
    );
}
export default Home;