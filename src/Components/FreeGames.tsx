import { CircularProgress, Container, Slider, Typography } from '@mui/material';
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
    paddingTop: 70,
    paddingBottom: 30,
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
  slider: {
    display: 'flex',
    paddingBottom: 30,
    position: 'sticky',
    top: 64,
    borderRadius: 0,
    zIndex: 999,
    justifyContent: 'flex-end',
    '@media(max-width: 900px)': {
      display: 'none',
    },
  },
});

const FreeGames = () => {
  const classes = useStyles();
  const [allGames, setAllGames] = useState<GameType[]>([]);
  const [size, setSize] = useState(340);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch('https://pipergirl.devhtw.ru/api/freegames')
      .then((response) => response.json())
      .then((result) => setAllGames(result))
      .then(() => setLoad(false))
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setSize(newValue as number);
  };

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
        <Box className={classes.slider}>
          <div
            style={{
              backgroundColor: 'rgba(18,18,18,0.5)',
              paddingInline: 20,
              borderRadius: 5,
            }}
          >
            <Slider
              sx={{
                width: 200,
              }}
              aria-label='Рзамер блоков'
              color='secondary'
              value={size}
              onChange={handleChange}
              min={300}
              max={600}
              step={15}
            />
          </div>
        </Box>
        <Fade bottom cascade>
          <Box className={classes.box}>
            {load ? (
              <CircularProgress />
            ) : (
              allGames.map((game, index) => {
                return <GCard key={index} gameData={game} size={size} />;
              })
            )}
          </Box>
        </Fade>
      </Container>
    </div>
  );
};

export default FreeGames;
