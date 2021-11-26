import React from 'react';
import { createUseStyles } from 'react-jss';
import { mainBlack } from '../Configs/colors';

const useStyles = createUseStyles({
  root: {
    backgroundColor: mainBlack,
    minHeight: '100vh',
  },
});

const Home = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default Home;
