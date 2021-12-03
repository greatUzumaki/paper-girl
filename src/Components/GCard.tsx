import { Paper, Typography } from '@mui/material';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { IGCard } from '../Configs/interfaces';
import dateFormat from 'dateformat';
import { Box } from '@mui/system';

const useStyles = createUseStyles({
  card: {
    width: 345,
    height: 210,
    backgroundColor: 'white',
    marginBottom: 60,
    '&:hover': {
      transform: 'scale(105%)',
      '& $container': {
        top: 0,
      },
    },
    transition: 'all .3s !important',
    textDecoration: 'none',
    overflow: 'hidden',
  },
  price: {
    alignSelf: 'flex-end',
    backgroundColor: '#0074e4',
    color: 'white',
    borderRadius: 20,
    paddingInline: 10,
    paddingBlock: 5,
    textDecoration: 'line-through',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.8)',
    position: 'relative',
    top: 140,
    height: '100%',
    transition: 'all .2s',
  },
  title: {
    color: 'white',
    fontWeight: '600 !important',
    flexGrow: 1,
    padding: 10,
  },
  datePriceContainer: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
  },
});

const GCard = () => {
  const classes = useStyles();

  return (
    <Paper
      component='a'
      target='_blank'
      href='#'
      className={classes.card}
      sx={{
        backgroundImage:
          'url(https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_PaladinsEpicPack_EvilMojoGames_AddOn_S1_2560x1440-8a274ee54c18954d697e065b5eb79e68)',
        backgroundSize: 'cover',
      }}
      elevation={5}
    >
      <Box className={classes.container}>
        <Typography className={classes.title}>
          Stubbs the Zombie in Rebel Without a Pulse
        </Typography>

        <Box className={classes.datePriceContainer}>
          <Typography sx={{ flexGrow: 1, color: 'gray' }}>
            {dateFormat('2021-10-18T15:00:00.000Z', 'dd.mm')}
          </Typography>

          <Typography
            className={classes.price}
            sx={{ fontWeight: 600, fontSize: 14 }}
          >
            1999 ₽
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default GCard;
