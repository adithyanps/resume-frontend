import React from 'react';
import {
  Container,
  Grid,
  Box,
  makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import ProfileSection from './ProfileSection';
import Header from './Header';
import Footer from './Footer';
import backGroundImg from './imgs/background.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(180deg, ${theme.palette.common.white} 0%, ${theme.palette.background.default} 100%)`,
    backgroundImage: `url(${backGroundImg})`
  },
  containerStyle: {
    marginTop: '20px',
    [theme.breakpoints.up('sm')]:{
    marginTop: '60px',
    },
    [theme.breakpoints.up('md')]:{
      marginTop: '80px',
      }
  }
}));


const Layout = (props)=>{
  const {
    children
  } = props;

  const classes = useStyles()

  return(
    <Box className={classes.root}>
    <Container className={classes.containerStyle}>
    <Grid container spacing={7}>
      <Grid item xs={12} sm={12} md={4} lg={3}  >
      <ProfileSection />
      </Grid>
      <Grid item xs style={{backgroundColor:'yellow'}}>
      <Header />
      {children}
      <Footer />
      </Grid>
    </Grid>
    </Container>
    </Box>

  )}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
