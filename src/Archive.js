import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import assets from './assets/blogs.json';

import BlogResult from './components/BlogResult';
import Filters from './components/Filters';
  
function SearchResults({theme}) {
    const [showCards, setShowCards] = useState(assets["Blog posts"].concat(assets["Speakers"], assets["Discussions"], assets["Panels"]));

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
                            {showCards
                                .map((blog, index) => {
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