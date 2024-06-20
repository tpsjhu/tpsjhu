import CircularProgress from '@mui/material/CircularProgress';
import Grid from "@mui/material/Grid";
const ComponentLoader = () => {
    return (
        <Grid  display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100vh">
            <Grid item>
                <CircularProgress />
            </Grid>
        </Grid>
    );
};

export default ComponentLoader;