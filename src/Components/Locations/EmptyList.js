import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';

export const EmptyList = () => {
  return (
    <Paper sx={{ width: '100%', margin: '10px 0', padding: '20px 0' }}>
      <Typography variant="h6" textAlign="center">
        No saved locations yet, go to the menu to add your first location!
      </Typography>
      <Player
        style={{ height: '300px' }}
        src="https://assets7.lottiefiles.com/packages/lf20_sj0skmmg.json"
        loop
        autoplay
        speed={1.0} />
    </Paper>
  )
};