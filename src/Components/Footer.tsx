import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { mainPink } from '../Configs/colors';
import Face from '../Images/face.png';

const useStyles = createUseStyles({
  root: {
    backgroundColor: mainPink,
    height: 300,
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    display: 'flex !important',
    paddingTop: 30,
    flexWrap: 'wrap',
  },
  box1: { display: 'flex', flexDirection: 'column', flexGrow: 1 },
  box2: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    '@media(max-width: 900px)': {
      paddingTop: 20,
    },
  },
  box3: {
    display: 'flex',
    flexDirection: 'column',
    '@media(max-width: 900px)': {
      paddingTop: 20,
    },
  },
  img: {
    position: 'absolute',
    width: 200,
    bottom: -50,
    left: -50,
    '&:hover': {
      bottom: 0,
      left: 0,
    },
    '@media(max-width: 900px)': {
      width: 150,
      bottom: 0,
      left: 0,
    },
    transition: 'all .2s linear',
    cursor: 'pointer',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.box1}>
          <Typography
            variant='h4'
            sx={{ color: 'black', paddingBottom: 1, fontWeight: 600 }}
          >
            PaperGirl
          </Typography>
          <Typography variant='subtitle2'>
            Бесплатные игры и акции EGS
          </Typography>
        </Box>
        <Box className={classes.box2}>
          <Typography sx={{ fontWeight: 600 }}>Контакты</Typography>
        </Box>
        <Box className={classes.box3}>
          <Typography sx={{ fontWeight: 600 }}>Ссылки</Typography>
        </Box>
      </Container>
      <img className={classes.img} src={Face} alt='face' />
    </div>
  );
};

export default Footer;
