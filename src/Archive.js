import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import BlogResult from './components/BlogResult';
import Filters from './components/Filters';
import Request from "./API/Request";
import ComponentLoader from "./common/Loader/ComponentLoader";
  
function SearchResults({theme}) {
    const [showCards, setShowCards] = useState(null);
    const [tags, setTags] = useState([])
    const [blogsLoading, setBlogsLoading] = useState(false)
    const [tagsLoading , setTagsLoading] = useState(false)
    const Req = new Request();

    async function getBlogs() {
        setBlogsLoading(true)
        const values = await Req.get('articles')
        if (values != null) {
            let posts = []
            values.forEach((doc) => {
                posts.push(doc.data());
            });
            setShowCards(posts)
        } else {
              console.log("No data available");
        }
        setBlogsLoading(false)
    }

    async function getTags(){
        setTagsLoading(true)
        const values = await Req.get('tags')
        let tagList = []
        values.forEach((doc) => {
            tagList.push(doc.data().tagValue);
        });
        setTags(tagList)
        setTagsLoading(false)
    }

    useEffect(() => {
        getBlogs();
        getTags();
    }, []);


    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} sx={{mt: 1}}>
                <Grid item xs={4}>
                    {tagsLoading ? <ComponentLoader/> :
                        <>
                            {tags &&
                                <Filters theme={theme} setShowCards={setShowCards} tags={tags}/>
                            }
                        </>
                    }
                </Grid>

                    <Grid item xs={8}>
                        {blogsLoading ? <ComponentLoader/> :
                            <>

                                <Divider sx={{mb: 2, borderBottomWidth: 5, bgcolor: '#021882'}}/>
                                <Grid container spacing={4} sx={{mt: 1}}>
                                    {showCards && showCards.map((blog, index) => {
                                        return (<Grid item xs={6}>

                                                <BlogResult theme={theme} blog={blog}/>
                                            </Grid>
                                        )
                                    })}

                                </Grid>
                            </>
                        }
                    </Grid>
                </Grid>
                </Box>
        </Container>
        </ThemeProvider>
    );
}
export default SearchResults;