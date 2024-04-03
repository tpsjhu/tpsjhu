import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { Grid, Typography } from '@mui/material';

// These are related to MUI Paper
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import { ThemeProvider } from '@mui/material/styles';
import assets from './assets/blogs.json';
import {initializeApp} from "firebase/app";
import {get, getDatabase, ref} from "firebase/database";

function BlogPost(props) {
  const uuid = useParams();
  const {theme} = props;
  const [blog, setBlog] = useState(null);
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
  };
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  async function getBlogs() {
    const fourPlaceCarts = ref(db, 'Posts');
    const snapshot = await get(fourPlaceCarts);
    if (snapshot.exists()) {
      Object.entries(snapshot.val()).forEach(([key,value]) => {
        if(value["id"] === uuid.title){

          setBlog(value);
          return;
        }
      });
    }
    else {
      //  console.log("No data available");
    }
  }

  useEffect(() => {
    getBlogs();
  }, []);



  return (
    <ThemeProvider theme={theme}>
      {blog &&
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
      }
    </ThemeProvider>
  );
}

export default BlogPost;
