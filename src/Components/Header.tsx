import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { mainBlack, mainPink } from '../Configs/colors';
import { subtitle } from '../Configs/randomText';

const RADIUS = 15;

const useStyles = createUseStyles({
  root: {
    borderBottomLeftRadius: RADIUS,
    borderBottomRightRadius: RADIUS,
  },
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 10,
  },
});

const Header = () => {
  const classes = useStyles();
  const [colors, setColors] = useState({
    bgColor: mainPink,
    textColor: 'black',
  });

  const toggleVisibility = () => {
    if (window.scrollY > 5)
      setColors({ bgColor: '#121212 !important', textColor: 'white' });
    else setColors({ bgColor: mainPink, textColor: 'black' });
  };

  const randomSubtitle = useMemo(
    () => subtitle[Math.floor(Math.random() * subtitle.length)],
    []
  );

  useEffect(() => window.addEventListener('scroll', toggleVisibility), []);

  return (
    <>
      <AppBar
        position='fixed'
        className={classes.root}
        sx={{ backgroundColor: colors.bgColor, transition: 'all .3s' }}
      >
        <Container>
          <Toolbar sx={{ paddingInline: '0px !important' }}>
            <Box className={classes.container}>
              <Typography variant='h4' sx={{ color: colors.textColor }}>
                PaperGirl
              </Typography>
              <Typography variant='subtitle2' sx={{ color: colors.textColor }}>
                {randomSubtitle}
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar sx={{ backgroundColor: mainBlack }} />
    </>
  );
};

export default Header;
