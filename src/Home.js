import FeaturedBlogCard from './components/FeaturedBlogCard';
import BlogCard from './components/BlogCard';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';

import DiscussionSummaries from './components/DiscussionSummaries';
import EmailCard from './components/EmailCard';  
  
function Home({theme}) {
    const fakeBlog = {
        title: "How CRISPR could help save crops from devastation caused by pests",
        author: "Salal Humair",
        date: "12/21/2022",
        snippet: "Gene editing insects could help reduce reliance on pesticides—and help protect billion-dollar industries.",
        text: "blog text body"
    }
    const fakeBlogs = Array(5).fill(fakeBlog);

    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} sx={{mt: 1}}>
                <Grid item xs={7}>
                    <FeaturedBlogCard theme={theme} blog={fakeBlogs[0]}/>
                    {fakeBlogs
                        .map((blog, index) => {
                            return ( <div>
                            <BlogCard theme={theme} blog={blog}/>
                            <Divider sx={{ borderBottomWidth: 5, bgcolor: '#021882' }} />
                            </div>
                        )})}
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