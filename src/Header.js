import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from '@mui/material/styles';

import logo from './logo.png'; // Tell webpack this JS file uses this image


const pages = ['Home', 'Ancestry Tree', 'Archive', 'Events', 'About Us'];

function ResponsiveAppBar({theme}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [curPage, setCurPage] = React.useState(pages[0]);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {

    setAnchorElNav(null);
  };


  return (
    <ThemeProvider theme={theme}>

<AppBar component="nav" position="static" style={{background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
        <Tooltip title="Home">
            <Button href="/" >
              <img src={logo} alt="TPS logo" width={"140px"}/>
              </Button>
            </Tooltip>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((item) => (
              <Button key={item} sx={{ ml: 2, fontWeight: 800, textTransform: 'capitalize'}}>
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