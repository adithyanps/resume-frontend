import React, {useEffect, useCallback ,} from 'react';
import {
    Container,
    Box,
  } from '@material-ui/core';
import CoreComponents from './CoreComponents';
import Types from './Types';


  const ThemeDemo = () =>{

    return(
      <Container>
      <Box my={10}>
      <CoreComponents />
      <Box mb={5} />
      <Types />
      <Box mb={5} />
    </Box>
      </Container>
    )
  }

export default ThemeDemo;
