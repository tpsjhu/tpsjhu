import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider } from '@mui/material/styles';
import Request from "./API/Request";
import ComponentLoader from "./common/Loader/ComponentLoader";
function BlogPost(props) {
  const uuid = useParams();
  const {theme} = props;
  const [loading, setLoading] = useState(false)
  const [blog, setBlog] = useState(null);

  const Req = new Request();

  async function getBlogs() {
    setLoading(true)
    const values = await Req.getOne('articles', uuid.uuid)
    if (values != null) {
      setBlog(values)
      setLoading(false)
    }
    else {
      console.log("No data available");
    }
  }

  useEffect(() => {
    getBlogs();
  }, []);



  return (
    <ThemeProvider theme={theme}>
      {loading ? <ComponentLoader/> :
          ( blog &&
        <div style={{padding: '16px'}}>
          <Typography variant="h3" gutterBottom sx={{fontWeight: 800}} color="header.primary">
            {blog.title}
          </Typography>

          <Typography variant="subtitle1" gutterBottom sx={{mb: 2}}>
            {blog.datePosted} | By {blog.author}
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6} md={3}>

              <Card>
                {/*<CardMedia*/}
                {/*    style={{height: '0', paddingTop: '56.25%'}}*/}
                {/*    image={blog.image1}*/}
                {/*    title="Image 1"*/}
                {/*/>*/}
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card>
                {/*<CardMedia*/}
                {/*    style={{height: '0', paddingTop: '56.25%'}}*/}
                {/*    image={blog.image2}*/}
                {/*    title="Image 2"*/}
                {/*/>*/}
              </Card>
            </Grid>
          </Grid>
          <CardContent>
                <Typography  variant="body1" gutterBottom sx={{textAlign: 'justify'}} color="text.secondary">
                  {blog.articleContent}
                </Typography>
          </CardContent>

        </div>
          )
      }
    </ThemeProvider>
  );
}

export default BlogPost;
