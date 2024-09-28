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
    const [blogsLoading, setBlogsLoading] = useState(false)
    const [tagsLoading , setTagsLoading] = useState(false)
    const [typeFilters, setTypeFilters] = useState({'Event': false, 'Technical Paper': false, 'Policy Paper': false});
    const [topicFilters, setTopicFilters] = useState({
        'LLM': false,
        'Law': false,
        'Energy': false,
        'AI Safety': false,
        'Policy': false,
    });
    const Req = new Request();

    async function getBlogs() {
        setBlogsLoading(true)
        const values = await Req.get('articles')
        if (values != null) {
            let posts = []
            values.forEach((doc) => {
                posts.push(doc.data());
            });
            console.log(posts)
            setShowCards(posts)
        } else {
              console.log("No data available");
        }
        setBlogsLoading(false)
    }

    function filterCards(cards) {
        let filteredCards = {};
        if (Object.values(typeFilters).some(val => val === true)) {
           cards.map((card) => {
                if (typeFilters[card.type]) {
                    filteredCards[card.uuid] = card;
                }
            })
         }
        if (Object.values(topicFilters).some(val => val === true)) {
           cards.map((card) => {
               if (card.tags.length > 0) {
                   let trueTopics = Object.keys(topicFilters).filter(topic => topicFilters[topic]);
                   if (trueTopics.every(topic => card.tags.includes(topic))){
                          filteredCards[card.uuid] = card;
                   }
               }
           });

        }

        console.log(filteredCards)

        if (Object.keys(filteredCards).length === 0) {
            return cards;
        }


        return Object.values(filteredCards);
    }

    // async function getTags(){
    //     setTagsLoading(true)
    //     const values = await Req.get('tags')
    //     let tagList = []
    //     values.forEach((doc) => {
    //         tagList.push(doc.data().tagValue);
    //     });
    //     setTags(tagList)
    //     setTagsLoading(false)
    // }

    useEffect(() => {
        getBlogs();
        //getTags();
    }, []);


    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} sx={{mt: 1}}>
                <Grid item xs={4}>
                    <Filters theme={theme} setShowCards={setShowCards}
                             typeFilters={typeFilters} setTypeFilters={setTypeFilters}
                             topicFilters={topicFilters} setTopicFilters={setTopicFilters}/>
                </Grid>

                    <Grid item xs={8}>
                        {blogsLoading ? <ComponentLoader/> :
                            <>

                                <Divider sx={{mb: 2, borderBottomWidth: 5, bgcolor: '#021882'}}/>
                                <Grid container spacing={4} sx={{mt: 1}}>
                                    {showCards && filterCards(showCards).map((blog, index) => {
                                        return (<Grid item xs={6} style={{overflowX: "scroll"}}>

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