import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { mainPink } from '../Configs/colors';
import Telegram from '../Images/telegram.png';
import Discrod from '../Images/discord.png';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    filter: 'blur(2px)',
    '&:hover': { filter: 'none' },
    transition: 'all .1s linear',
    '@media(max-width: 1200px)': {
      filter: 'none',
    },
  },
  title: {
    color: mainPink,
    paddingBlock: 70,
    textShadow: '0 0px 10px black',
  },
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingBottom: 50,
  },
  icon: {
    width: 250,
    '@media(max-width: 900px)': {
      width: 230,
    },
    '&:hover': {
      transform: 'scale(1.2) rotate(6deg)',
    },
    transition: 'all .3s',
    paddingBottom: 50,
  },
});

const Links = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography
        align='center'
        className={classes.title}
        sx={{ fontWeight: 600 }}
        variant='h3'
      >
        Оформите подписку
      </Typography>
      <Box className={classes.box}>
        <a href='https://t.me/Paper_Girl_Bot' target='_blank' rel='noreferrer'>
          <img src={Discrod} className={classes.icon} alt='discord' />
        </a>
        <a href='https://t.me/Paper_Girl_Bot' target='_blank' rel='noreferrer'>
          <img src={Telegram} className={classes.icon} alt='telegram' />
        </a>
      </Box>
    </Container>
  );
};

export default Links;
