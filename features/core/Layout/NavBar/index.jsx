import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import {
  makeStyles, SwipeableDrawer, Grid, Menu, AppBar, MenuItem, IconButton, Box, Hidden, Toolbar,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import NearMeIcon from '@material-ui/icons/NearMe';
import clsx from 'clsx';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '../../../../components/Typography';
import { extraColors } from '../..';
import Button from '../../../../components/Button';
import Link from '../../../../components/Link';
import resumeData from '../../../../utils/resumeData';
import getLinkData from './getLinkData';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '10px',
    paddingLeft: '28px',
    paddingRight: '28px',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '28px',
      paddingRight: '28px',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  appRoot: {
    borderRadius: '16px',
    backgroundColor: extraColors.base.main,
    maxHeight: '64px',
    [theme.breakpoints.up('md')]: {
      maxHeight: '63px',
    },

  },
  homeIcon: {
    borderTopLeftRadius: '16px',
    borderBottomLeftRadius: '16px',
    display: 'flex',
    minHeight: 'inherit',
    alignItems: 'center',
    backgroundColor: extraColors.accent1.main,
    paddingLeft: '8px',
    paddingRight: '8px',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '12px',
    color: theme.palette.warning.contrastText,
    [theme.breakpoints.up('lg')]: {
      paddingRight: '16px',

    },
  },
  menuButton: {
    color: theme.palette.warning.contrastText,
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    padding: `${theme.spacing(2)}px 0`,
    margin: `0 ${theme.spacing(1)}px`,
    display: 'inline-block',
    '&:hover': {
      textDecoration: 'none',
      '&:after': {
        transform: 'scaleX(1)',
      },
    },
    '&:after': {
      marginTop: theme.spacing(0.5),
      transformOrigin: ' 0% 50%',
      display: 'block',
      content: "''",
      borderBottom: `2px solid ${fade(extraColors.accent1.main, 0.7)}`,
      transform: 'scaleX(0)',
      transition: 'transform 250ms ease-in-out',
    },
    [theme.breakpoints.up('lg')]: {
      margin: `0 ${theme.spacing(2)}px`,
    },
  },
  navLinkActive: {
    '&:after': {
      transform: 'scaleX(1)',
      borderBottom: `2px solid ${extraColors.accent1.main}`,
    },
    '& span': {
      fontWeight: 500,
    },
  },
}));

const getNavLinks = (isActive, classes, linkData) => linkData.map((l, i) => (
  <Link
    className={clsx(classes.navLink, { [classes.navLinkActive]: isActive(l) })}
    // eslint-disable-next-line react/no-array-index-key
    key={i}
    href={l.url}
  >
    <Typography
      variant="body2"
      component="span"
      color="textSecondary"
    >
      {l.text}
    </Typography>
  </Link>
));

const Navbar = () => {
  const [socialMedia, setSocialMedia] = useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  const router = useRouter();

  const isActive = useCallback((l) => router.pathname.includes(l.url), [router]);

  const linkData = useMemo(() => getLinkData(), []);

  useEffect(() => {
    if (resumeData) {
      const {
        socials,
      } = resumeData;
      if (resumeData.socials) {
        if (socials.LinkedIn) {
          socials.LinkedIn.icon = <LinkedInIcon />;
        }
        if (socials.Github) {
          socials.Github.icon = <GitHubIcon />;
        }
        if (socials.Facebook) {
          socials.Facebook.icon = <FacebookIcon />;
        }
        if (socials.Instagram) {
          socials.Instagram.icon = <InstagramIcon />;
        }
      }
      setSocialMedia(socials);
    }
  }, [socialMedia, setSocialMedia]);

  // const handleMenu = useCallback((event) => {
  //   console.log(event ,'event')
  //   console.log(event.target.value ,'event')

  //   setAnchorEl(event.currentTarget);
  // },[]);

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const homeIconHandler = useCallback(() => {
    router.push('/');
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appRoot}>
        <Toolbar style={{ margin: 0, padding: 0 }}>
          <Box className={classes.homeIcon}>
            <IconButton onClick={homeIconHandler} className={classes.menuButton} color="inherit" aria-label="menu">
              <HomeIcon />
            </IconButton>

          </Box>
          <Box pl={2} style={{ flexGrow: 1, display: 'flex' }}>
            <Hidden only={['xs', 'sm']}>
              {
            getNavLinks(isActive, classes, linkData)
          }
            </Hidden>
          </Box>
          <Box display="flex">

            {
          socialMedia
          && Object.keys(socialMedia).map((item) => {
            if (socialMedia[item].link) {
              return (
                <a
                  href={socialMedia[item].link}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcons}
                >
                  {socialMedia[item].icon}
                </a>
              );
            }
            return null;
          })
        }

            <Hidden smDown>
              <Box style={{ display: 'flex', paddingRight: '16px' }} minHeight={{ md: '40px' }}>
                <Button icon={<NearMeIcon />}>
                  Hire me
                </Button>
              </Box>
            </Hidden>
          </Box>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>

              <SwipeableDrawer
                anchor="top"
                open={open}
                onClose={handleClose}
                onOpen={handleMenu}
              >
                {getNavLinks(isActive, classes, linkData)}

              </SwipeableDrawer>
            </Hidden>

          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
