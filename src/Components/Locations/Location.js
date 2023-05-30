import React from 'react';
import { Card, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export const Location = ({ title, description }) => {
  return (
    <Card sx={{ maxWidth: 400, maxHeight: 200, margin: '10px' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <EditOutlinedIcon />
        </IconButton>
        <IconButton>
          <DeleteOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}