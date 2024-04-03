import {useEffect, useState} from "react";
import {TextareaAutosize, ThemeProvider, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Chip from '@mui/material/Chip';
//import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, push} from "firebase/database";
import { v4 as uuidv4 } from 'uuid';


function NewPost(props) {
    const {theme} = props;
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [currentTag, setCurrentTag] = useState('');
    const [description, setDescription] = useState('');
    const [articleContent, setArticleContent] = useState('');

    const styles = {
        container: {
            padding: theme.spacing(8, 0),
        },
        summary: {
            maxWidth: 600,
            margin: 'auto',
            textAlign: 'center',
            marginBottom: theme.spacing(4),
        },
        member: {
            margin: theme.spacing(2),
        },
        name: {
            marginTop: theme.spacing(1),
            fontWeight: 'bold',
        },
        position: {
            color: theme.palette.text.secondary,
            marginTop: theme.spacing(0.5),
        },
        avatar: {
            width: 200,
            height: 200,
        },
    };

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


    function handleNewTag(e) {
        if (e.keyCode === 13) {
            setTags([...tags, e.target.value]);
            setCurrentTag('');
        }
    }

    function handleNewPost(e){
        e.preventDefault();
        if(!author || !title || !tags || !description || !articleContent){
            alert("Please fill out all fields");
            return;
        }
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth(); // Note: Months are zero-indexed
        const day = today.getDate();
        const currentDate = new Date(year, month, day);
        const newPost = {
            id: uuidv4(),
            datePosted: currentDate.toISOString().substring(0, 10),
            author: author,
            title: title,
            tags: tags,
            description: description,
            articleContent: articleContent
        }

        const posts = ref(db, 'Posts');
        const newPostRef = push(posts);
        set(newPostRef, newPost).then(
            alert("Post submitted successfully")
        );
        //clear fields
        setAuthor('');
        setTitle('');
        setTags([]);
        setCurrentTag('');
        setDescription('');
        setArticleContent('');
    }


    useEffect(() => {
        alert("This is for admins only")
    }, []);
  return (
      <ThemeProvider theme={theme}>
          <section style={styles.container}>
              <Typography variant="h3" gutterBottom sx={{fontWeight: 800}} color="header.secondary" align="center">
                  New Blog Post
              </Typography>
              <Grid container justifyContent="center">
                  {/* Members */}
                  <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid item xs={12} sm={6}> {/* Change xs={6} to xs={12} sm={6} */}
                          <TextField
                              fullWidth
                              id="author"
                              label="Author"
                              variant="outlined"
                              defaultValue=""
                              onChange={(e) => setAuthor(e.target.value)}
                          />
                      </Grid>
                      <Grid item xs={12} sm={6}> {/* Change xs={12} to xs={12} sm={6} */}
                          <TextField
                              fullWidth
                              id="title"
                              label="Title"
                              variant="outlined"
                              defaultValue=""
                              onChange={(e) => setTitle(e.target.value)}
                          />
                      </Grid>
                      {/* Remaining fields */}
                      <Grid item xs={12}>
                          <TextField
                              fullWidth
                              id="tags"
                              label="Tags | Press Enter to add a new tag"
                              variant="outlined"
                              defaultValue=""
                              onKeyDown={(e) => handleNewTag(e)}
                              onChange={(e) => setCurrentTag(e.target.value)}
                          />
                      </Grid>
                      {tags.map((tag, index) => (
                          <Grid item key={index}>
                              <Chip label={tag} onDelete={() => setTags(tags.filter((_, i) => i !== index))} />
                          </Grid>
                      ))}
                      <Grid item xs={12}>
                          <TextField
                              fullWidth
                              id="description"
                              label="Description"
                              variant="outlined"
                              defaultValue=""
                              onChange={(e) => setDescription(e.target.value)}
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <TextareaAutosize
                              id="articleContent"
                              rowsMin={3}
                              placeholder="Article Content"
                              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                              onChange={(e) => setArticleContent(e.target.value)}
                          />
                      </Grid>
                  </Grid>
                  <Button sx={{ m: 0, fontWeight: 800, width: '100%', height: '100%', textTransform: 'lowercase' }} variant="contained" onClick={(e) => handleNewPost(e)}>Submit Post</Button>
              </Grid>

          </section>



      </ThemeProvider>
  );
}

export default NewPost;