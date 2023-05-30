import React from 'react';
import { Card, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import EditLocationAltOutlinedIcon from '@mui/icons-material/EditLocationAltOutlined';
import WrongLocationOutlinedIcon from '@mui/icons-material/WrongLocationOutlined';

export const Location = () => {
  return (
    <Card sx={{ maxWidth: 400, maxHeight: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <EditLocationAltOutlinedIcon />
        </IconButton>
        <IconButton>
          <WrongLocationOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}