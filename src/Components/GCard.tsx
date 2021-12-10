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
      '& $desc': {
        display: 'block',
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
    padding: 10,
    flexGrow: 1,
    fontSize: '19px !important',
  },
  datePriceContainer: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
  },
  desc: {
    color: 'white',
    flexGrow: 1,
    padding: 10,
    display: 'none',
  },
});

const GCard = (props: IGCard) => {
  const classes = useStyles();

  return (
    <Paper
      component='a'
      target='_blank'
      href={props.gameData.url}
      className={classes.card}
      sx={{
        backgroundImage: `url(${props.gameData.logo})`,
        backgroundSize: 'cover',
      }}
      elevation={5}
    >
      <Box className={classes.container}>
        <Typography className={classes.title}>
          {props.gameData.title}
        </Typography>

        <Box>
          <Typography className={classes.desc}>
            {props.gameData.description.length > 110
              ? props.gameData.description.slice(0, 100) + '...'
              : props.gameData.description}
          </Typography>
        </Box>

        <Box className={classes.datePriceContainer}>
          <Typography sx={{ flexGrow: 1, color: 'gray', fontWeight: 600 }}>
            {dateFormat(props.gameData.promotions.startDate, 'dd.mm')}-
            {dateFormat(props.gameData.promotions.endDate, 'dd.mm')}
          </Typography>

          <Typography
            className={classes.price}
            sx={{
              fontWeight: 600,
              fontSize: 14,
              display:
                props.gameData.price.originalPrice === 0 ? 'none' : 'block',
            }}
          >
            {props.gameData.price.originalPrice / 100} ₽
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default GCard;
