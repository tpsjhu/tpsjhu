

import {useState, useContext, useEffect} from "react";
import { ThemeProvider, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import {auth} from "./App";
import {StateContext} from "./Provider/StateProvider";
import {useNavigate} from "react-router-dom";
import ComponentLoader from "./common/Loader/ComponentLoader";

function SignIn(props) {
    const {theme} = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const {loggedIn, setLoggedIn} = useContext(StateContext);
    const nav = useNavigate();
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

        useEffect(() => {
            localStorage.removeItem("token");
        }, []);

        useEffect(() => {
            if(localStorage.getItem("token")){
                setLoggedIn(true);
            }
        }, []);

    function handleLogIn(e){
        e.preventDefault();
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential)
                localStorage.setItem("token", userCredential.user.accessToken);
                setLoggedIn(true);
                nav("/dashboard");
                setLoading(false)
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
              {loading ? <ComponentLoader/> :
                  <Grid container justifyContent="center">
                      <Grid item xs={12} sm={6} md={4} sx={styles.member} align="center">
                          <TextField
                              id="outlined-basic"
                              label="Username"
                              variant="outlined"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                          />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} sx={styles.member} align="center">
                          {/*add password as well*/}
                          <TextField
                              id="outlined-basic"
                              label="Password"
                              variant="outlined"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                          />
                      </Grid>
                      <Button sx={{m: 0, fontWeight: 800, width: '70%', height: '100%', textTransform: 'lowercase'}}
                              variant="contained" onClick={(e) => handleLogIn(e)}>Login</Button>
                  </Grid>
              }

          </section>



      </ThemeProvider>
  );
}

export default SignIn;