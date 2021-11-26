import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { mainPink } from '../Configs/colors';
import GCard from './GCard';

const useStyles = createUseStyles({
  root: {
    filter: 'blur(2px)',
    '&:hover': { filter: 'none' },
    transition: 'all .1s linear',
    '@media(max-width: 1200px)': {
      filter: 'none',
    },
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
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: 50,
  },
});

const FreeGames = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography
          align='center'
          className={classes.title}
          sx={{ fontWeight: 600 }}
          variant='h3'
        >
          Активные раздачи
        </Typography>
        <Box className={classes.box}>
          <GCard />
        </Box>
      </Container>
    </div>
  );
};

export default FreeGames;
