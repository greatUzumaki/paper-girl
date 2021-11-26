import { Paper } from '@mui/material';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  card: {
    width: 300,
    height: 400,
    backgroundColor: 'white',
  },
});

const GCard = () => {
  const classes = useStyles();

  return <Paper className={classes.card}></Paper>;
};

export default GCard;
