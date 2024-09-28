import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

import { ThemeProvider } from '@mui/material/styles';
import assets from '../assets/blogs.json';


function Filters({theme, showCards, setShowCards, tags, typeFilters, setTypeFilters, topicFilters, setTopicFilters}) {

  const allCards = assets["Blog posts"].concat(assets["Speakers"], assets["Discussions"], assets["Panels"]);
  // useEffect(() => {
  //     function filterBlogs ()  {
  //         let filtered = [];
  //         // filter by type
  //         if (Object.values(typeFilters).some(val => val === true)) {
  //             console.log("type filters found to be true ")
  //             for (const type in typeFilters) {
  //                 console.log("type filters: ", typeFilters);
  //                 console.log("type : ", type);
  //                 if (typeFilters[type]) {
  //                     console.log("assets[type]", assets[type])
  //                     filtered = filtered.concat(assets[type]);
  //                 }
  //                 console.log("filtered by ", type, "got", filtered);
  //             }
  //         } else {
  //             filtered = allCards;
  //         }
  //
  //
  //         // filter by topic
  //         if (Object.values(topicFilters).some(val => val === true)) {
  //             console.log("type filters found to be true ")
  //             for (const tag in topicFilters) {
  //                 if (topicFilters[tag]) {
  //                     filtered = filtered.filter(blog => (blog.tags));
  //                 }
  //             }
  //         }
  //
  //         if (filtered.length === 0) {
  //             setShowCards(allCards);
  //         } else {
  //             setShowCards(filtered);
  //         }
  //     }
  //   filterBlogs();
  // }, [typeFilters, topicFilters, allCards, setShowCards]);



  return (
      <ThemeProvider theme={theme}>
        <Box sx={{ overflow: 'auto' }}>
        <Box sx={{ overflow: 'auto' }}>
        <Typography variant="h4" sx={{ my: 2, fontWeight: 800, textAlign: 'left' }} color="header.primary">Filters</Typography>
        {/* <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'left' }} color="header.primary">Date</Typography>        
        <List>
        <FormGroup>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="None"
          name="radio-buttons-group"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        >
          {['None', 'Last month', 'Last 6 months', 'Last year'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <FormControlLabel control={<Radio />} value={text} label={text} />
            </ListItem>
          ))}
          </RadioGroup>
          </FormGroup>
        </List> */}
        </Box>
        <Divider />
        <Typography variant="h6" sx={{ mt: 1, fontWeight: 600, textAlign: 'left' }} color="header.primary">Type</Typography>
        <List>
        <FormGroup>
            {Object.keys(typeFilters).map((text, index) => (
              <ListItem key={text} disablePadding>
                <FormControlLabel control={
                <Checkbox checked={typeFilters[text]} 
                name={text}
                onChange={ (e) => {setTypeFilters({
                  ...typeFilters,
                  [e.target.name]: e.target.checked,
                });
              }}
                />} label={text} />
              </ListItem>
            ))}
        </FormGroup>
        </List>
        <Divider />
        <Typography variant="h6" sx={{ mt: 1, fontWeight: 600, textAlign: 'left' }} color="header.primary">Topic</Typography>
        <List>
        <FormGroup>
            {Object.keys(topicFilters).map((text, index) => (
              <ListItem key={text} disablePadding>
                <FormControlLabel control={
                <Checkbox checked={topicFilters[text]} 
                name={text}
                onChange={ (e) => {setTopicFilters({
                  ...topicFilters,
                  [e.target.name]: e.target.checked,
                });
              }}
                />} label={text} />
              </ListItem>
            ))}
        </FormGroup>
        </List>
        </Box>
      </ThemeProvider>
    )
}

export default Filters;