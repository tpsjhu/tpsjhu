import {useEffect, useState} from "react";
import {InputLabel, ThemeProvider, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Request from "./API/Request";
import {useNavigate} from "react-router-dom";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import GenericModal from "./components/GenericModal";
import ComponentLoader from "./common/Loader/ComponentLoader";


function NewEvent(props) {
    const {theme} = props;
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [link, setLink] = useState('');
    const [type, setType] = useState(null);
    const [image, setImage] = useState('');
    const [submitModal, setSubmitModal] = useState(false)
    const [submitLoading,setSubmitLoading] = useState(false)
    const nav = useNavigate()

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

    async function handleNewEvent(e){
        setSubmitLoading(true);
        e.preventDefault();
        if(!title || !date || !location || !type){
            alert("Please fill out all fields");
            return;
        }
        const newPost = {
            date: date,
            location: location,
            title: title,
            type: type,
            link: link,
            image: image,
        }

        await Req.postBody("events", newPost);
        setSubmitModal(true)
        setSubmitLoading(false)
        //clear fields
        setTitle('');
        setDate('');
        setLocation('');
        setLink('');
        setType('');
        setImage(null);
    }

    const handleChange = (event) => {
        setType(event.target.value);
    };




    return (
        <ThemeProvider theme={theme}>
            {submitModal && <GenericModal theme={theme} open={submitModal} setOpen={setSubmitModal} title={"You added a new Event!"} description={"Now Check under the home page for your new event!"}/>}
            {submitLoading ? <ComponentLoader/> :
                <section style={styles.container}>
                <Typography variant="h3" gutterBottom sx={{fontWeight: 800}} color="header.secondary" align="center">
                New Event
                </Typography>
                <Grid container justifyContent="center">
            {/* Members */}
                <Grid container spacing={2} sx={{mb: 2}}>
                <Grid item xs={12} sm={6}> {/* Change xs={6} to xs={12} sm={6} */}
                <TextField
                fullWidth
                id="title"
                label="Title"
                variant="outlined"
                defaultValue=""
                onChange={(e) => setTitle(e.target.value)}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <p>Date of Event</p>
                <input type="date" id="date" name="date" onChange={(e) => setDate(e.target.value)}/>
                </Grid>
            {/* Remaining fields */}
                <Grid item xs={12}>
                <TextField
                fullWidth
                id="location"
                label="Location"
                variant="outlined"
                defaultValue=""
                onChange={(e) => setLocation(e.target.value)}
                />
                </Grid>
                <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label" >Type</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Type"
                onChange={handleChange}
                >
                <MenuItem value={'Seminar'}>Seminar</MenuItem>
                <MenuItem value={'Panel'}>Panel</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
                </Select>
                </Grid>
                </Grid>
                <Button sx={{m: 0, fontWeight: 800, width: '100%', height: '100%', textTransform: 'lowercase'}} variant="contained" onClick={(e) => handleNewEvent(e)}>Submit Event</Button>
                </Grid>

                </section>
            }

        </ThemeProvider>
    );
}

export default NewEvent;