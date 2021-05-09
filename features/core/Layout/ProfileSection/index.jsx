import React , {useEffect, useState} from 'react';
import {
  Box,
  Paper,
  makeStyles,
  withStyles
} from '@material-ui/core';
import Image from 'next/image'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { TimelineContent, TimelineItem as MuiTimelineItem} from '@material-ui/lab';
import PropTypes from 'prop-types'
import GetAppIcon from '@material-ui/icons/GetApp';
import Typography from '../../../../components/Typography';
import profileImage from './imgs/profile-picture.png'
import TimeLine, {TimeLineSeperator} from '../../../../components/TimeLine';
import Button from '../../../../components/Button';
import resumeData from '../../../../utils/resumeData';

const useStyles = makeStyles((theme)=>({
  // root:{

  // },
  profileInfo:{
   top: 0,
   left: 0,
   marginTop: '-70px',
   marginRight: '10px',
  },
  timeLineContent:{
    marginTop: '-4px',
    marginBottom: '10px'
  },
  titleStyle: {
    color: theme.palette.warning.contrastText,
    fontSize: 13.5
  },
  titleContentStyle: {
    display: 'flex',
    alignItems: 'center',
    marginLeft:'4px'
  }
}));

const TimelineItem = withStyles({
  missingOppositeContent:{
    "&:before": {
      display: "none"
    }
  }
})(MuiTimelineItem)

const CustomTimeLineItem =({title, text, link}) => {
  const classes = useStyles();
  return(
  <TimelineItem>
    <TimeLineSeperator />
    <TimelineContent className = {classes.timeLineContent}>
    {link ? (
      <Box style={{width: 'max-content'}} display='flex' alignItems="baseline">
      <Typography  className={classes.titleStyle}>{title}:</Typography>
      <Typography className={classes.titleContentStyle} variant="h6">
       <a href={link} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}> {text}</a></Typography>
      </Box>
    ) : (
      <Box style={{width: 'max-content'}} display='flex' alignItems="baseline">
      <Typography  className={classes.titleStyle}>{title}:</Typography>
      <Typography className={classes.titleContentStyle} variant="h6">{text}</Typography>

      </Box>
    )}
    </TimelineContent>
  </TimelineItem>
)}

const ProfileSection = ()=>{
  const [socialMedia, setSocialMedia] = useState({});

  const classes = useStyles();

  useEffect(()=>{
    if(resumeData){
      if(resumeData.socials){
        const {
          socials
        } = resumeData;
        if(socials.linkedIn){
          socials.linkedIn.icon = <LinkedInIcon />
        }
        else if(socials.github){
          socials.github.icon = <GitHubIcon />
        } else if(socials.facebook){
          socials.facebook.icon = <FacebookIcon />
        } else if(socials.instagram){
          socials.instagram.icon = <InstagramIcon />
        }
      setSocialMedia(socials)
      }
    }

  },[socialMedia, setSocialMedia])

  return(
    <Paper className={classes.root}>
      <Box pl={2} pb={2} pt={2}>
        <Typography variant="h3">
          {resumeData.name}
        </Typography>
        <Typography variant="body2">
          {resumeData.jobTitle}
        </Typography>
      </Box>
      <Box width="100%" height="100%" pb={2}>
        <Image src={profileImage} alt="me" width={500} height={500} />
      </Box>
      <Box className={classes.profileInfo}>
        <TimeLine icon={<PersonOutlineIcon />} >
          <CustomTimeLineItem title="Name" text={resumeData.name} />
            <CustomTimeLineItem title="Title" text={resumeData.jobTitle} />
            <CustomTimeLineItem title="Email" text={resumeData.email} />
            {socialMedia &&
              Object.keys(socialMedia).map(item=>{
                if(socialMedia[item].link){
                  return(
                    <CustomTimeLineItem
                    title={item}
                    text={socialMedia[item].text}
                    link={socialMedia[item].link}/>
                  )

                }
                return null
              })
            }
        </TimeLine>
      </Box>
      <Box display='flex' alignContent='center' width="100%" justifyContent='center'>
      <Button icon={<GetAppIcon />}>Download CV</Button>
      </Box>
    </Paper>
  )}

  CustomTimeLineItem.propTypes ={
    text: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string
  }
  CustomTimeLineItem.defaultProps = {
    text: null,
    title: null,
    link: null
  }
export default ProfileSection;
// <img width="100%" src={profileImage} alt="test" />
