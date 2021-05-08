import React from 'react';
import {
  Container,
  Grid
} from '@material-ui/core';
import PropTypes from 'prop-types';
import ProfileSection from './ProfileSection';
import Header from './Header';
import Footer from './Footer';


const Layout = (props)=>{
  const {
    children
  } = props;

  return(
  <Container>
  <Grid container>
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
  )}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
