import { Paper, Typography } from '@mui/material';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { IGCard } from '../Configs/interfaces';

const useStyles = createUseStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 220,
    height: 300,
    backgroundColor: 'white',
    marginBottom: 70,
    '&:hover': {
      transform: 'scale(105%)',
    },
    transition: 'all .3s !important',
    textDecoration: 'none',
    padding: 15,
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
});

const GCard = (props: IGCard) => {
  const classes = useStyles();

  return (
    <Paper component='a' href='#' className={classes.card} elevation={5}>
      <Typography sx={{ flexGrow: 1 }}>{props.title}</Typography>
      <Typography
        className={classes.price}
        sx={{ fontWeight: 600, fontSize: 14 }}
      >
        {props.price} ₽
      </Typography>
    </Paper>
  );
};

export default GCard;
