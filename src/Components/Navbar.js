import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/logo.png'
import { ShoppingCart } from '@material-ui/icons';
import { Badge, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    marginBottom: "9rem",
  },
  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1.5,
  },
   link: {
    flexGrow: 0.5,
    marginRight: "10px",
  },
  Button: {
    marginLeft: theme.spacing(2),
  },
  Image: {
    marginRight:"10px",
    height: "1rem",
  },
  }));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} className = {classes.image} alt='logo'/>
          </IconButton>
          <div className = {classes.grow} />
          <Typography variant="h6" className={classes.title} color='textPrimary' component="p">
              Hola invitado
          </Typography>
          <div className={classes.Button}>
            
            <Button variant='outlined'>
              <strong>Log In</strong>
            </Button>
            <IconButton aria-label='show cart items' color='inherit'>
              <Badge badgeContent = {2} color= "secondary" > 
                <ShoppingCart fontSize = 'large' color= 'primary'/>
              </Badge>
            </IconButton>   
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
