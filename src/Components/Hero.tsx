import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { mainPink } from '../Configs/colors';
import Back from '../Images/background.jpg';

const useStyles = createUseStyles({
  back: {
    backgroundImage: `url(${Back})`,
    filter: 'blur(2px)',
    '&:hover': { filter: 'none' },
    transition: 'all .1s linear',
    '@media(max-width: 1200px)': {
      filter: 'none',
    },
  },
  root: {
    display: 'flex !important',
    minHeight: 500,
    alignItems: 'center',
  },
  title: {
    color: mainPink,
    textShadow: '0 0px 10px black',
    '@media(max-width: 900px)': {
      fontSize: '45px !important',
    },
  },
  desc: {
    color: 'white',
    textShadow: '0 0px 10px black',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
});

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.back}>
      <Container className={classes.root}>
        <Box className={classes.box}>
          <Typography
            variant='h2'
            sx={{ fontWeight: 600 }}
            className={classes.title}
          >
            Бесплатные игры!!!
          </Typography>
          <Typography className={classes.desc} sx={{ fontWeight: 400 }}>
            Подпишитесь на уведомления PaperGirl о раздачах
            <br /> и играйте на халяву
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Hero;
