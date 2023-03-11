import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { ThemeProvider } from '@mui/material/styles';

function BlogCard(props) {
    const { theme, blog } = props;
    const navigate = useNavigate();
    const blogId = blog.title.replaceAll(" ", "-");

    return (
        <ThemeProvider theme={theme}>
        <Box>
        <Card elevation={0} sx={{ minWidth: 275, mb: 3}} 
            onClick={()=> navigate('/blog/'+ blogId)}
        >
        <CardContent>
          <Typography variant="h5" sx={{fontWeight: 800, textAlign: 'left' }}component="div" color="header.primary">
            {blog.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 1, textAlign: 'left' }} color="text.secondary">
            {blog.date + " " +blog.author}
          </Typography>
          <Typography variant="body1" sx={{textAlign: 'left'}}>
            {blog.snippet}
          </Typography>
        </CardContent>
      </Card>
      </Box>
      </ThemeProvider>
      );
}

export default BlogCard;