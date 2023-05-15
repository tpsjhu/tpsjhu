import React from 'react';
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider } from '@mui/material/styles';
import assets from './assets/blogs.json';

function Discussion(props) {
  const {id} = useParams();
  const {theme} = props;
  const discussionTitle = id.replaceAll("-", " ");
  const discussion = assets["Discussions"].find(o => o.title === discussionTitle);

  return (
    <ThemeProvider theme={theme}>
    <div style={{padding: '16px'}}>
      <Typography variant="h3" gutterBottom sx={{fontWeight: 800}} color="header.primary">
        {discussion.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{mb:2}}>
        {discussion.date} | By {discussion.author} 
      </Typography>
      <CardContent>
        <Typography variant="body1" gutterBottom sx={{textAlign: 'justify'}} color="text.secondary">
          {discussion.text}
        </Typography>
      </CardContent>
    </div>
    </ThemeProvider>
  );
}

export default Discussion;
