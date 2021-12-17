import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { mainPink } from '../Configs/colors';
import { discordLink, telegramLink } from '../Configs/links';
import Discrod from '../Images/discord.png';
import Telegram from '../Images/telegram.png';

const useStyles = createUseStyles({
  root: {
    filter: 'blur(2px)',
    '&:hover': { filter: 'none' },
    transition: 'all .1s linear',
    '@media(max-width: 1200px)': {
      filter: 'none',
    },
    paddingBottom: 80,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: mainPink,
    paddingBlock: 70,
    textShadow: '0 0px 10px black',
  },
  or: { color: mainPink, textShadow: '0 0px 10px black' },
  box: {
    display: 'flex',
    '@media(max-width: 900px)': {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discord: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 500,
    marginBottom: 20,
    filter: 'grayscale(50%)',
    '&:hover': {
      filter: 'none',
    },
    borderRadius: 200,
  },
  icon: {
    width: 350,
    '@media(max-width: 900px)': {
      width: 230,
    },
    '&:hover': {
      transform: 'scale(1.2) rotate(5deg)',
    },
    transition: 'all .3s',
  },
});

const Links = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id='links'>
      <Container className={classes.container}>
        <Typography
          align='center'
          className={classes.title}
          sx={{ fontWeight: 600 }}
          variant='h3'
        >
          Оформите подписку
        </Typography>
        <Box className={classes.box}>
          <Box className={classes.discord}>
            <a href={discordLink} target='_blank' rel='noreferrer'>
              <img src={Discrod} className={classes.icon} alt='discord' />
            </a>
          </Box>
          <Typography
            align='center'
            className={classes.or}
            sx={{ fontWeight: 600, fontSize: 30 }}
          >
            ИЛИ
          </Typography>
          <Box className={classes.discord}>
            <a href={telegramLink} target='_blank' rel='noreferrer'>
              <img src={Telegram} className={classes.icon} alt='telegram' />
            </a>
          </Box>
        </Box>
        <Typography
          align='center'
          className={classes.or}
          sx={{ fontWeight: 600, fontSize: 20 }}
        >
          (А лучше там и там)
        </Typography>
      </Container>
    </div>
  );
};

export default Links;
