import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';

import logo from './logo.png'; // Tell webpack this JS file uses this image


const pages = ['Home', 'Ancestry Tree', 'Archive', 'About Us'];
const links = ['/', '/tree', '/archive',  '/aboutus'];


function ResponsiveAppBar({theme}) {
  const nav = useNavigate();

  return (
    <ThemeProvider theme={theme}>
    <AppBar component="nav" position="relative" style={{background: 'white', boxShadow: 'none'}} sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <Tooltip title="Home">
            <Button href="/" >
              <img src={logo} alt="TPS logo" width={"140px"}/>
              </Button>
            </Tooltip>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            {pages.map((item, index) => (
              <Button key={item} 
              size={"large"} 
              onClick={()=> nav(links[index])}sx={{ ml: 2, fontWeight: 800, textTransform: 'capitalize'}}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;