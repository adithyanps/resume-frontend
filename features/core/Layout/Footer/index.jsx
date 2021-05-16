import React from "react";
import { makeStyles, Box, Grid } from "@material-ui/core";
import { extraColors } from "../..";
import Typography from "../../../../components/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "8px",
    backgroundColor: extraColors.base.main,
    minHeight: "63px",
    padding: "16px",
    [theme.breakpoints.up("md")]: {
      maxHeight: "63px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container direction="row-reverse">
        <Grid item xs={12} sm={8} md={5}>
          <Box display="flex" alignItems="center">
            <Typography variant="h6">
              @2021 All rights reserved.Designed by{" "}
              <a
                href="https://www.novizco.com/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                Novizco
              </a>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={7}>
          <Box display="flex" alignItems="center">
            <Typography variant="caption">Adithyan P S</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
