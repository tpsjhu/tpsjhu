import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';

import BlogResult from './components/BlogResult';
import Filters from './components/Filters';
  
function SearchResults({theme}) {
    const fakeBlog = {
        title: "How Abe could help save crops from devastation caused by pests",
        author: "Abe",
        date: "12/21/2022",
        snippet: "Gene editing insects could help reduce reliance on pesticides—and help protect billion-dollar industries.",
        text: "blog text body",
        tags: ["Artificial Intelligence", "Panel"]
    }
    const fakeBlogs = Array(5).fill(fakeBlog);

    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} sx={{mt: 1}}>
                <Grid item xs={4}>
                    <Filters theme={theme}/>
                </Grid>
                <Grid item xs={8}>
                    <Divider sx={{ mb: 2, borderBottomWidth: 5, bgcolor: '#021882' }} />

                    <Grid container spacing={4} sx={{mt: 1}}>
                            {fakeBlogs
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