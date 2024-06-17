import {useEffect, useState} from "react";
import {TextareaAutosize, ThemeProvider, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Chip from '@mui/material/Chip';
//import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from "@mui/material/Button";
import { collection, addDoc } from "firebase/firestore";
import {db} from "./Home";

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

    function handleNewTag(e) {
        if (e.keyCode === 13) {
            setTags([...tags, e.target.value]);
            setCurrentTag('');
        }
    }

    async function handleNewPost(e){
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
            datePosted: currentDate.toISOString().substring(0, 10),
            author: author,
            title: title,
            tags: tags,
            description: description,
            articleContent: articleContent
        }

        try {
            const docRef = await addDoc(collection(db, "articles"), newPost);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        //clear fields
        setAuthor('');
        setTitle('');
        setTags([]);
        setCurrentTag('');
        setDescription('');
        setArticleContent('');
    }

    function checkLoggedIn() {
        if (localStorage.getItem("loggedIn") === null) {
            window.location.href = "/";
        }
    }

    useEffect(() => {
        checkLoggedIn();
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
                              value={currentTag}
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