import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ThemeProvider } from '@mui/material/styles';

function BlogCard(props) {
    const { theme, blog } = props;

    return (
        <ThemeProvider theme={theme}>
        <Box>
        <Card elevation={0} sx={{ minWidth: 275, mb: 3}}>
        <CardContent>
          <Typography variant="h3" sx={{fontWeight: 800, textAlign: 'left' }}component="div" color="header.primary">
            {blog.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 1, textAlign: 'left' }} color="text.secondary">
            {blog.date + " " +blog.author}
          </Typography>
          <Typography variant="body1" sx={{textAlign: 'left'}}>
            {blog.snippet}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" sx={{ ml: 2, fontWeight: 800, textTransform: 'capitalize'}} variant="contained">Read More</Button>
        </CardActions>
      </Card>
      </Box>
      </ThemeProvider>
      );
}

export default BlogCard;