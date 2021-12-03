import { Button, Container, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Fade from 'react-reveal/Fade';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = createUseStyles({
  root: {
    '@media(max-width: 900px)': {
      display: 'none',
    },
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#ffbba2',
  },
  container: {
    display: 'flex !important',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
  },
  text: {},
  button: {
    border: 'solid 2px black !important',
    fontWeight: '600 !important',
    marginRight: '40px !important',
    width: 200,
  },
  close: {
    position: 'absolute !important',
    right: 10,
  },
});

export const AD = () => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  const toggleScroll = () => {
    if (window.scrollY > 1200) {
      setVisible(true);
      document.removeEventListener('scroll', toggleScroll);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', toggleScroll);
  }, []);

  return !visible ? null : (
    <Fade bottom>
      <div className={classes.root}>
        <Container className={classes.container} maxWidth='xl'>
          <Typography className={classes.text}>
            Подписывайтесь на наши источники!
          </Typography>
          <Button
            href='#links'
            color='inherit'
            variant='outlined'
            className={classes.button}
          >
            GO
          </Button>
          <IconButton
            className={classes.close}
            onClick={() => setVisible(false)}
          >
            <CloseIcon />
          </IconButton>
        </Container>
      </div>
    </Fade>
  );
};
