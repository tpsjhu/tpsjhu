import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ThemeProvider } from '@mui/material/styles';
import {useNavigate} from "react-router-dom";
import default_blob_post_picture from "../images/default_blob_post_picture.png";

function BlogCard(props) {
    const { theme, blog } = props;
    const navigate = useNavigate();
    function handleNavigate(){
        navigate('/blog/'+ blog.uuid)
    }

    return (
        <ThemeProvider theme={theme}>
        <Box>
        <Card elevation={0} sx={{ minWidth: 275, mb: 3}}>
        <CardContent>

            <img src={default_blob_post_picture} alt={blog.title} style={{width: '100%', height: 'auto'}}/>

            {/*<a href={'/blog/'+ blog.uuid}>*/}
                <Typography variant="h3" sx={{fontWeight: 800, textAlign: 'left' }} component="div" color="header.primary">
                    {blog.title}
                </Typography>
            {/*</a>*/}
          <Typography variant="subtitle1" sx={{ mb: 1, textAlign: 'left' }} color="text.secondary">
            {blog.datePosted + " " +blog.author}
          </Typography>
          <Typography variant="body1" sx={{textAlign: 'left'}}>
            {blog.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" sx={{ ml: 2, fontWeight: 800, textTransform: 'capitalize'}} variant="contained" onClick={handleNavigate}>Read More</Button>
        </CardActions>
      </Card>
      </Box>
      </ThemeProvider>
      );
}

export default BlogCard;