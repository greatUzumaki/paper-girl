import React from 'react';
import { createUseStyles } from 'react-jss';
import { AD } from '../Components/AD';
import FreeGames from '../Components/FreeGames';
import Hero from '../Components/Hero';
import Links from '../Components/Links';
import { mainBlack } from '../Configs/colors';

const useStyles = createUseStyles({
  root: {
    backgroundColor: mainBlack,
    minHeight: '100vh',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Hero />
      <Links />
      <FreeGames />
      <AD />
    </div>
  );
};

export default Home;
