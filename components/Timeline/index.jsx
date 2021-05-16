import React from 'react';
import {
  makeStyles, Typography, withStyles,
} from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import { TimelineItem as MuiTimelineItem } from '@material-ui/lab';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import PropTypes from 'prop-types';
import {
  extraColors,
} from '../../features/core';

const useStyles = makeStyles((theme) => ({
  timeline: {
    padding: '0 !important',
  },
  mainTimeLineItem: {
    minHeight: '100px !important',
  },
  mainTimeLineDot: {
    color: theme.palette.warning.contrastText,
    backgroundColor: extraColors.accent1.main,
    fontSize: 'small !important',
    padding: '10px !important',
  },
  subTimeLineDot: {
    color: theme.palette.warning.contrastText,
    borderColor: extraColors.accent1.main,
    // fontSize: 'small !important',
    padding: '4px !important',
  },
  // timeLineConnector:{
  //   backgroundColor: extraColors.accent2.light
  // },
  seperator: {
    paddingLeft: '18px',
  },
}));

const TimelineItem = withStyles({
  missingOppositeContent: {
    '&:before': {
      display: 'none',
    },
  },
})(MuiTimelineItem);

const TimeLine = (props) => {
  const {
    title,
    children,
    icon,
  } = props;

  const classes = useStyles();

  return (
    <Timeline className={classes.timeline}>
      <TimelineItem className={classes.mainTimeLineItem}>
        <TimelineSeparator>
          <TimelineDot className={classes.mainTimeLineDot}>
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h3" style={{ paddingTop: '9px' }}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}

    </Timeline>
  );
};

export const TimeLineSeperator = () => {
  const classes = useStyles();
  return (
    <TimelineSeparator className={classes.seperator}>
      <TimelineDot
        variant="outlined"
        className={classes.subTimeLineDot}
      />
      <TimelineConnector className={classes.timeLineConnector} />
    </TimelineSeparator>
  );
};

TimeLine.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
};

TimeLine.defaultProps = {
  title: null,
};

export default TimeLine;
