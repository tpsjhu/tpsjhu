import { Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

function BlogPage(props) {

    return (
        <div>

        </div>

    );
}

export default BlogPage;





function BlogPost(props) {

  const post = {
    title: 'Blog Post Title',
    author: 'John Doe',
    date: '2022-02-24',
    image1: 'https://source.unsplash.com/random/800x400',
    image2: 'https://source.unsplash.com/random/800x400',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae nunc arcu. Proin placerat vel urna eget molestie. Mauris auctor massa sit amet eros vestibulum, ut interdum eros lobortis. Nulla euismod posuere ante, vel rutrum ipsum eleifend nec. Donec vehicula metus vel velit eleifend, in luctus elit rhoncus. Sed euismod aliquam lorem ac suscipit. Morbi eu tortor vitae nibh accumsan dictum sit amet eget velit.',
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        By {post.author} on {post.date}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              className={classes.media}
              image={post.image1}
              title="Image 1"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              className={classes.media}
              image={post.image2}
              title="Image 2"
            />
          </Card>
        </Grid>
      </Grid>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          {post.content}
        </Typography>
      </CardContent>
    </div>
  );
}

export default BlogPost;
