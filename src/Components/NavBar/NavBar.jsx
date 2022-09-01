import * as React from 'react';
import style from './NavBar.module.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import AdbIcon from '@mui/icons-material/Adb';



const ResponsiveAppBar = () => {
 

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className={style.Container}>
        <Toolbar disableGutters>
          <AdbIcon  />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Importaciones - Snkrs
          </Typography>
        </Toolbar>
        <ListItem className={style.ListItem}  >
                <ListItemAvatar className={style.ListAvatar}>
                  <Avatar alt="Profile Picture"  className={style.Avatar}/>
                </ListItemAvatar>
                <ListItemText />
              </ListItem>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;