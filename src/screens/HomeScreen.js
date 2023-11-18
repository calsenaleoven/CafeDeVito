import React from 'react';
import { Box, Card, CardActionArea, Typography } from '@material-ui/core';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { useStyles } from '../styles';
import Logo from '../components/Logo';

export default function HomeScreen({ history }) { // Receive history prop
  const styles = useStyles();

  return (
    <Card>
      <CardActionArea onClick={() => history.push('/choose')}>
        <Box className={[styles.root, styles.red]}>
          <Box className={[styles.main, styles.center]}>
            <Typography component="h6" variant="h6">
              Fast & Easy
            </Typography>

            <Typography component="h1" variant="h1">
              Order <br /> & Pay <br /> here
            </Typography>
            <TouchAppIcon fontSize="large"></TouchAppIcon>
          </Box>
          <Box className={[styles.center, styles.green]}>
            <Logo Large></Logo>
            <Typography component="h5" variant="h5">
              Touch to Start
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
