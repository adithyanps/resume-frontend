/* eslint-disable no-unused-vars */
import React, {
    useState,
    useCallback,
  } from 'react';
  import {
    Button
  ,
    Grid,
    Box,
  } from '@material-ui/core';
  import {
    ArrowBack as ArrowBackIcon,
  } from '@material-ui/icons';
  import Typography from '../../components/Typography/index'


  const CoreComponents = () => {
    const [enableProgress, setEnableProgress] = useState(false);

    const onClickForProgress = useCallback((e) => {
      if (e) {
        e.preventDefault();
      }
      setEnableProgress(true);
    }, [setEnableProgress]);

    return (
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Button>
            Text
          </Button>
        </Grid>
        <Grid item md={3}>
          <Button enableArrow>
            Text
          </Button>
        </Grid>
        <Grid item md={3}>
          <Button enableArrow href="/hello">
            Text
          </Button>
        </Grid>
        <Grid item md={3}>
          <Button size="small">
            Text
          </Button>
        </Grid>
        <Grid item md={3}>
          <Button size="xsmall">
            Text
          </Button>
        </Grid>
        <Grid item md={3}>
          <Button variant="outlined">
            Text
          </Button>
        </Grid>
        <Grid item md={3}>
          <Button disabled variant="outlined" enableArrow>
            Text
          </Button>
        </Grid>
        <Grid item md={3}>
          <Button fullWidth variant="outlined" href="/hello">
            Text
          </Button>
        </Grid>
        <Grid item md={3}>
          <Button enableArrow variant="outlined" size="small">
            Text
          </Button>
        </Grid>
        <Grid item md={3}>
          <Button enableArrow variant="outlined" size="xsmall">
            Text
          </Button>
        </Grid>
        <Grid item md={3}>
          <Button enableProgress enableArrow variant="outlined" size="xsmall">
            Text
          </Button>
        </Grid>
        <Grid item md={3}>
          <Button enableProgress size="small">
            Text
          </Button>
        </Grid>
        <Grid item md={3}>
          <Button enableProgress enableArrow variant="outlined">
            Text
          </Button>
        </Grid>
        <Grid item md={3}>
        <Typography variant="h1">
          Text
        </Typography>
      </Grid>



      </Grid>
    );
  };

  export default CoreComponents;
