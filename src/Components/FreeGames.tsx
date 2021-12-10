import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { mainPink } from '../Configs/colors';
import GCard from './GCard';
import Fade from 'react-reveal/Fade';
import { GameType } from '../Configs/types';

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
    justifyContent: 'space-around',
    '@media(max-width: 1200px)': {
      justifyContent: 'center',
    },
  },
});

const FreeGames = () => {
  const classes = useStyles();
  const [allGames, setAllGames] = useState<GameType[]>([]);

  useEffect(() => {
    fetch('https://pipergirl.devhtw.ru/api/freegames')
      .then((response) => response.json())
      .then((result) => setAllGames(result))
      .catch((e) => console.log(e));
  }, []);

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
        <Fade bottom cascade>
          <Box className={classes.box}>
            {allGames.map((game, index) => {
              return <GCard key={index} gameData={game} />;
            })}
          </Box>
        </Fade>
      </Container>
    </div>
  );
};

export default FreeGames;
