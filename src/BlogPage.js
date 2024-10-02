import React, {useState,useEffect, useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider } from '@mui/material/styles';
import Request from "./API/Request";
import ComponentLoader from "./common/Loader/ComponentLoader";
import Markdown from 'react-markdown'
import {StateContext} from "./Provider/StateProvider";
import Button from "@mui/material/Button";
function BlogPost(props) {
  const uuid = useParams();
  const {theme} = props;
  const [loading, setLoading] = useState(false)
  const [blog, setBlog] = useState(null);
  const [content, setContent] = useState(null);
  const [image, setImage] = useState(null);
  const Req = new Request();
  const {loggedIn} = useContext(StateContext);
  const nav = useNavigate()
  async function getBlog() {
    setLoading(true)
    Req.getOne('articles', uuid.uuid).then((values) => {
        if(values["image"] === true) {
            Req.getFile(uuid.uuid, "image").then((url) => {
            setImage(url)
            })
        }
        Req.getFile(uuid.uuid, "article").then((url) => {
            if(values.articleType === "md") {
                fetch(url).then((response) => response.text()).then((text) => {
                    console.log(text)
                    setContent(text)
                })
            } else {
                console.log(url)
                setContent(url)
            }

        })
        if (values != null) {
            setBlog(values)
            setLoading(false)
        }
        else {
            console.log("No data available");
        }
    })
  }

  useEffect(() => {
    getBlog();
  }, []);



  return (
    <ThemeProvider theme={theme}>
      {loading ? <ComponentLoader/> :
          ( blog &&
        <div style={{padding: '16px'}}>

          <img style={{
              width: '100%',
              height: 'auto',
            }}
               src={image} alt=" " />


          <Typography variant="h3" gutterBottom sx={{fontWeight: 800}} color="header.primary">
            {blog.title}
          </Typography>

          <Typography variant="subtitle1" gutterBottom sx={{mb: 2}}>
            {blog.datePosted} | By {blog.author}
          </Typography>
            <Typography variant="body1" gutterBottom sx={{mb: 2}}>
                {blog.description}
            </Typography>
            {loggedIn &&
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        nav('/newPost/'+ blog.uuid)
                    }}
                >Edit Post</Button>
            }
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
              {!content && <ComponentLoader/>}
              {content && blog.articleType === "md" &&
                <Typography  variant="body1" gutterBottom align={"left"} >
                    <Markdown>
                        {content}
                    </Markdown>
                </Typography>
              }
              {content && blog.articleType === "pdf" &&
                  <iframe src={content} width="100%" height="800px"/>
              }
          </CardContent>

        </div>
          )
      }
    </ThemeProvider>
  );
}

export default BlogPost;
