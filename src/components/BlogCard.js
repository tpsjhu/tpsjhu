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
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Featured Blog
          </Typography>
          <Typography variant="h5" component="div">
            {blog.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {blog.date, " ", blog.author}
          </Typography>
          <Typography variant="body2">
            {blog.snippet}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">Read More</Button>
        </CardActions>
      </Card>
      </Box>
      </ThemeProvider>
      );
}

export default BlogCard;