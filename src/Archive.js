import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import assets from './assets/blogs.json';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue, get, child  } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import BlogResult from './components/BlogResult';
import Filters from './components/Filters';
  
function SearchResults({theme}) {
    const [showCards, setShowCards] = useState(null);
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
            setShowCards(posts)
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
                <Grid item xs={4}>
                    <Filters theme={theme} setShowCards={setShowCards}/>
                </Grid>
                <Grid item xs={8}>
                    <Divider sx={{ mb: 2, borderBottomWidth: 5, bgcolor: '#021882' }} />
                    <Grid container spacing={4} sx={{mt: 1}}>
                            {showCards && showCards.map((blog, index) => {
                                    return ( <Grid item xs={6}>

                                    <BlogResult theme={theme} blog={blog}/>
                                    </Grid>
                                )})}
                    </Grid>
                </Grid>
                </Grid>
                </Box>
        </Container>
        </ThemeProvider>
    );
}
export default SearchResults;