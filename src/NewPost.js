import {useContext, useEffect, useState} from "react";
import {FormGroup, InputLabel, TextareaAutosize, ThemeProvider, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Chip from '@mui/material/Chip';
import Button from "@mui/material/Button";
import Request from "./API/Request";
import {StateContext} from "./Provider/StateProvider";
import {useNavigate, useParams} from "react-router-dom";
import ComponentLoader from "./common/Loader/ComponentLoader";
import GenericModal from "./components/GenericModal";
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Markdown from 'react-markdown'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function NewPost(props) {
    const {theme} = props;
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [description, setDescription] = useState('');
    const [articleContent, setArticleContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [modalOpen,setModalOpen] = useState(false)
    const [image, setImage] = useState(null);
    const [articleFile, setArticleFile] = useState(null);
    const [articleType, setArticleType] = useState('');
    const [viewMarkdown, setViewMarkdown] = useState(false);
    const [currentFileType, setCurrentFileType] = useState('jpg');
    const {pathId} = useParams();

    useEffect(() => {
        if (pathId !== undefined) {
            Req.getOne('articles', pathId).then((values) => {
                console.log(values);
                setAuthor(values.author);
                setTitle(values.title);
                setTags(values.tags);
                setDescription(values.description);
                setArticleType(values.type);
                setCurrentFileType(values.imageType);
                if (values.image === true) {
                    Req.getFile(pathId, 'image').then((url) => {
                        setImage(url);
                    });
                }
                if (values.articleType === 'md') {
                    Req.getFile(pathId, 'article').then((url) => {
                        fetch(url).then((response) => response.text()).then((text) => {
                            setArticleContent(text);
                        });
                    });
                } else {
                    Req.getFile(pathId, 'article').then((url) => {
                        setArticleFile(url);
                    });
                }
            });
            }
    }, []);

    const nav = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            nav('/signIn')
        }
    }, []);

    const Req = new Request();

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

    function handleNewTag(tag, e) {
        if (e.target.checked) {
            setTags([...tags, tag]);
        } else {
            setTags(tags.filter((item) => item !== tag));
        }
    }

    async function handleNewPost(e){
        e.preventDefault();
        if(!author || !title || !description || articleType === '' || (articleContent === '' && !articleFile)){
            if (!author){
                alert("Please fill out the author field");
                return;
            }
            if(!title){
                alert("Please fill out the title field");
                return;
            }
            if(!description){
                alert("Please fill out the description field");
                return;
            }
            if (articleType === ''){
                alert("Please select an article type");
                return;
            }
            if(!articleContent && !articleFile){
                alert("Please add an article");
                return;
            }
        }
        setLoading(true)
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
            uuid: "",
            image: false,
            imageType: "",
        }
        if(image && typeof image !== 'string'){
            newPost['image'] = true
            newPost['imageType'] = currentFileType
        }
        if (pathId !== undefined) {
            newPost['uuid'] = pathId
        }
        if (articleContent !== '' && typeof articleContent !== 'string') {
            newPost['articleType'] = 'md';
        } else if(articleFile && typeof articleFile !== 'string'){
            newPost['articleType'] = 'pdf';
        }
        let uuid = '';
        if (pathId !== undefined) {
            uuid = pathId;
            await Req.putBody('articles', uuid, newPost);
        } else {
            uuid = await Req.postBody('articles', newPost);
        }
        if (image){
            await Req.uploadFile(image, uuid, 'image');
        }
        if(articleFile){
            await Req.uploadFile(articleFile, uuid, 'article');
        } else {
            // upload markdown as file
            const markdownFile = new Blob([articleContent], {type: 'text/markdown'});
            await Req.uploadFile(markdownFile, uuid, 'article');
        }


        setModalOpen(true)
        setLoading(false)
        //clear fields
        setAuthor('');
        setTitle('');
        setTags([]);
        setDescription('');
        setArticleContent('');
    }

    const handleChange = (event) => {
        setCurrentFileType(event.target.value);
        setImage(null);
    };

    function handleFileChange(e){
        const file = e.target.files[0]

        if((file.type !== "image/jpg" && currentFileType === "jpg") || (file.type !== "application/pdf" && currentFileType === "pdf")){
            alert("Invalid file type")
            return;
        }
        setImage(file)
    }

    function handleArticleFileChange(e){
        const file = e.target.files[0]

        if(file.type !== "application/pdf"){
            alert("Invalid file type")
            return;
        }
        setArticleFile(file)
    }


    return (
      <ThemeProvider theme={theme}>
          {modalOpen && <GenericModal open={modalOpen} setOpen={setModalOpen}
                                      theme={theme}
                                      description={"Congrats on submitting your post! Check the main page to see it up"}
                                      title={"You created a new post!"}/>}
          {loading ? <ComponentLoader/> :
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
                              value={author}
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
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                          />
                      </Grid>
                      {/* Remaining fields */}
                      <Grid item xs={12} >
                          <Typography variant="body1" color="textSecondary">
                              Add tags
                          </Typography>
                          <FormGroup row  >
                              <FormControlLabel control={<Checkbox checked={tags.some(ele => ele === "LLM")}  onChange={(e) => handleNewTag("LLM",e)}/>} label="LLM"  />
                              <FormControlLabel control={<Checkbox checked={tags.some(ele => ele === "Law")} onChange={(e) => handleNewTag("Law",e)}/>} label="Law"  />
                              <FormControlLabel control={<Checkbox checked={tags.some(ele => ele === "Energy")} onChange={(e) => handleNewTag("Energy",e)}/>} label="Energy"  />
                              <FormControlLabel control={<Checkbox checked={tags.some(ele => ele === "AI Safety")} onChange={(e) => handleNewTag("AI Safety",e)}/>} label="AI Safety"  />
                              <FormControlLabel control={<Checkbox checked={tags.some(ele => ele === "Policy")} onChange={(e) => handleNewTag("Policy",e)}/>} label="Policy"  />
                          </FormGroup>
                      </Grid>
                      {tags.map((tag, index) => (
                          <Grid item key={index}>
                              <Chip label={tag} onDelete={() => setTags(tags.filter((_, i) => i !== index))} />
                          </Grid>
                      ))}
                      <Grid item xs={12} >
                          <Typography variant="body1" color="textSecondary">
                              What type of Blog is this?
                          </Typography>
                          <RadioGroup
                              name="typeGroup"
                              row
                          >
                              <FormControlLabel value="Event" control={<Radio checked={articleType === "Event"} onChange={(e) => setArticleType(e.target.value)}/>} label="Event" />
                              <FormControlLabel value="Technical Paper" control={<Radio checked={articleType === "Technical Paper"} onChange={(e) => setArticleType(e.target.value)}/>} label="Technical Paper" />
                              <FormControlLabel value="Policy Paper" control={<Radio checked={articleType === "Policy Paper"} onChange={(e) => setArticleType(e.target.value)}/>} label="Policy Paper" />
                          </RadioGroup>

                      </Grid>
                      <Grid item xs={12}>
                          <TextField
                              fullWidth
                              id="description"
                              label="Description"
                              variant="outlined"
                              defaultValue=""
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                          />
                      </Grid>

                      <Grid item xs={12}>
                          <Typography variant="body1" color="textSecondary">
                              Add Image
                          </Typography>
                          <Grid container columns={{md:19}} spacing={{ xs: 2, md: 2 }}  justifyContent="center">
                              <Grid item md={8}>
                          <FormControl>
                              <InputLabel id="demo-simple-select-label">File Type</InputLabel>
                              <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={currentFileType}
                                  onChange={handleChange}
                              >
                                  <MenuItem value={"jpg"}>JPG</MenuItem>
                                  <MenuItem value={"png"}>PNG</MenuItem>
                              </Select>
                          </FormControl>

                              </Grid>
                              <Grid item md={8}>
                          <TextField
                              name="upload-photo"
                              type="file"
                              onChange={(e) => handleFileChange(e)}
                          />
                                  <IconButton onClick={(e) => {setImage(null)}}>
                                      <DeleteIcon/>
                                  </IconButton>
                                  <Grid item xs={12}>
                                      {image && (currentFileType === "jpg" || currentFileType === "png") &&
                                          <img src={typeof image == "string" ? image : URL.createObjectURL(image)} width={400} height={400}/> }
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Grid>
                      <Grid item xs={12}>
                      <Grid container columns={{md:19}} spacing={{ xs: 2, md: 6 }}  justifyContent="center">
                          <Grid item md={8}>
                              { articleFile === null &&

                                  <TextareaAutosize
                                      id="articleContent"
                                      minRows={10}
                                      placeholder="Article Content"
                                      style={{
                                          width: '100%',
                                          padding: '10px',
                                          borderRadius: '4px',
                                          border: '1px solid #ccc'
                                      }}
                                      onChange={(e) => setArticleContent(e.target.value)}
                                  />
                              }
                              <Typography variant="body1" color="textSecondary">
                                  Or Upload File
                              </Typography>
                              <TextField
                                  name="upload-photo"
                                  type="file"

                                  onChange={(e) => handleArticleFileChange(e)}
                              />

                              {
                                  articleFile !== null &&
                                  <IconButton onClick={(e) => {setArticleFile(null)}}>
                                      <DeleteIcon/>
                                  </IconButton>
                              }

                          </Grid>
                             <Grid item md={8}>
                                 {articleFile === null ?
                                     <div>
                                         <Typography variant="body1" color="textSecondary">
                                             View Markdown
                                         </Typography>
                                         <IconButton onClick={(e) => setViewMarkdown(!viewMarkdown)}>
                                             <RemoveRedEyeIcon/>
                                         </IconButton>
                                         {
                                             viewMarkdown &&  <Typography align={"left"}><Markdown>{articleContent}</Markdown></Typography>
                                         }
                                     </div> :
                                     <div>
                                         <iframe src={typeof articleFile === "string" ? articleFile : URL.createObjectURL(articleFile)} width={400} height={400}/>

                                     </div>
                                 }


                             </Grid>

                      </Grid>
                  </Grid>


                  </Grid>
                  <Button sx={{ m: 0, fontWeight: 800, width: '100%', height: '100%', textTransform: 'lowercase' }} variant="contained" onClick={(e) => handleNewPost(e)}>Submit Post</Button>
              </Grid>

          </section>
          }


      </ThemeProvider>
  );
}

export default NewPost;