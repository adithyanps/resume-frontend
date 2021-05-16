import React from 'react';
import { Button as MuiButton, makeStyles, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { extraColors } from '../../features/core';

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    backgroundColor: extraColors.accent1.main,
    fontSize: '14px !important',
    fontWeight: 500,
    border: 0,
    borderRadius: '50px !important',
    // paddingTop: '1px !important',
    paddingRight: '12px !important',
    lineHeight: '35px !important',
    minWidth: '100px !important',
    outline: 'none !important',
  },
  iconContainer: {
    backgroundColor: extraColors.base.main,
    color: theme.palette.warning.contrastText,
    borderRadius: '50px !important',
    height: '27px important',
    width: '27px !important',
    lineHeight: '29px !important',
    textAlign: 'center !important',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
  },
  btnText: {
    // height: '100%',
    // alignItems: 'center',
    color: theme.palette.warning.contrastText,
    fontSize: '14px !important',
    textAlign: 'center',
    width: '100%',
    marginLeft: '5px',
    marginRight: '5px',
  },
}));

const Button = (props) => {
  const classes = useStyles();

  const {
    children,
    icon,
  } = props;
  return (
    <MuiButton
      className={classes.buttonContainer}
      endIcon={icon && (<Box className={classes.iconContainer}>{icon}</Box>)}
    >
      <span className={classes.btnText}>{children}</span>
    </MuiButton>

  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.element,
};

Button.defaultProps = {
  icon: null,
};
export default Button;
