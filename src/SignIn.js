

import {useEffect, useState} from "react";
import {TextareaAutosize, ThemeProvider, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Chip from '@mui/material/Chip';
//import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from "@mui/material/Button";

import {  signInWithEmailAndPassword   } from 'firebase/auth';
import {auth} from "./Home";


function SignIn(props) {
    const {theme} = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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




    function handleLogIn(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                localStorage.setItem("loggedIn", "true");
                window.location.href = "/";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
}


  return (
      <ThemeProvider theme={theme}>
          <section style={styles.container}>
              <Typography variant="h3" gutterBottom sx={{fontWeight: 800}} color="header.secondary" align="center">
                  Sign In
              </Typography>
              <Grid container justifyContent="center">
                  {/* Members */}
                  <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={12} sm={6} md={4} sx={styles.member}>
                            <TextField
                                id="outlined-basic"
                                label="Username"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {/*add password as well*/}
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                  </Grid>
                  <Button sx={{ m: 0, fontWeight: 800, width: '100%', height: '100%', textTransform: 'lowercase' }} variant="contained" onClick={(e) => handleLogIn(e)}>Login</Button>
              </Grid>

          </section>



      </ThemeProvider>
  );
}

export default SignIn;