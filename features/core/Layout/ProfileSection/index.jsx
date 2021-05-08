import React from 'react';
import {
  Box,
  Paper,
  makeStyles
} from '@material-ui/core';
import Image from 'next/image'
import Typography from '../../../../components/Typography';
import profileImage from './imgs/profile-picture.png'

const useStyles = makeStyles({
  message: {
    fontWeight: 600,
  },
  closeButton: {
    opacity: 0.75,
  },
});

// const classes = useStyles();

const ProfileSection = ()=>(
  <Paper>
  <Box pl={1} pb={2}>
    <Typography variant="h3">
      Adithyan ps
    </Typography>
    <Typography variant="body2">
    Software Engineer
  </Typography>
  </Box>
  <Box width="100%" height="100%">
  <Image src={profileImage} alt="me" width={500} height={500} />

  </Box>
  </Paper>
  )
export default ProfileSection;
// <img width="100%" src={profileImage} alt="test" />

