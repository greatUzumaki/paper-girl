import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { mainPink } from '../Configs/colors';

const useStyles = createUseStyles({
  root: {
    backgroundColor: mainPink,
    height: 300,
  },
  container: {
    display: 'flex !important',
    paddingTop: 30,
  },
  box1: { display: 'flex', flexDirection: 'column', flexGrow: 1 },
  box2: { display: 'flex', flexDirection: 'column', width: 200 },
  box3: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.box1}>
          <Typography variant='h4' sx={{ color: 'black', paddingBottom: 1 }}>
            PaperGirl
          </Typography>
          <Typography variant='subtitle2'>
            Бесплатные игры и акции EGS
          </Typography>
        </Box>
        <Box className={classes.box2}>
          <Typography>Контакты</Typography>
        </Box>
        <Box className={classes.box3}>
          <Typography>Ссылки</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
