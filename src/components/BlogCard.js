import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Request from "../API/Request";

import { ThemeProvider } from '@mui/material/styles';
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";

function BlogCard({theme,blog}) {
    const [image,setImage] = useState(null);
    const Req = new Request();
    async function getImage(){
        console.log(blog.uuid)
        Req.getFile(blog.uuid, "image").then((url) => {
            console.log(url)
            setImage(url)
        })
    }

    useEffect(()=>{
        if(blog.image ===true && blog.uuid !== ""){
            getImage();
        }
    },[blog])

    return (
        <ThemeProvider theme={theme}>
        <Box>
        <Card elevation={0} sx={{ minWidth: 275, mb: 3}}
        >
        <CardContent>
            {image ?
                <Grid container spacing={4} sx={{mt: 1}}>
                    {image && <Grid item xs={4}>
                        <img src={image} width={150} height={150}/>
                    </Grid>}
                    <Grid item xs={4}>
                        <a href={'/blog/'+ blog.uuid}>
                            <Typography variant="h5" sx={{fontWeight: 800, textAlign: 'left' }} component="div" color="header.primary">
                                {blog.title}
                            </Typography>
                        </a>
                        <Typography variant="subtitle1" sx={{ mb: 1, textAlign: 'left' }} color="text.secondary">
                            {blog.datePosted + " " +blog.author}
                        </Typography>
                        <Typography variant="body1" sx={{textAlign: 'left'}}>
                            {blog.description}
                        </Typography>
                    </Grid>
                </Grid> :
            <>
                <a href={'/blog/'+ blog.uuid}>
                    <Typography variant="h5" sx={{fontWeight: 800, textAlign: 'left' }} component="div" color="header.primary">
                        {blog.title}
                    </Typography>
                </a>
                <Typography variant="subtitle1" sx={{ mb: 1, textAlign: 'left' }} color="text.secondary">
                    {blog.datePosted + " " +blog.author}
                </Typography>
                <Typography variant="body1" sx={{textAlign: 'left'}}>
                    {blog.description}
                </Typography>
            </>
            }

        </CardContent>
      </Card>
      </Box>
      </ThemeProvider>
      );
}

export default BlogCard;