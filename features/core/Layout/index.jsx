import React from 'react';
import {
  Container,
  Grid,
  Box,
  makeStyles,
  Hidden,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import ProfileSection from './ProfileSection';
import Head from './Head';
import Footer from './Footer';
import backGroundImg from './imgs/background.jpg';
import Navbar from './NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(180deg, ${theme.palette.common.white} 0%, ${theme.palette.background.default} 100%)`,
    backgroundImage: `url(${backGroundImg})`,
  },
  containerStyle: {
    marginTop: '20px',
    [theme.breakpoints.up('sm')]: {
      marginTop: '60px',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '80px',
    },
  },
}));

const Layout = (props) => {
  const {
    children,
    title,
  } = props;

  const classes = useStyles();

  return (
    <>
      <Head title={title} />
      <Box className={classes.root}>
        <Container className={classes.containerStyle}>
          <Grid container spacing={7}>
            <Hidden mdUp>
              <Navbar />
            </Hidden>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <ProfileSection />
            </Grid>
            <Grid item xs>
              <Hidden only={['xs', 'sm']}>
                <Navbar />
              </Hidden>
              {children}
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>

  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
