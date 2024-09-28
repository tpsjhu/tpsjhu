import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';

import logo from './logo.png';
import {StateContext} from "./Provider/StateProvider";
import {useContext, useEffect, useState} from "react"; // Tell webpack this JS file uses this image

const stateMachine = {
    notLoggedIn: {
        pages: ['Home', 'Archive',  'About Us'],
        links: ['/', '/archive', '/aboutus', '/signin']
    },
    loggedIn: {
        pages: ['Home', 'Archive', 'About Us', 'Admin Dashboard', 'Sign out'],
        links: ['/', '/archive', '/aboutus', 'dashboard', '/signin']
    }
}




function ResponsiveAppBar({theme}) {
  const nav = useNavigate();
    const {loggedIn, setLoggedIn} = useContext(StateContext);

    useEffect(() => {
       console.log('loggedIn', loggedIn)
    }, [loggedIn]);

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
              {loggedIn && stateMachine.loggedIn.pages.map((item, index) => (
                  <Button key={item}
                          size={"large"}
                          onClick={()=> {
                              if (stateMachine.loggedIn.links[index] === '/signin'){
                                    localStorage.removeItem('token')
                                    setLoggedIn(null)
                              }
                              nav(stateMachine.loggedIn.links[index])
                          }}sx={{ ml: 2, fontWeight: 800, textTransform: 'capitalize'}}>
                      {item}
                  </Button>
              ))
              }

              {!loggedIn && stateMachine.notLoggedIn.pages.map((item, index) => (
                  <Button key={item}
                          size={"large"}
                          onClick={()=> nav(stateMachine.notLoggedIn.links[index])}sx={{ ml: 2, fontWeight: 800, textTransform: 'capitalize'}}>
                      {item}
                  </Button>
              ))
              }
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;